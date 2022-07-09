import { defaults, environment } from '../../../lib/environment';

describe('Environment variables', () => {
	test('Default values are set', () => {
		expect(environment).toEqual({
			api: defaults.api,
			signature: defaults.signature,
		});
	});
});
