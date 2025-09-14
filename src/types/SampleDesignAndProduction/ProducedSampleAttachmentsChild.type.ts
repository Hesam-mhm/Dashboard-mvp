export type ProducedSampleAttachmentsChildType = {
  name?: string | null;
  owner?: string | null;
  creation?: string | null;
  modified?: string | null;
  modified_by?: string | null;
  docstatus?: number | null;
  idx?: number | null;
  parent?: string | null;
  parentfield?: string | null;
  parenttype?: string | null;
  doctype?: string | null;
  is_approved?: boolean | null;
  produced_sample_file_id?: string | null;
  produced_sample_file_display_name?: string | null;
  produced_sample_file_url?: string | null;
  produced_sample_description?: string | null;
  created_datetime?: string | null;
};

export type ProducedSampleAttachmentsFormType = {
   produced_sample_attachment?: {
  name?: string | null;
  file_name?: string | null;
  file_url?: string | null;
 } | null;
  produced_sample_description?: string | null;
};

