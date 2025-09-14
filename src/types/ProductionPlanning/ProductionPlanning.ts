import { SeparatedProductsForProductionPlaningType } from "../SpecialOrder/SeparatedProductsForProductionPlaning.type";

type TwoCylinderMachineProductionRecordType = {
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

  machine_id: string;
  product_code: string;
  product_number: string;
};
type ComputerizedMachineProductionRecordType = {
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

  machine_id: string;
  product_code: string;
  product_number: string;
};

export type PendingProductionProductType = {
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

  product_code: string;
  product_name: string;
  product_number: string;
};

export type ProductionPlanningType = {
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

  regular_order_id?: string;
  production_state?: ProductionStateType;
  pending_production_products?: PendingProductionProductType[];
  pending_products_number?: string;
  allocated_product_number?: string;
  estimated_production_end_date?: string;
  two_cylinder_machine_production?: TwoCylinderMachineProductionRecordType[];
  computerized_machine_production?: ComputerizedMachineProductionRecordType[];
};

export type SpecialProductionPlanningType = {
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

  special_order_id?: string;
  production_state?: ProductionStateType;
  pending_production_products?: PendingProductionProductType[];
  pending_products_number?: string;
  allocated_product_number?: string;
  estimated_production_end_date?: string;
  two_cylinder_machine_production?: SeparatedProductsForProductionPlaningType[];
  computerized_machine_production?: SeparatedProductsForProductionPlaningType[];
};

export type ProductionStateType = 'waitingForMaterialReview' | 'waitingForMaterialSupply' | 'waitingforMachineAllocation' | 'productionPlanned';
