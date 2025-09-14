import { OrderProductStateType } from './RegularOrder.type';

export type OrderProductDepotStateType = 'موجود' | 'ناموجود'|'ناقص'|'نامشخص';

export type OrderProductType = {
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
  // ------------------------------------------------------------
  uuid?: string;
  product_id?: string;
  product_name?: string;
  product_code?: string;
  product_amount_in_order?: string;
  product_pack_amount_in_order?: string;
  main_price?: string;
  discount_percentage?: string;
  final_price?: string;
  unit_id?: string;
  unit_name?: string;
  product_image_url?: string;
  product_amount_in_depot?: string;
  product_pack_amount_in_depot?: string;
  depot_manager_description_about_product?: string;
  correction_product_amount?: string;
  order_product_workflow_state?: OrderProductStateType;
  order_product_depot_state?: OrderProductDepotStateType;
  invoice_file_id ?: string ;
  invoice_file_url ?: string ;
  delivery_note_file_id ?: string ;
  delivery_note_file_url ?: string ;
  driver_id?: string;
  parentfield?: string;
  parenttype?: string;
  doctype?: string;
  reserved_products?: string;
};

export type OrderProductFormType = {
  child_id?: string | null;
  product_id?: string;
  product_name?: string;
  product_code?: string;
  product_amount_in_order?: string;
  product_pack_amount_in_order?: string;
  unit_id?: string;
  unit_name?: string;
  main_price?: string;
  discount_percentage?: string;
  final_price?: string;
  product_image_url?: string;
  depot_manager_description_about_product?: string;
  product_amount_in_depot?: string;
  correction_product_amount?: string;
  order_product_depot_state?: OrderProductDepotStateType | string;
  order_product_workflow_state?: OrderProductStateType;
};
