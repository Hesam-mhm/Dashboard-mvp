export type MultipleDocumentCreatorType<T> = {
  doctype: string;
  documents: T[];
};

export type GetMultipleDocumentsType = {
  doctype: string;
  doc_ids: string[];
};


export type PutMultipleDocumentsType<T> = {
  doctype: string;
  data_objects: T[];
}