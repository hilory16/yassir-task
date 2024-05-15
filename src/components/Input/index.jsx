import { forwardRef, useCallback } from "react";
import { func, string, node, object, bool, oneOfType } from "prop-types";

import {
  ErrorP,
  AdornmentWrapperDiv,
  Div,
  InputField,
  Label,
  InputFieldWrapperDiv,
} from "./Input.style";

const Input = forwardRef(
  (
    {
      id,
      type = "text",
      label,
      required,
      value,
      error,
      fullWidth,
      className,
      onChange,
      startAdornment,
      endAdornment,
      ...remainingProps
    },
    ref
  ) => {
    const labelId = label ? `${id}-label` : undefined;
    const errorId = error ? `${id}-error-text` : undefined;

    const handleChange = useCallback(
      (event) => {
        onChange?.(event);
      },
      [onChange]
    );

    return (
      <Div fullWidth={fullWidth} className={className}>
        {label && (
          <Label id={labelId} htmlFor={id}>
            {`${label}${required ? "*" : ""}`}
          </Label>
        )}

        <InputFieldWrapperDiv startadornment={startAdornment} error={error}>
          {startAdornment && (
            <AdornmentWrapperDiv>{startAdornment}</AdornmentWrapperDiv>
          )}
          <InputField
            id={id}
            ref={ref}
            type="text"
            value={value}
            required={required}
            aria-invalid={!!error}
            aria-describedby={errorId}
            onChange={handleChange}
            {...remainingProps}
          />
          {endAdornment && (
            <AdornmentWrapperDiv className="end">
              {endAdornment}
            </AdornmentWrapperDiv>
          )}
        </InputFieldWrapperDiv>

        {error && (
          <ErrorP
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 1,
                x: 0,
                y: -5,
              },
              pageAnimate: {
                opacity: 1,
                x: 0,
                y: 0,
              },
              pageExit: {
                opacity: 0,
              },
            }}
            id={errorId}
          >
            {error}
          </ErrorP>
        )}
      </Div>
    );
  }
);

Input.propTypes = {
  error: oneOfType([bool, object]),
  id: string,
  type: string,
  label: string,
  required: bool,
  value: string,
  fullWidth: bool,
  className: string,
  onChange: func,
  startAdornment: node,
  endAdornment: node,
};

export { Input };
