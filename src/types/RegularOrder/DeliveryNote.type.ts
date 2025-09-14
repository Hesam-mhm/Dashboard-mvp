
export type DeliveryNote = {
    name?: string | null;
    owner?: string | null;
    creation?: string | null;
    modified?: string | null;
    modified_by?: string | null;
    docstatus?: number | null;
    idx?: number | null;
    uploaded_delivery_note_file_id?: string | null;
    uploaded_delivery_note_file_display_name?: string | null;
    uploaded_delivery_note_file_url?: string | null;
    delivery_note_datetime?: string | null;
    issued_delivery_note_count?: string | null;
    delivery_note_description?: string | null;
    parent?: string | null;
    parentfield?: string | null;
    parenttype?: string | null;
    doctype?: string | null;
}



export type DeliveryNoteFormType ={
    child_id?: string | null;
    uploaded_delivery_note_file ?: {
        name?: string;
        file_name?: string;
        file_url?: string;
    }
    issued_delivery_note_count?: string | null;
    delivery_note_description?: string | null;
}


