import { AutomationLeaveWorkflowStateType } from './General.type';

export type RequestForDailyLeaveType = {
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
  workflow_state?: AutomationLeaveWorkflowStateType;
  // ------------------------------------------------------------
  assigned_unit_roles?: string;
  remaining_leave_days?: string;
  remaining_leave_hours?: string;
  reject_request_description_by_administrative_unit?: string;
  reject_request_description_by_unit_manager?: string;
  reject_request_description_by_factory_manager?: string;
  requester_employees_id?: string;
  requester_personnel_name?: string;
  requester_personnel_code?: string;
  requester_organizational_position?: string;
  requester_organizational_unit?: string;
  alternative_description?: string;

  leave_type?: 'استحقاقی' | 'استعلاجی' | 'تشویقی' | 'بدون حقوق';
  leave_start_date?: string;
  leave_end_date?: string;
  leave_duration?: string;
  leave_type_editable?: 'استحقاقی' | 'استعلاجی' | 'تشویقی' | 'بدون حقوق';
  leave_start_date_editable?: string;
  leave_end_date_editable?: string;
  leave_duration_editable?: string;
  modify_date?: string;
  leave_is_edited?: boolean;
};
