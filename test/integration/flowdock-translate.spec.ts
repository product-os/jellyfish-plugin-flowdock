import ActionLibrary from '@balena/jellyfish-action-library';
import { defaultEnvironment } from '@balena/jellyfish-environment';
import { syncIntegrationScenario } from '@balena/jellyfish-test-harness';
import { DefaultPlugin } from '@balena/jellyfish-plugin-default';
import { FlowdockPlugin } from '../../lib';
import webhooks from './webhooks/flowdock';

const TOKEN = defaultEnvironment.integration.flowdock;

syncIntegrationScenario.run(
	{
		test,
		before: beforeAll,
		beforeEach,
		after: afterAll,
		afterEach,
	},
	{
		basePath: __dirname,
		plugins: [ActionLibrary, DefaultPlugin, FlowdockPlugin],
		cards: ['thread', 'whisper', 'message'],
		scenarios: webhooks,
		baseUrl: 'https://api.flowdock.com',
		stubRegex: /.*/,
		source: 'flowdock',
		options: {
			token: TOKEN,
		},
		isAuthorized: (self: any, request: any) => {
			return (
				request.headers.authorization ===
				`Basic ${Buffer.from(self.options.token.api).toString('base64')}`
			);
		},
	},
);
