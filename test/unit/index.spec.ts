import { defaultPlugin } from '@balena/jellyfish-plugin-default';
import { PluginManager } from '@balena/jellyfish-worker';
import { flowdockPlugin } from '../../lib';

const pluginManager = new PluginManager([defaultPlugin(), flowdockPlugin()]);

test('Expected integrations are loaded', () => {
	const integrations = pluginManager.getSyncIntegrations();
	console.log('integrations:', integrations);

	// Sanity check
	expect(Object.keys(integrations).includes('flowdock')).toBeTruthy();
});
