import { defaultPlugin } from '@balena/jellyfish-plugin-default';
import { productOsPlugin } from '@balena/jellyfish-plugin-product-os';
import { testUtils } from '@balena/jellyfish-worker';
import _ from 'lodash';
import path from 'path';
import { flowdockPlugin } from '../../lib';
import { environment } from '../../lib/environment';
import webhooks from './webhooks';

let ctx: testUtils.TestContext;

beforeAll(async () => {
	ctx = await testUtils.newContext({
		plugins: [productOsPlugin(), defaultPlugin(), flowdockPlugin()],
	});
	await testUtils.translateBeforeAll(ctx);
});

afterEach(async () => {
	await testUtils.translateAfterEach(ctx);
});

afterAll(() => {
	testUtils.translateAfterAll();
	return testUtils.destroyContext(ctx);
});

describe('translate', () => {
	for (const testCaseName of Object.keys(webhooks)) {
		const testCase = webhooks[testCaseName];
		const expected = {
			head: testCase.expected.head,
			tail: _.sortBy(testCase.expected.tail, testUtils.tailSort),
		};
		for (const variation of testUtils.getVariations(testCase.steps, {
			permutations: false,
		})) {
			if (variation.combination.length !== testCase.steps.length) {
				continue;
			}

			test(`(${variation.name}) ${testCaseName}`, async () => {
				await testUtils.webhookScenario(
					ctx,
					{
						steps: variation.combination,
						prepareEvent: async (event: any): Promise<any> => {
							return event;
						},
						offset:
							_.findIndex(testCase.steps, _.first(variation.combination)) + 1,
						headIndex: testCase.headIndex || 0,
						original: testCase.steps,

						// If we miss events such as when a head contract was archived,
						// we usually can't know the date this happened, but we can
						// still apply it with a date approximation. In those cases,
						// its helpful to omit the update events from the tail checks.
						ignoreUpdateEvents: !_.isEqual(
							variation.combination,
							testCase.steps,
						),

						expected: _.cloneDeep(expected),
						name: testCaseName,
						variant: variation.name,
					},
					{
						source: 'flowdock',
						baseUrl: 'https://api.flowdock.com',
						uriPath: /.*/,
						basePath: path.join(__dirname, 'webhooks'),
						isAuthorized: (request: any) => {
							return (
								request.headers.authorization ===
								`Basic ${Buffer.from(environment.api).toString('base64')}`
							);
						},
					},
				);
			});
		}
	}
});
