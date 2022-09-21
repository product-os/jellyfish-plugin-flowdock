import { PluginManager } from '@balena/jellyfish-worker';
import { flowdockPlugin } from '../../lib';

const pluginManager = new PluginManager([flowdockPlugin()]);

test('Expected contracts are loaded', () => {
	const contracts = pluginManager.getCards();
	expect(contracts['flowdock-thread'].name).toEqual('Flowdock thread');
	expect(contracts['flowdock-message'].name).toEqual('Flowdock message');
});
