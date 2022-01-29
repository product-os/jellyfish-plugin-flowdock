import type { IntegrationDefinition, Map } from '@balena/jellyfish-worker';
import { flowdockIntegrationDefinition } from './flowdock';

export const integrations: Map<IntegrationDefinition> = {
	flowdock: flowdockIntegrationDefinition,
};
