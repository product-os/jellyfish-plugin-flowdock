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
				name: {
					type: ['string', 'null'],
					fullTextSearch: true,
				},
				data: {
					required: ['flow', 'url'],
					type: 'object',
					properties: {
						id: {
							type: 'string',
						},
						flow: {
							type: 'string',
						},
						url: {
							type: 'string',
							fullTextSearch: true,
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
					'ui:order': ['flow', 'title', 'url'],
					flow: {
						'ui:title': null,
						'ui:widget': 'Badge',
					},
					title: {
						'ui:title': null,
					},
				},
			},
			fields: {
				data: {
					'ui:order': ['flow', 'title', 'url'],
					flow: {
						'ui:title': null,
						'ui:widget': 'Badge',
					},
					title: {
						'ui:title': null,
					},
				},
			},
		},
		indexed_fields: [['data.id', 'data.flow', 'data.url']],
	},
};
