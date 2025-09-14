import { TotalDoctypeNames } from '../GeneralTypes/Workflow.type';

// for script that give it doctypes names and return you that doctype data with filters and order by and ... that contains child tables too

export type GetFilteredDocsType = {
  doctypes: TotalDoctypeNames[];
  filters: { fieldname: string; filter_type: string; value: string | number | boolean }[];
  order_by: string;
  order_type: 'asc' | 'desc';
};
