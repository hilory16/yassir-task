import React, { useEffect, useState } from "react";
import { func, bool } from "prop-types";
import { CloseSquare } from "iconsax-react";
import { Modal } from "components/Modal";
import { FilterModalWrapper } from "pages/Dashboard/Dashboard.style";
import { SelectInput } from "components/Select";
import { DatePicker } from "components/DatePicker";
import { InputGroupWrapper } from "components/FormWrapper";
import Button from "components/Button";
import useTheme from "hooks/useTheme";
import { options } from "../../utils";

const initialState = {
  status: "",
  shift: "",
  area: "",
  date: "",
};

export default function FilterModal({
  isOpen,
  onClose,
  onSubmit,
  defaultValues,
}) {
  const { theme } = useTheme();
  const [filterState, setFilterState] = useState(initialState);

  useEffect(() => {
    if (defaultValues && Object.keys(defaultValues)) {
      setFilterState((prevState) => ({
        ...prevState,
        ...defaultValues,
      }));
    }
  }, [defaultValues]);

  const onChange = (key, value) => {
    setFilterState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleFilter = (value) => {
    onSubmit(value);
    onClose();
  };

  const handleSubmit = () => {
    handleFilter(filterState);
  };

  const clearFilter = () => {
    setFilterState(initialState);
    handleFilter(initialState);
  };

  const handleClose = () => {
    if (defaultValues) {
      // POPULATE EXISTING VALUE AFTER CHANGING FILTERS BUT NOT CONFIRMING
      setFilterState(defaultValues);
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} contentCentered>
      <FilterModalWrapper>
        <div className="close-icon">
          <button type="button" onClick={handleClose} aria-label="close modal">
            <CloseSquare size="30" color={theme.colors.black} />
          </button>
        </div>

        <h2> Select Filter</h2>

        <div className="form-wrapper">
          <InputGroupWrapper>
            <DatePicker
              value={filterState.date}
              name="date"
              placeholder="Date"
              onChange={(val) => onChange("date", val.target.value)}
              label="Select Date"
            />
            <SelectInput
              id="status"
              label="Select Status"
              placeholder="Status"
              value={filterState.status}
              onChange={(val) => onChange("status", val.target.value)}
              options={options?.status?.map((item) => ({
                label: item,
                value: item,
              }))}
            />
          </InputGroupWrapper>

          <InputGroupWrapper>
            <SelectInput
              id="shift"
              label="Select Shifts"
              placeholder="Shift"
              value={filterState.shift}
              onChange={(val) => onChange("shift", val.target.value)}
              options={options?.shift?.map((item) => ({
                label: item,
                value: item,
              }))}
            />

            <SelectInput
              id="area"
              label="Select Area"
              placeholder="Area"
              value={filterState.area}
              onChange={(val) => onChange("area", val.target.value)}
              options={options?.area?.map((item) => ({
                label: item,
                value: item,
              }))}
            />
          </InputGroupWrapper>
        </div>

        <div className="button-container">
          <Button
            text="Clear Filter"
            variant="transparent"
            border="primary"
            onClick={clearFilter}
          />
          <Button text="Proceed" onClick={handleSubmit} />
        </div>
      </FilterModalWrapper>
    </Modal>
  );
}

FilterModal.propTypes = {
  isOpen: bool,
  onClose: func,
  onSubmit: func,
};
