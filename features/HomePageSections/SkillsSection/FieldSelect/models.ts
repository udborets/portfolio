export type IFieldSelectProps = {
  fields: string[];
  selectFieldFunction: (field: string) => void;
  selectedField: string;
};

export type IFieldSelectItemProps = Omit<IFieldSelectProps, "fields"> & {
  index: number;
  fieldName: string;
};
