import { forwardRef, useState } from "react";
import clsx from "classnames";
import Select from "react-select";
import {
  string,
  func,
  array,
  oneOfType,
  number,
  bool,
  object,
} from "prop-types";
import { SelectInputWrapper, Label } from "./Select.style";
import { InputErrorWrapper } from "components/FormWrapper";

export const SelectInput = forwardRef(
  (
    {
      label,
      name,
      onChange,
      options,
      value,
      error,
      disabled,
      id,
      onBlur,
      placeholder,
      className,
      basic,
      errorIndependent,
      ...rest
    },
    ref
  ) => {
    const selectedValue = options?.find((item) => item?.value === value);
    const [isFocus, setIsFocus] = useState(false);

    const onFocus = (e) => {
      if (e.target) {
        setIsFocus(true);
      }
    };

    const handleOnBlur = (event) => {
      if (event.target) {
        setIsFocus(false);
        if (onBlur) return onBlur(event);
      }
      return null;
    };

    const valid = (!!value || value === 0) && !isFocus && !error;

    return (
      <div>
        {label && <Label htmlFor={id || name}>{label}</Label>}
        <SelectInputWrapper
          basic={basic}
          tabIndex="-1"
          error={error}
          onFocus={onFocus}
          onBlur={handleOnBlur}
          className={clsx(className, {
            valid,
            focus: isFocus,
            disabled,
            "input-error": error,
          })}
        >
          <p className="valid-placeholder">{placeholder}</p>
          <Select
            id={id}
            ref={ref}
            instanceId={3}
            classNamePrefix="react-select"
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            components={{ IndicatorSeparator: () => "" }}
            options={options}
            onChange={(val) => onChange({ target: { value: val.value, name } })}
            isDisabled={disabled}
            placeholder={placeholder}
            {...(selectedValue && { value: selectedValue || "" })}
            {...rest}
          />
          {error && (
            <InputErrorWrapper
              className={clsx({
                "error-independent": errorIndependent,
              })}
            >
              {error?.message || error}
            </InputErrorWrapper>
          )}
        </SelectInputWrapper>
      </div>
    );
  }
);

SelectInput.propTypes = {
  label: string,
  name: string,
  onChange: func,
  options: array,
  disabled: bool,
  value: oneOfType([string, number]),
  error: oneOfType([bool, object]),
  id: string,
  onBlur: func,
  basic: oneOfType([string, bool]),
  placeholder: string,
  errorIndependent: bool,
  className: string,
};

SelectInput.defaultProps = {
  label: "",
  disabled: false,
};
