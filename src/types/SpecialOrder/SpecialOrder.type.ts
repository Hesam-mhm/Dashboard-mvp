import { ProductionStateType } from '../ProductionPlanning/ProductionPlanning';
import { OrderProductExel } from './ProductExel.type';
import { SeparatedProductsForProductionPlaningType } from './SeparatedProductsForProductionPlaning.type';
import { SpecialOrderProductFormType } from './SpecialOrderProduct.type';

export type SpecialOrderType = {
  name?: string;
  workflow_state?: string;
  idx?: number;
  index?: number;
  creation?: string;
  modified?: string;
  parent?: string;

  order_number?: string;
  customer_id?: string;
  customer_phone?: string;
  customer_name?: string;
  customer_address?: string;

  order_season?: 'بهار' | 'تابستان' | 'پاییز' | 'زمستان';
  order_changes_description?: string;
  required_date?: string;
  agreed_date_with_customer?: string;
  payment_method?: string;
  main_price?: string;
  requirements_description?: string;

  financial_manager_description?: string;
  ceo_reject_order_description?: string;
  ceo_reject_invoice_description?: string;
  products?: OrderProductExel[];
  origin_products?: OrderProductExel[];
  separated_products_for_production_planing?: SeparatedProductsForProductionPlaningType[];
  product_total_amount?: number;

  uploaded_delivery_note_file?: string | null;
  uploaded_delivery_note_id?: string | null;
  uploaded_delivery_note_display_name?: string | null;
  delivery_note_datetime?: string | null;
  issued_delivery_note_count?: string | null;
  delivery_note_description?: string | null;

  uploaded_invoice_file?: string | null;
  uploaded_invoice_id?: string | null;
  uploaded_invoice_display_name?: string | null;
  uploaded_invoice_datetime?: string | null;
  is_invoice_rejected_by_ceo?: number;

  has_difference_in_car_items?: boolean;
  car_items_security_description?: string | null;
  is_new_driver?: boolean;
  driver_id?: string | null;
  driver_persian_name?: string | null;
  driver_phone?: string | null;
  driver_plate_provience_no?: string | null;
  driver_plate_first_no?: string | null;
  driver_plate_letter?: string | null;
  driver_plate_last_no?: string | null;
  driver_car_model?: string | null;
  driver_description?: string | null;

  order_production_status?: ProductionStateType;
  production_planning_id?: string;
};

export type SpecialOrderFormType = {
  order_number?: string;
  customer_id?: string;
  customer_phone?: string;
  customer_name?: string;
  customer_address?: string;
  is_new_driver?: boolean;
  order_season?: 'بهار' | 'تابستان' | 'پاییز' | 'زمستان';
  payment_method?: string;
  order_changes_description?: string;
  required_date?: string;
  agreed_date_with_customer?: string;
  main_price?: string;
  requirements_description?: string;
  financial_manager_description?: string;
  ceo_reject_order_description?: string;
  ceo_reject_invoice_description?: string;
  products?: SpecialOrderProductFormType[];
  origin_products?: SpecialOrderProductFormType[];
  product_total_amount?: number;

  uploaded_delivery_note_file?: {
    name?: string;
    file_name?: string;
    file_url?: string;
  };
  delivery_note_datetime?: string | null;
  issued_delivery_note_count?: string | null;
  delivery_note_description?: string | null;

  uploaded_invoice_file?: {
    name?: string;
    file_name?: string;
    file_url?: string;
  };
  uploaded_invoice_datetime?: string | null;

  has_difference_in_car_items?: boolean;
  car_items_security_description?: string | null;

  driver_id?: string | null;
  driver_persian_name?: string | null;
  driver_phone?: string | null;
  driver_plate_provience_no?: string | null;
  driver_plate_first_no?: string | null;
  driver_plate_letter?: string | null;
  driver_plate_last_no?: string | null;
  driver_car_model?: string | null;
  driver_description?: string | null;

  new_driver?: {
    driver_persian_name?: string | null;
    driver_phone?: string | null;
    driver_plate_provience_no?: string | null;
    driver_plate_first_no?: string | null;
    driver_plate_letter?: string | null;
    driver_plate_last_no?: string | null;
    driver_car_model?: string | null;
    driver_description?: string | null;
  };
};

export const defaultSpecialOrderForm: SpecialOrderFormType = {
  order_number: '',
  customer_id: '',
  customer_phone: '',
  customer_name: '',
  customer_address: '',
  order_changes_description: '',

  order_season: 'بهار',
  payment_method: '',

  ceo_reject_order_description: '',
  ceo_reject_invoice_description: '',
  products: [],
  origin_products: [],

  uploaded_delivery_note_file: null,
  delivery_note_datetime: '',
  issued_delivery_note_count: '',
  delivery_note_description: '',

  required_date: '',
  agreed_date_with_customer: '',
  requirements_description: '',
  financial_manager_description: '',
  product_total_amount: 0,

  uploaded_invoice_file: null,
  uploaded_invoice_datetime: '',

  car_items_security_description: '',

  driver_id: '',
  driver_persian_name: '',
  driver_phone: '',
  driver_plate_provience_no: '',
  driver_plate_first_no: '',
  driver_plate_letter: '',
  driver_plate_last_no: '',
  driver_car_model: '',
  driver_description: '',
};
