export interface InterfaceDataObject {
    data:   InterfaceDataResponse[];
    source: Source[];
}

export interface InterfaceDataResponse {
    idNation:   string;
    Nation:        string;
    iDYear:     number;
    Year:          string;
    Population:    number;
    slugNation: string;
}

export interface Source {
    measures:      string[];
    annotations:   Annotations;
    name:          string;
    substitutions: any[];
}

export interface Annotations {
    source_name:        string;
    source_description: string;
    dataset_name:       string;
    dataset_link:       string;
    table_id:           string;
    topic:              string;
    subtopic:           string;
}
