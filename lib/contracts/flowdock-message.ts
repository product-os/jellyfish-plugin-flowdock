import type { ContractDefinition } from 'autumndb';

export const flowdockMessage: ContractDefinition = {
	slug: 'flowdock-message',
	type: 'type@1.0.0',
	name: 'Flowdock message',
	markers: [],
	data: {
		schema: {
			required: ['data'],
			type: 'object',
			properties: {
				data: {
					required: [
						'username',
						'userFullName',
						'flowdockUserId',
						'flowdockUUID',
						'sent',
					],
					type: 'object',
					properties: {
						flowdockUUID: {
							type: 'string',
						},
						flowdockUserId: {
							type: 'string',
						},
						userFullName: {
							type: 'string',
						},
						username: {
							type: 'string',
						},
						content: {
							type: 'string',
							format: 'markdown',
							fullTextSearch: true,
						},
						sent: {
							type: 'string',
							format: 'date-time',
						},
						file: {
							type: 'object',
							properties: {
								name: {
									type: 'string',
								},
								mime: {
									type: 'string',
								},
								bytesize: {
									type: 'number',
								},
								slug: {
									type: 'string',
								},
							},
						},
					},
				},
			},
		},
		indexed_fields: [['data.content']],
	},
};
