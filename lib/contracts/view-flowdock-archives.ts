import type { ContractDefinition } from 'autumndb';

export const viewFlowdockArchives: ContractDefinition = {
	slug: 'view-flowdock-archives',
	version: '1.0.0',
	name: 'Flowdock archives',
	type: 'view@1.0.0',
	markers: ['org-balena'],
	data: {
		allOf: [
			{
				name: 'All Flowdock archives',
				schema: {
					type: 'object',
					properties: {
						type: {
							type: 'string',
							enum: ['flowdock-thread@1.0.0', 'flowdock-message@1.0.0'],
						},
					},
					additionalProperties: true,
					required: ['type'],
				},
			},
		],
	},
};
