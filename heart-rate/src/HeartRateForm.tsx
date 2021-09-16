import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { TextField } from './components';
import { HeartRateInput } from './HeartRateInput';

const schema = yup.object().shape({
  age: yup
    .string()
    .required()
    .matches(/^\d{1,3}$/, 'age must be 1 to 3 digits in length')
    .test('age-range', 'age must be between 1 and 128', (value) => {
      if (value === undefined) return false;
      const age = parseInt(value, 10);
      return age >= 1 && age <= 128;
    }),
});

export interface HeartRateFormProps {
  onSubmit: (heartRateInput: HeartRateInput) => void;
}

export const HeartRateForm = ({ onSubmit }: HeartRateFormProps) => {
  const { formState, register, handleSubmit } = useForm<HeartRateInput>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <TextField
          id="age"
          {...register('age')}
          placeholder="Enter your age"
          error={errors.age?.message}
        />
      </div>

      <button
        className="btn-lg w-full mb-3"
        aria-label="Calculate"
        type="submit"
      >
        Calculate
      </button>
    </form>
  );
};
