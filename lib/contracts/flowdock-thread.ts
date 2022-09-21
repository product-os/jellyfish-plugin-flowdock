import type { ContractDefinition } from 'autumndb';

export const flowdockThread: ContractDefinition = {
	slug: 'flowdock-thread',
	type: 'type@1.0.0',
	name: 'Flowdock thread',
	markers: [],
	data: {
		schema: {
			required: ['data'],
			type: 'object',
			properties: {
				data: {
					required: ['title', 'id', 'flow'],
					type: 'object',
					properties: {
						title: {
							type: 'string',
						},
						id: {
							type: 'string',
						},
						flow: {
							type: 'string',
						},
					},
				},
			},
		},
		indexed_fields: [['data.id']],
	},
};
