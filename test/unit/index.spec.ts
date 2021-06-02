/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { FlowdockPlugin } from '../../lib';

const plugin = new FlowdockPlugin();
const context = {
	id: 'jellyfish-plugin-flowdock-test',
};

test('Expected integrations are loaded', () => {
	const integrations = plugin.getSyncIntegrations(context);

	// Sanity check
	expect(integrations.flowdock.slug).toEqual('flowdock');
});
