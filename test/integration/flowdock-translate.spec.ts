/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import ActionLibrary from '@balena/jellyfish-action-library';
import { defaultEnvironment } from '@balena/jellyfish-environment';
import { syncIntegrationScenario } from '@balena/jellyfish-test-harness';
import { FlowdockPlugin } from '../../lib';
import FlowdockIntegration from '../../lib/integrations';
import webhooks from './webhooks/flowdock';

// tslint:disable-next-line: no-var-requires
const DefaultPlugin = require('@balena/jellyfish-plugin-default');

const TOKEN = defaultEnvironment.integration.flowdock;

syncIntegrationScenario.run(
	{
		test,
		before: beforeAll,
		beforeEach,
		after: afterAll,
		afterEach,
	},
	{
		basePath: __dirname,
		plugins: [ActionLibrary, DefaultPlugin, FlowdockPlugin],
		cards: ['thread', 'whisper', 'message'],
		integration: FlowdockIntegration,
		scenarios: webhooks,
		baseUrl: 'https://api.flowdock.com',
		stubRegex: /.*/,
		source: 'flowdock',
		options: {
			token: TOKEN,
		},
		isAuthorized: (self: any, request: any) => {
			return (
				request.headers.authorization ===
				`Basic ${Buffer.from(self.options.token.api).toString('base64')}`
			);
		},
	},
);
