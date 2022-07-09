/**
 * This module uses the following environment variables:
 * - INTEGRATION_FLOWDOCK_TOKEN
 *   - Flowdock API token
 *   - INTEGRATION_FLOWDOCK_TOKEN="foobar"
 * - INTEGRATION_FLOWDOCK_SIGNATURE_KEY
 *   - Flowdock webhook signature key
 *   - INTEGRATION_FLOWDOCK_SIGNATURE_KEY="foobar"
 */
interface Environment {
	api: string;
	signature: string;
}

export const defaults: Environment = {
	api: 'ncuu6aefw39ymw56wi7iqhsn4mvetq7w',
	signature: 'uNyDWFgL2Gw5NPnsEc9LM',
};

export const environment: Environment = {
	api: process.env['INTEGRATION_FLOWDOCK_TOKEN'] || defaults.api,
	signature:
		process.env['INTEGRATION_FLOWDOCK_SIGNATURE_KEY'] || defaults.signature,
};
