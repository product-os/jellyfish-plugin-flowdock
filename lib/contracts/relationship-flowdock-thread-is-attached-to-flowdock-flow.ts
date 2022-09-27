import type { RelationshipContractDefinition } from 'autumndb';

export const relationshipFlowdockThreadIsAttachedToFlowdockFlow: RelationshipContractDefinition =
	{
		slug: 'relationship-flowdock-thread-is-attached-to-flowdock-flow',
		type: 'relationship@1.0.0',
		name: 'is attached to',
		data: {
			inverseName: 'has attached element',
			inverseTitle: 'Flowdock thread',
			title: 'Flowdock flow',
			from: {
				type: 'flowdock-thread',
			},
			to: {
				type: 'flowdock-flow',
			},
		},
	};
