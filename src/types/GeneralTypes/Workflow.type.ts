type GeneralActions = 'Approve' | 'Reject' | 'Review' | 'Cancell';
type RegularOrderWorkflowActions = '';
type AutomationWorkflowActions = 'Approve To Unit Manager' | 'Approve To Factory Manager';

export type TotalActions = RegularOrderWorkflowActions | GeneralActions | AutomationWorkflowActions;
export type TotalDoctypeNames =
  | 'RegularOrder'
  | 'SpecialOrder'
  | 'SpecialProductionPlanning'
  | 'Customer'
  | 'Product'
  | 'SampleDesignAndProduction'
  | 'SampleGroup'
  | 'SingleSample'
  | 'SampleProductionGroup'
  | 'WeavingProduction'
  | 'RoussoProduction'
  | 'PackagingProduction'
  | 'FinishingProduction'
  | 'WashingProduction'
  | 'ProductionPlanning'
  | 'RequestForHourlyLeave'
  | 'RequestForDailyLeave'
  | 'DailyMission'
  | 'HourlyMission'
  | 'RequestForAdvancePayment'
  | 'SpecialProductionPlanning'
  | 'SpecialProductionPlaningChunk';
export type WorkflowApplyParams = {
  doc: { name: string; doctype: TotalDoctypeNames };
  action: TotalActions;
};

export type MultipleWorkflowApplyerParams = {
  doctype: TotalDoctypeNames;
  doc_names: string[];
  action: TotalActions;
};

export type workFlowStateTextType = {
  Regular:
    | string
    | 'Create Order'
    | 'Comment About Customer'
    | 'Inspect Order By CEO'
    | 'Inspect Depots Stock'
    | 'Resolve Order According To Depots Stock'
    | 'Create Delivery Note'
    | 'Create Sales Invoice From Delivery Note'
    | 'Confirmation Invoice And Delivery Note'
    | 'Confirmation of Product Exit from Factory'
    | 'Inspect Products Exit From Factory'
    | 'All Product Of Order Are Sent'
    | 'Order Rejected'
    | 'Production Planning'
    | 'Incomplete Production Planning'
    | 'Incomplete Production Planning'
    | 'Incomplete Inspect Depots Stock'
    | 'Incomplete Resolve Order According To Depots Stock'
    | 'Incomplete Create Delivery Note'
    | 'Incomplete Create Sales Invoice From Delivery Note'
    | 'Incomplete Confirmation Invoice And Delivery Note'
    | 'Incomplete Confirmation Invoice And Delivery Note';
};

// Workflow State Types
export type WorkflowState = {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  state: string;
  is_optional_state: number;
  avoid_status_override: number;
  allow_edit: string;
  send_email: number;
  workflow_builder_id?: string;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
  doc_status?: string;
};

// Workflow Transition Types
export type WorkflowTransition = {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  state: string;
  action: string;
  next_state: string;
  allowed: string;
  allow_self_approval: number;
  send_email_to_creator: number;
  workflow_builder_id?: string;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
  condition?: string;
};

// Workflow Action Types
export type WorkflowAction = {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  action: string;
  allowed: string;
  allow_self_approval: number;
  send_email_to_creator: number;
  workflow_builder_id?: string;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
  condition?: string;
};

// Complete Workflow Response Type
export type WorkflowData = {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  workflow_name: string;
  document_type: string;
  is_active: number;
  override_status: number;
  send_email_alert: number;
  workflow_state_field: string;
  workflow_data: string;
  doctype: string;
  states: WorkflowState[];
  transitions: WorkflowTransition[];
};

// Workflow Builder Node Types
export type WorkflowBuilderNode = {
  type: 'state' | 'action';
  dimensions: {
    width: number;
    height: number;
  };
  handleBounds: {
    source: Array<{
      id: string;
      position: string;
      x: number;
      y: number;
      width: number;
      height: number;
    }>;
  };
  computedPosition: {
    x: number;
    y: number;
    z: number;
  };
  id: string;
  position: {
    x: number;
    y: number;
  };
  data?: {
    from_id: string;
    to_id: string;
  };
};

// Workflow Builder Edge Types
export type WorkflowBuilderEdge = {
  sourceHandle: string;
  targetHandle: string;
  type: string;
  source: string;
  target: string;
  updatable: boolean;
  id: string;
  animated: boolean;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  markerEnd?: {
    type: string;
    width: number;
    height: number;
    strokeWidth: number;
    color: string;
  };
};

// Parsed Workflow Data Type
export type ParsedWorkflowData = {
  nodes: WorkflowBuilderNode[];
  edges: WorkflowBuilderEdge[];
};
