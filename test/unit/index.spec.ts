import { PluginManager } from '@balena/jellyfish-worker';
import { flowdockPlugin } from '../../lib';

const pluginManager = new PluginManager([flowdockPlugin()]);

test('Expected integrations are loaded', () => {
	const integrations = pluginManager.getSyncIntegrations();
	expect(Object.keys(integrations).includes('flowdock')).toBeTruthy();
});
