import { forwardRef, useState, useRef } from "react";
import DatePickerOriginal from "react-datepicker";
import clsx from "classnames";
import { ArrowRight } from "iconsax-react";
import { func, string, instanceOf, object, bool, oneOfType } from "prop-types";
import getMonth from "date-fns/getMonth";
import _ from "lodash";
import getYear from "date-fns/getYear";
import range from "utils/range";
import useTheme from "hooks/useTheme";
import { months } from "./utils";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerWrapper } from "./DatePicker.style";

export const DatePicker = forwardRef(
  (
    {
      name,
      onChange,
      className,
      onBlur,
      error,
      disabled,
      value,
      placeholder,
      label,
      ...rest
    },
    ref
  ) => {
    const { theme } = useTheme();

    const years = range(1900, getYear(new Date()) + 1, 1);
    const [isFocus, setIsFocus] = useState(false);
    const containerRef = useRef(null);

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

    const valid = !!value && !isFocus && !error;

    return (
      <DatePickerWrapper
        error={error}
        onFocus={onFocus}
        onBlur={handleOnBlur}
        ref={containerRef}
        tabIndex="-1"
        className={clsx({
          [className]: className,
          valid,
          focus: isFocus,
          disabled,
        })}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <div className="input-area">
          <p className="valid-placeholder">{placeholder}</p>
          <DatePickerOriginal
            ref={ref}
            selected={value}
            dateFormat="dd MMM yyyy"
            disabled={disabled}
            placeholderText={placeholder}
            onCalendarClose={() => containerRef.current.focus()}
            onChange={(val) =>
              onChange({
                target: { name, value: val },
              })
            }
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="date-picker-custom-header ">
                <div className="calendar-arrow arrow-left">
                  <ArrowRight
                    ize="20"
                    color={theme.colors.black}
                    onClick={prevMonthButtonDisabled ? _.noop : decreaseMonth}
                  />
                </div>

                <div className="date-select">
                  <select
                    value={months[getMonth(date)]}
                    className="month-select"
                    onChange={({ target: { value: val } }) => {
                      changeMonth(months.indexOf(val));
                    }}
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <select
                    value={getYear(date)}
                    onChange={({ target: { value: val } }) => changeYear(val)}
                    className="year-select"
                  >
                    {years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="calendar-arrow arrow-right">
                  <ArrowRight
                    ize="20"
                    color={theme.colors.black}
                    onClick={nextMonthButtonDisabled ? _.noop : increaseMonth}
                  />
                </div>
              </div>
            )}
            {...rest}
          />
        </div>
      </DatePickerWrapper>
    );
  }
);

DatePicker.propTypes = {
  className: string,
  name: string,
  value: oneOfType([instanceOf(Date), string]),
  onChange: func,
  onBlur: func,
  error: oneOfType([bool, object]),
  disabled: bool,
  label: string,
  placeholder: string,
};
