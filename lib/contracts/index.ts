import type { ContractDefinition } from 'autumndb';
import { flowdockMessage } from './flowdock-message';
import { flowdockThread } from './flowdock-thread';
import { flowdockFlow } from './flowdock-flow';
import { relationshipFlowdockMessageIsAttachedToFlowdockThread } from './relationship-flowdock-message-is-attached-to-flowdock-thread';
import { relationshipFlowdockThreadIsAttachedToFlowdockFlow } from './relationship-flowdock-thread-is-attached-to-flowdock-flow';

export const contracts: ContractDefinition[] = [
	flowdockFlow,
	flowdockMessage,
	flowdockThread,
	relationshipFlowdockMessageIsAttachedToFlowdockThread,
	relationshipFlowdockThreadIsAttachedToFlowdockFlow,
];
