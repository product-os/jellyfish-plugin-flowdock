import { ContractDefinition } from 'autumndb';

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
					required: ['sent', 'user'],
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
						user: {
							type: 'string',
						},
						payload: {
							type: 'object',
							required: ['file'],
							properties: {
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
			},
		},
		uiSchema: {
			snippet: {
				created_at: null,
				updated_at: null,
				data: {
					'ui:order': ['content', 'sent'],
					content: {
						'ui:title': null,
					},
					sent: {
						'ui:title': null,
						'ui:options:': {
							dtFormat: 'MMM do, yyyy HH:mm',
						},
					},
				},
			},
			fields: {
				data: {
					'ui:order': ['content', 'sent'],
					content: {
						'ui:title': null,
					},
					sent: {
						'ui:title': null,
						'ui:options:': {
							dtFormat: 'MMM do, yyyy HH:mm',
						},
					},
				},
			},
		},
		indexed_fields: [['data.uuid']],
	},
};
