import type { ContractDefinition } from 'autumndb';
import { flowdockMessage } from './flowdock-message';
import { flowdockThread } from './flowdock-thread';
import { relationshipFlowdockMessageIsAttachedToFlowdockThread } from './relationship-flowdock-message-is-attached-to-flowdock-thread';

export const contracts: ContractDefinition[] = [
	flowdockMessage,
	flowdockThread,
	relationshipFlowdockMessageIsAttachedToFlowdockThread,
];
