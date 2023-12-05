import type { WebviewState } from '../../../webviews/protocol';
import { IpcNotificationType } from '../../../webviews/protocol';
import type { Subscription } from '../../gk/account/subscription';

export interface State extends WebviewState {
	webroot?: string;
	subscription: Subscription;
	avatar?: string;
	hasMultipleOrganizationOptions?: boolean;
}

export interface DidChangeSubscriptionParams {
	subscription: Subscription;
	avatar?: string;
	hasMultipleOrganizationOptions?: boolean;
}
export const DidChangeSubscriptionNotificationType = new IpcNotificationType<DidChangeSubscriptionParams>(
	'subscription/didChange',
);
