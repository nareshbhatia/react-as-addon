import React, { Fragment } from 'react';
import { ErrorMessage } from './ErrorMessage';
import './TextField.css';

export interface TextFieldProps {
  /** used to make label and errorText accessible for screen readers */
  id?: string;

  /** used to create data-testid property on element for testing */
  testId?: string;

  /** passed directly to the input element */
  name?: string;

  /** the label content */
  label?: React.ReactNode;

  /** placeholder for input */
  placeholder?: string;

  /** the input type (defaults to text) */
  type?: string;

  /** error text */
  error?: string;

  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      testId,
      name,
      label,
      placeholder,
      type = 'text',
      error,
      onBlur,
      onChange,
    },
    ref
  ) => {
    return (
      <Fragment>
        {label !== undefined ? <label htmlFor={id}>{label}</label> : null}
        <input
          id={id}
          data-testid={testId}
          name={name}
          placeholder={placeholder}
          type={type}
          ref={ref}
          className="text-field__input"
          onBlur={onBlur}
          onChange={onChange}
        />
        <ErrorMessage error={error} />
      </Fragment>
    );
  }
);
