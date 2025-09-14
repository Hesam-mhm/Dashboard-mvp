import { AutomationAdvancePaymentWorkflowStateType } from './General.type';

export type RequestForAdvancePaymentType = {
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
  workflow_state?: AutomationAdvancePaymentWorkflowStateType;
  // ------------------------------------------------------------
  comment_by_financial_manager?: string;
  comment_by_administrative_unit?: string;
  reject_request_description_by_factory_manager?: string;
  requester_employees_id?: string;
  requester_personnel_name?: string;
  requester_personnel_code?: string;
  requester_organizational_position?: string;
  requester_organizational_unit?: string;
  advance_payment_detail_amount?: string;
  advance_payment_detail_amount_editable?: string;
  advance_payment_detail_month?: string;
  advance_payment_detail_month_editable?: string;
  modify_date?: string;
  advance_payment_is_edited?: boolean;
};
