export interface ReferralUser {
  id: string;
  name: string;
  date: string;
  earnings: string;
  referrals: number;
}

export interface ReferralNode {
  id: string;
  level: number; // 1-8 (1 being referrer, 2 being you, 3-8 being levels 1-6)
  users: ReferralUser[];
  totalEarnings: string;
  totalReferrals: number;
  children?: ReferralNode[];
}

export interface TreeNodeProps {
  node: ReferralNode;
  isRoot?: boolean;
}