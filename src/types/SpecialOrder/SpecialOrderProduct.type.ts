export type SpecialOrderProductType = {
  name?: string;
  owner?: string;
  idx?: number;
  index?: number;
  creation?: string;
  modified?: string;
  modified_by?: string;
  parent?: string;
  parentfield?: string;
  parenttype?: string;
  doctype?: string;

  product?: string;
  product_name?: string;
  product_code?: string;
  product_style?: string;
  product_style_name?: string;
  unit?: string;
  unit_name?: string;
  product_image_url?: string;
  product_image_id?: string;
  product_image_display_name?: string;
  technical_pattern_url?: string;
  technical_pattern_id?: string;
  technical_pattern_display_name?: string;
  product_gender?: 'زن' | 'مرد' | string;
  product_color?: string;
  product_color_name?: string;
  yarn_usage_percentage?: string;
  delivery_and_production_priority?: string;
  product_size?: string;
  product_size_name?: string;
  product_size_amount?: string;
};

export type SpecialOrderProductFormType = {
  name?: string;
  product?: string;
  product_name?: string;
  product_code?: string;
  product_style?: string;
  unit?: string;
  unit_name?: string;
  product_image_url?: {
    name?: string;
    file_name?: string;
    file_url?: string;
  };
  technical_pattern_url?: {
    name?: string;
    file_name?: string;
    file_url?: string;
  };
  product_gender?: 'زن' | 'مرد' | string;
  product_color?: string;
  yarn_usage_percentage?: string;
  delivery_and_production_priority?: string;
  product_size?: string[];
  product_size_name?: string;
  product_size_amount?: { [key: string]: string } | null;
};
