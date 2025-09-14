import { ProductionStateType } from '../ProductionPlanning/ProductionPlanning';
import { DeliveryNote, DeliveryNoteFormType } from './DeliveryNote.type';
import { DriverChild, DriverChildFormType } from './DriverChild.type';
import { Invoice, InvoiceFormType } from './Invoice.child.type';
import { OrderProductFormType, OrderProductType } from './OrderProduct.child.type';

export type ShippingMethodType = 'ارسال جداگانه محصولات موجود و ناموجود' | 'ارسال یکجا محصولات موجود و ناموجود' | 'ارسال محصولات موجود' | 'هیچکدام';
export type OrderProductStateType = 'sent' | 'production' | 'sending' | 'pending' | 'canceled' | 'reserved';

export type RegularOrderType = {
  name?: string;
  workflow_state?: string;
  idx?: number;
  index?: number;
  creation?: string;
  modified?: string;
  parent?: string;
  doctype?: string;
  customer_id?: string;
  customer_phone?: string;
  customer_name?: string;
  customer_address?: string;

  order_submit_date?: string;
  order_number?: string;
  order_changes_description?: string;
  order_required_date?: string;
  agreed_date_with_customer?: string;
  payment_method_id?: string;
  payment_method_name?: string;
  products?: OrderProductType[];
  origin_products?: OrderProductType[];
  financial_manager_description?: string;
  ceo_reject_description?: string;
  product_total_amount?: string;
  is_inner_order?: boolean;
  shipping_method?: ShippingMethodType | string;
  delivery_note?: DeliveryNote[];
  invoice?: Invoice[];
  is_review_bussiness_expert?: number;
  driver_child?: DriverChild[];
  order_production_status?: ProductionStateType;
  production_planning_id?: string;

  //for typescript error
  requirements_description?: string;
  
};

export type RegularOrderFormType = {
  child_id?: string | null;
  order_number?: string;
  is_inner_order?: boolean;
  customer_id?: string;
  customer_phone?: string;
  customer_name?: string;
  customer_address?: string;
  order_submit_date?: string;
  order_required_date?: string;
  agreed_date_with_customer?: string;
  order_changes_description?: string;
  payment_method_id?: string;
  payment_method_name?: string;
  current_delivery_note?: DeliveryNoteFormType | null;
  delivery_note?: DeliveryNoteFormType[];
  shipping_method?: ShippingMethodType | string;
  products?: OrderProductFormType[];
  financial_manager_description?: string;
  invoice?: InvoiceFormType[];
  current_invoice?: InvoiceFormType | null;
  ceo_reject_description?: string;
  driver_child?: DriverChildFormType[];
  driver_id?: string;
  driver_description?: string;
  driver_phone?: string | null;
  driver_persian_name?: string | null;
  driver_car_model?: string | null;
  driver_plate_provience_no?: string | null;
  driver_plate_first_no?: string | null;
  driver_plate_letter?: string | null;
  driver_plate_last_no?: string | null;
  is_new_driver?: boolean | null;
};

export const defaultRegularOrderForm: RegularOrderFormType = {
  shipping_method: 'هیچکدام',
  order_number: '',
  is_inner_order: false,
  customer_id: '',
  customer_phone: '',
  customer_name: '',
  customer_address: '',
  payment_method_id: '',
  order_submit_date: '',
  order_required_date: '',
  financial_manager_description: '',
  agreed_date_with_customer: '',
  order_changes_description: '',
  current_delivery_note: {
    uploaded_delivery_note_file: null,
    issued_delivery_note_count: null,
    delivery_note_description: null,
  },
  current_invoice: {
    uploaded_invoice_file: null,
  },
  ceo_reject_description: '',
  invoice: [],
  delivery_note: [],
  products: [],
  driver_child: [],

};
