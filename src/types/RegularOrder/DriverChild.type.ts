export type DriverChild = {
    name?: string | null;
    owner?: string | null;
    creation?: string | null;
    modified?: string | null;
    modified_by?: string | null;
    docstatus?: number | null;
    idx?: number | null;
    driver_id?: string | null;
    driver_persian_name?: string | null;
    driver_phone?: string | null;
    driver_plate_provience_no?: string | null;
    driver_plate_first_no?: string | null;
    driver_plate_letter?: string | null;
    driver_plate_last_no?: string | null;
    driver_car_model?: string | null;
    driver_description?: string | null;
    is_new_driver?: boolean | null;
    parent?: string | null;
    parentfield?: string | null;
    parenttype?: string | null;
    doctype?: string | null;
}

export type DriverChildFormType ={
    child_id?: string|null ;
    driver_id?: string;
    driver_description?: string;
    driver_persian_name?: string;
    driver_car_model?: string;
    driver_phone?: string | null;
    driver_plate_provience_no?: string | null;
    driver_plate_first_no?: string | null;
    driver_plate_letter?: string | null;
    driver_plate_last_no?: string | null;
    is_new_driver?: boolean | null;
}


export type DriverInformationType = {
    driver_id ?:string |null;
    info ?:string |null;
    plate_first_no ?:string |null;
    plate_letter ?:string |null;
    plate_last_no ?:string |null;
    plate_provience_no ?:string |null;
}

