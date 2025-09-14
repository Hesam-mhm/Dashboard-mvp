export interface PackagingProductionListItemType {
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
  colleague_id?: string;
  colleague_name?: string;
  product_id?: string;
  product_code?: string;
  product_name?: string;
  carded_stitch_count?: string;
  loafer_socks_count?: string;
  jean_packaging_count?: string;
  carton_packaging_count?: string;
}

export interface PackagingProductionType {
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
  packaging_total_amount?: string;
  owner_user_name?: string;
  production_list?: PackagingProductionListItemType[];
}
