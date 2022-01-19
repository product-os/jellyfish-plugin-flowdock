import { PluginDefinition } from '@balena/jellyfish-worker';
import { integrations } from './integrations';

// tslint:disable-next-line: no-var-requires
const { version } = require('../package.json');

/**
 * The Flowdock Jellyfish plugin.
 */
export const flowdockPlugin = (): PluginDefinition => {
	return {
		slug: 'plugin-flowdock',
		name: 'Flowdock Plugin',
		version,
		integrationMap: integrations,
		requires: [
			{
				slug: 'plugin-default',
				version: '>=22.x',
			},
		],
	};
};
