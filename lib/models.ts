export interface MDoc extends TMDoc {
  name: string;
  tel: string;
  field: string;
  chapter: string;
  kind: string;
  file: Blob;
  count: string;
}

interface TMDoc {
  [field: string]: string | Blob;
}
