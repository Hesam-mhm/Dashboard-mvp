export interface FinishingProductionListItemType {
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
  // ------------------------------------------------------------
  work_shift?: 'صبح' | 'ظهر' | 'شب' | null;
  colleague_id?: string;
  colleague_name?: string;
  product_id?: string;
  product_code?: string;
  product_name?: string;
  finish_count?: string;
  oily_count_two_cylinder?: string;
  socks_count_1_5_two_cylinder?: string;
  stitch_count_two_cylinder?: string;
  oily_count_computerized?: string;
  socks_count_1_5_computerized?: string;
  stitch_count_computerized?: string;
}

export interface FinishingProductionType {
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
  // ------------------------------------------------------------
  report_code?: string;
  report_number?: string;
  report_description?: string;
  finishing_total_amount?: string;
  owner_user_name?: string;
  production_list?: FinishingProductionListItemType[];
}
