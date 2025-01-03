```typescript
export type ApprovalStatus = 'pending' | 'approved' | 'rejected';

export interface TelegramUser {
  username: string;
  connected: boolean;
  connectedAt?: Date;
  approvalStatus: ApprovalStatus;
}

export interface TelegramConnectState {
  isConnecting: boolean;
  error: string | null;
  user: TelegramUser | null;
}
```