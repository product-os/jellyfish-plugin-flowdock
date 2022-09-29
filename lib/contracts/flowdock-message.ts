import type { ContractDefinition } from 'autumndb';

export const flowdockMessage: ContractDefinition = {
	slug: 'flowdock-message',
	type: 'type@1.0.0',
	name: 'Flowdock message',
	data: {
		schema: {
			required: ['data'],
			type: 'object',
			properties: {
				data: {
					required: ['uuid', 'sent'],
					type: 'object',
					properties: {
						uuid: {
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
		indexed_fields: [['data.uuid']],
	},
};