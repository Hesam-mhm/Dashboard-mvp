export interface RoussoProductionListItemType {
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
  colleague_id?: string;
  colleague_name?: string;
  return_quantity?: string;
  russo_quantity?: string;
}

export interface RoussoProductionType {
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
  total_russo_quantity?: string;
  total_return_quantity?: string;
  recieved_product_quantity?: string;
  owner_user_name?: string;
  production_list?: RoussoProductionListItemType[];
}
