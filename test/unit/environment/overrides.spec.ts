process.env.INTEGRATION_FLOWDOCK_TOKEN = 'foobar';
process.env.INTEGRATION_FLOWDOCK_SIGNATURE_KEY = 'buzbaz';

import { environment } from '../../../lib/environment';

afterAll(() => {
	delete process.env.INTEGRATION_FLOWDOCK_TOKEN;
	delete process.env.INTEGRATION_FLOWDOCK_SIGNATURE_KEY;
});

test('Can override environment variable defaults', () => {
	expect(environment).toEqual({
		api: 'foobar',
		signature: 'buzbaz',
	});
});
