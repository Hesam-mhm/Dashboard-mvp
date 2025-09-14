export type Invoice = {
    name?: string | null;
    owner?: string | null;
    creation?: string | null;
    modified?: string | null;
    modified_by?: string | null;
    docstatus?: number | null;
    idx?: number | null;
    uploaded_invoice_file_id?: string | null;
    uploaded_invoice_file_display_name?: string | null;
    uploaded_invoice_file_url?: string | null;
    uploaded_invoice_datetime?: string | null;
    parent?: string | null;
    parentfield?: string | null;
    parenttype?: string | null;
    doctype?: string | null;
}


export type InvoiceFormType ={
    child_id?: string | null;
    uploaded_invoice_file ?: {
        name?: string;
        file_name?: string;
        file_url?: string;
    }
}


