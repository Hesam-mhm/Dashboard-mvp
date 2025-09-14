export interface WeavingWasteProductsInfoType {
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
  waste_product_id?: string;
  product_name?: string;
  weight_grade_1_5?: string;
  weight_grade_2?: string;
  split_weight?: string;
  waste_weight?: string;
}

export interface WeavingProductionListItemType {
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
  machine_type?: string;
  machine_number?: string;
  product_id?: string;
  product_code?: string;
  product_name?: string;
  quantity_dozen?: string;
  production_weight?: string;
  product_color_id?: string;
  product_color_name?: string;
  needle?: string;
  regular_platinum?: string;
  backstitch_platinum?: string;
  mouth?: string;
  pattern?: string;
  jack?: string;
  quantity_grade_1_5?: string;
  quantity_grade_2?: string;
  downtime_duration?: string;
}

export interface WeavingProductionType {
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
  work_shift?: 'صبح' | 'ظهر' | 'شب' | null;
  entry_time?: string;
  exit_time?: string;
  report_description?: string;
  owner_user_name?: string;
  production_list?: WeavingProductionListItemType[];
  waste_info?: WeavingWasteProductsInfoType[];
}
