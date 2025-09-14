export type FrappeFilterOperator = '=' | '!=' | '>' | '<' | '>=' | '<=' | 'like' | 'not like' | 'in' | 'not in' | 'is' | 'between';

export type FrappeFilterValue = string | number | string[] | [string, string] | Date | null;

export type FrappeFilter = {
  operator: FrappeFilterOperator;
  value: FrappeFilterValue;
};

export type FrappeFilterWithField = FrappeFilter & { field: string };

export type FrappeFilterArray = (FrappeFilterWithField | 'and' | 'or')[];

export type FrappeFilterObject = Record<string, FrappeFilter>;

export type FrappeFilters = FrappeFilterObject | FrappeFilterArray;