export type IFieldSelectProps = {
  fields: string[];
  selectFieldFunction: (field: string) => void;
  selectedField: string;
};
