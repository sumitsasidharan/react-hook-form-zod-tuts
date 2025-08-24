import Autocomplete from '@mui/material/Autocomplete';
import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import type { Option } from '../../types/option';

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: Option[];
};

export function RHFAutocomplete<T extends FieldValues>({
  name,
  options,
}: Props<T>) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ value, onChange, ref }) => (
        <Autocomplete
          options={options}
          value={value.map((id: string) =>
            options.find((item) => item.id === id)
          )}
          onChange={(_, newValue) => {
            onChange(newValue.map(item => item.id))
          }}
        />
      )}
    />
  );
}

//1:02:19