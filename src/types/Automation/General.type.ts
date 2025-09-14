export type AutomationLeaveWorkflowStateType =
  | 'Register Leave Request'
  | 'Register To Personnel System'
  | 'Review Leave Requests By Administrative Unit'
  | 'Review Leave Requests By Unit Manager'
  | 'Review Leave Requests By Factory Manager'
  | 'Cancelled By Administrative Unit'
  | 'Cancelled By Unit Manager'
  | 'Cancelled By Factory Manager'
  | 'Register Leave Start Time'
  | 'Register Leave Stop Time'
  | 'Approved';

export type AutomationMissionWorkflowStateType =
  | 'Mission Register'
  | 'Register To Personnel System'
  | 'Mission Review By Administrative Unit'
  | 'Mission Review By Unit Manager'
  | 'Mission Review By Factory Manager'
  | 'Cancelled By Administrative Unit'
  | 'Cancelled By Unit Manager'
  | 'Cancelled By Factory Manager'
  | 'Register Mission Start Time'
  | 'Register Mission Stop Time'
  | 'Approved';

export type AutomationAdvancePaymentWorkflowStateType =
  | 'Advance Payment Request Register'
  | 'Register To Personnel System'
  | 'Comment On Advance Payment Request By Financial Manager'
  | 'Comment On Advance Payment Request By Administrative Unit'
  | 'Advance Payment Request Review'
  | 'Rejected By Factory Manager'
  | 'Approved'

export type AutomationAssignedRoleType = {
  id?: string;
  name?: string;
  owner?: string;
  idx?: number;
  index?: number;
  creation?: string;
  modified?: string;
  modified_by?: string;
  docstatus?: 0;
  parent?: string;
  parentfield?: string;
  parenttype?: string;
  doctype?: string;
  role_name: string;
  is_daily:boolean
};