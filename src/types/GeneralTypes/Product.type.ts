import { AllCategoryType } from './ProductCategory.type';
import { AllUnitType } from './Unit.type';

export type ProductType = {
  name?: string;
  idx?: number;
  index?: number;
  creation?: string;
  modified?: string;
  parent?: string;

  type?: AllCategoryType;
  product_name?: string;
  price?: string;
  code?: string;
  image?: string;
  image_display_name?: string;
  image_id?: string;
  unit?: AllUnitType;
  unit_name?: string;
};
