/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { JellyfishPluginBase } from '@balena/jellyfish-plugin-base';
import integrations from './integrations';

/**
 * The Flowdock Jellyfish plugin.
 */
export class FlowdockPlugin extends JellyfishPluginBase {
	constructor() {
		super({
			slug: 'jellyfish-plugin-flowdock',
			name: 'Flowdock Plugin',
			version: '1.0.0',
			integrations,
			requires: [
				{
					slug: 'action-library',
					version: '>=11.x',
				},
				{
					slug: 'jellyfish-plugin-default',
					version: '>=19.x',
				},
			],
		});
	}
}
