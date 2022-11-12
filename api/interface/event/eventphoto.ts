export interface EventPhoto {
    id:                    number;
    model_type:            string;
    model_id:              string;
    uuid:                  string;
    collection_name:       string;
    name:                  string;
    file_name:             string;
    mime_type:             string;
    disk:                  string;
    conversions_disk:      string;
    size:                  string;
    manipulations:         any[];
    custom_properties:     any[];
    generated_conversions: GeneratedConversions;
    responsive_images:     any[];
    order_column:          string;
    created_at:            Date;
    updated_at:            Date;
    url:                   string;
    thumbnail:             string;
    preview:               string;
    original_url:          string;
    preview_url:           string;
}

export interface GeneratedConversions {
    thumb:   boolean;
    preview: boolean;
}
