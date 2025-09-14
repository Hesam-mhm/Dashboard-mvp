import { CustomerCommentChildType } from './CustomerComment';
import { ProducedSampleAttachmentsChildType } from './ProducedSampleAttachmentsChild.type';
import { SingleSampleIdentifierChildType } from './SingleSampleIdentifierChild.type';
import { SingleSamplePostalItemInfoChildType } from './SingleSamplePostalItemInfoChild.type';
import { SingleSampleProductionDateTimeChildType } from './SingleSampleProductionDateTimeChild.type';

export type SingleSampleType = {
  name?: string;
  workflow_state?: string;
  idx?: number;
  index?: number;
  creation?: string;
  modified?: string;
  parent?: string;
  group_parent_id?: string;
  group_id?: string;
  uuid?: string | null;
  alu?: string | null;
  style?: string | null;
  style_name?: string | null;
  sample_production_date?: string | null;
  color?: string | null;
  size?: string | null;

  sample_identifiers?: SingleSampleIdentifierChildType[];
  sample_production_datetimes?: SingleSampleProductionDateTimeChildType[];
  produced_sample_attachments?: ProducedSampleAttachmentsChildType[];
  sample_postal_item_infos?: SingleSamplePostalItemInfoChildType[];

  customer_comment?: CustomerCommentChildType[]

  is_rejected_by_customer?: boolean | null;
  is_rejected_by_bussines_expert?: boolean | null;
  is_sample_produced?: boolean | null;
};

export type SingleSampleFormType = {
  name?: string;
  workflow_state?: string;
  idx?: number;
  index?: number;
  creation?: string;
  modified?: string;
  parent?: string;
  group_parent_id?: string;
  group_id?: string;
  uuid?: string | null;
  alu?: string | null;
  style?: string | null;
  style_name?: string | null;
  sample_production_date?: string | null;
  color?: string | null;
  size?: string | null;

  sample_identifiers?: SingleSampleIdentifierChildType[];
  sample_production_datetimes?: SingleSampleProductionDateTimeChildType[];
  produced_sample_attachments?: ProducedSampleAttachmentsChildType[];
  sample_postal_item_infos?: SingleSamplePostalItemInfoChildType[];

  mass_production_file?: {
    file_name?: string | null;
    file_url?: string | null;
    name?: string | null;
  } | null;

  mass_production_discription?: string | null;

  is_rejected_by_customer?: boolean | null;
  is_rejected_by_bussines_expert?: boolean | null;
  is_sample_produced?: boolean | null;
};
