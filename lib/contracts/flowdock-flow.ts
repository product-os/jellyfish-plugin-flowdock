import type { ContractDefinition } from 'autumndb';

export const flowdockFlow: ContractDefinition = {
	slug: 'flowdock-flow',
	type: 'type@1.0.0',
	name: 'Flowdock flow',
	data: {
		schema: {
			type: 'object',
			properties: {
				name: {
					type: ['string', 'null'],
				},
			},
		},
		indexed_fields: [['name']],
	},
};
