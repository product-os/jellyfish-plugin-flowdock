import type { ContractDefinition } from 'autumndb';

export const viewAllFlowdockThreads: ContractDefinition = {
	slug: 'view-all-flowdock-threads',
	version: '1.0.0',
	name: 'Flowdock threads',
	type: 'view@1.0.0',
	markers: ['org-balena'],
	data: {
		allOf: [
			{
				name: 'All Flowdock threads',
				schema: {
					type: 'object',
					properties: {
						type: {
							type: 'string',
							const: 'flowdock-thread@1.0.0',
						},
					},
					additionalProperties: true,
					required: ['type'],
				},
			},
		],
	},
};
