export interface WashingProductionListItemType {
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
  product_id?: string;
  product_code?: string;
  product_name?: string;
  product_amoun?: string;
  softener_amount?: string;
  essence_amount?: string;
  antibacterial_amount?: string;
  bleach_amount?: string;
}

export interface WashingProductionType {
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
  product_total_amount?: string;
  owner_user_name?: string;
  production_list?: WashingProductionListItemType[];
}
