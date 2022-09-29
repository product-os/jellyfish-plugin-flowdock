import type { ContractDefinition } from 'autumndb';

export const flowdockThread: ContractDefinition = {
	slug: 'flowdock-thread',
	type: 'type@1.0.0',
	name: 'Flowdock thread',
	data: {
		schema: {
			required: ['data'],
			type: 'object',
			properties: {
				data: {
					required: ['title', 'id', 'urls'],
					type: 'object',
					properties: {
						title: {
							type: 'string',
						},
						id: {
							type: 'string',
						},
						urls: {
							type: 'array',
							items: {
								type: 'string',
							},
						},
					},
				},
			},
		},
		indexed_fields: [['data.id', 'data.urls']],
	},
};
