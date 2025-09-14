import { FinishingProductionType } from './Finishing';
import { PackagingProductionType } from './Packaging';
import { RoussoProductionType } from './Rousso';
import { WashingProductionType } from './Washing';
import { WeavingProductionType } from './Weaving';

export type ProductionRegularOrderAllocatedAmountsItemType = {
  title: string;
  value: string;
  suffix?: string;
};

export type MachineType = 'کامپیوتری' | 'دوسیلندر';

export type ProductionFilteredDocsResponseType = {
  status: string;
  message: string;
  results: {
    WeavingProduction: WeavingProductionType[];
    RoussoProduction: RoussoProductionType[];
    WashingProduction: WashingProductionType[];
    FinishingProduction: FinishingProductionType[];
    PackagingProduction: PackagingProductionType[];
  };
  errors: any;
};
