export type CustomerCommentChildType = {
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

    sample_file_id?: string | null;
    sample_file_display_name?: string | null;
    sample_file_url?: string | null;
    customer_description?: string | null;
    is_customer_agree?: boolean | null;
    created_datetime?: string | null;
}

export type CustomerCommentFormType = {
    sample_file?: {
        name?: string | null;
        file_name?: string | null;
        file_url?: string | null;
    } | null;
    customer_description?: string | null;
    is_customer_agree?: boolean | null;
}