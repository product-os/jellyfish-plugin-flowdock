import type { PluginDefinition } from '@balena/jellyfish-worker';
import { contracts } from './contracts';

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
		contracts,
	};
};
