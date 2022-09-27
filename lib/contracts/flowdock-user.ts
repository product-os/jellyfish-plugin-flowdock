import type { ContractDefinition } from 'autumndb';

export const flowdockUser: ContractDefinition = {
	slug: 'flowdock-user',
	type: 'type@1.0.0',
	name: 'Flowdock user',
	markers: [],
	data: {
		schema: {
			require: ['data'],
			type: 'object',
			properties: {
				data: {
					required: ['fullName', 'username', 'id'],
					type: 'object',
					properties: {
						id: {
							type: 'string',
						},
						fullName: {
							type: 'string',
						},
						username: {
							type: 'string',
						},
					},
				},
			},
		},
	},
};
