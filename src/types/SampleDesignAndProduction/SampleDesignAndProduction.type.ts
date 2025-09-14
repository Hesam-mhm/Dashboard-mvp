import { OrderProductExel } from "../SpecialOrder/ProductExel.type";

export type ProductOfSampleDesign ={
        name?: string
        index?: number;
        sample_created?: boolean;
        priority?: number;
        alu?: string;
        dcs?: string;
        style?: string;
        desc1?: string;
        style_name?: string;
        compositon?: string;
        fitness?: string;
        color?: string;
        1922?: number;
        2326?: number;
        2730?: number;
        3134?: number;
        3538?: number;
        3638?: number;
        3941?: number;
        4041?: number;
        4243?: number;
        4445?: number;
        4647?: number;
        4849?: number;
        price?: number;
        delivery_time?: string;
        detail?: number;
        discount?: string;
        total_price?: number;
      };


export type SampleDesignAndProductionType = {
    name?: string;
    workflow_state?: string;
    idx?: number;
    index?: number;
    creation?: string;
    modified?: string;
    parent?: string;
  
    special_order_id ?: string ;
    order_number?: string;
    customer_id?: string;
    customer_phone?: string;
    customer_name?: string;
    customer_address?: string;

    order_season?: 'بهار' | 'تابستان' | 'پاییز' | 'زمستان';
    order_changes_description?: string;
    required_date?: string;
    agreed_date_with_customer?: string;
    payment_method?: string
    main_price?: string;
    requirements_description?: string;
  
    financial_manager_description?: string;
    ceo_reject_order_description?: string;
    ceo_reject_invoice_description?: string;
    products?: OrderProductExel[];
    origin_products?: OrderProductExel[];
    product_total_amount?: number;



}