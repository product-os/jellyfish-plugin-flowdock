import type { RelationshipContractDefinition } from 'autumndb';

export const relationshipFlowdockMessageIsAttachedToFlowdockThread: RelationshipContractDefinition =
	{
		slug: 'relationship-flowdock-message-is-attached-to-flowdock-thread',
		type: 'relationship@1.0.0',
		name: 'is attached to',
		data: {
			inverseName: 'has attached element',
			inverseTitle: 'Flowdock message',
			title: 'Flowdock thread',
			from: {
				type: 'flowdock-message',
			},
			to: {
				type: 'flowdock-thread',
			},
		},
	};
