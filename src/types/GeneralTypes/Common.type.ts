export type UserScopedParams = {
    user_id?: string;
};

export type PaginationParams = {
    limit?: number;
    offset?: number;
};

export type Timestamped = {
    created_at?: string;
    updated_at?: string;
};

export type IdName = {
    id?: string;
    name?: string;
};

export type FieldsMapping = {
    [key: string]: {
        column?: string;
        label?: string;
    };
};

export type ChartPreview = {
    chart_id?: string;
    chart_type?: string;
    title?: string;
    data?: { [key: string]: any };
    empty_result?: boolean;
};

export type ChartPosition = {
    chart_id?: string;
    position?: number;
    chart_object?: ChartPreview;
};


