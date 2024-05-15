import {
  CloseCircle,
  FilterSquare,
  GridEdit,
  SearchNormal1,
} from "iconsax-react";
import { useState } from "react";
import { string, func, array, number, object } from "prop-types";
import { Dropdown } from "components/Dropdown";
import { Input } from "components/Input";
import {
  ColumnSelectionWrapper,
  TableHeaderWrapper,
} from "pages/Dashboard/Dashboard.style";
import useTheme from "hooks/useTheme";
import { TableControl } from "styles/utils";
import { mapColumnToTitle } from "../../utils";

export default function ReservationTableControls({
  title,
  searchTerm,
  onChangeSearch,
  onClearSeacrch,
  columns,
  handleColumnVisibility,
  visibleColumns,
  onFilter,
  count,
}) {
  const [show, setShow] = useState(null);
  const { theme } = useTheme();

  return (
    <TableHeaderWrapper>
      <div className="title-block">
        <h3 className="table-title"> {title}</h3>
        <div className="count-badge">{count}</div>
      </div>

      <div className="table-general-actions">
        <div className="search-input-container">
          <Input
            value={searchTerm}
            startAdornment={
              <SearchNormal1 size="18" color={theme.colors.black} />
            }
            {...(searchTerm && {
              endAdornment: (
                <button
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={onClearSeacrch}
                >
                  <CloseCircle size="18" color={theme.colors.black} />
                </button>
              ),
            })}
            placeholder="Search first name and last name"
            onChange={onChangeSearch}
          />
        </div>

        <div className="tb-actions">
          <TableControl
            type="button"
            onClick={() => {
              setShow(false);
              onFilter();
            }}
            aria-label="filter"
          >
            <FilterSquare size="20" ccolor={theme.colors.black} />
            <p className="trigger-text">Filter Table</p>
          </TableControl>

          <Dropdown
            direction="start-left"
            closeOnClick={false}
            shouldShow={show}
            positionX="-142px"
            offsetTop={5}
            trigger={
              <TableControl type="button" aria-label="column visibility">
                <GridEdit size="20" color={theme.colors.black} />
                <p className="trigger-text">Columns</p>
              </TableControl>
            }
          >
            <ColumnSelectionWrapper>
              {columns.map((item) => (
                <li key={item}>
                  <input
                    id={`column-checkbox-label-${item}`}
                    type="checkbox"
                    className="column-checkbox"
                    checked={
                      visibleColumns[item] === undefined
                        ? true
                        : visibleColumns[item]
                    }
                    onChange={() => {
                      handleColumnVisibility(item);
                      setShow(true);
                    }}
                  />
                  <label htmlFor={`column-checkbox-label-${item}`}>
                    {mapColumnToTitle[item] || item}
                  </label>
                </li>
              ))}
              <li className="update-button-li">
                <button
                  type="button"
                  className="update-button"
                  onClick={() => setShow(false)}
                >
                  Done
                </button>
              </li>
            </ColumnSelectionWrapper>
          </Dropdown>
        </div>
      </div>
    </TableHeaderWrapper>
  );
}

ReservationTableControls.propTypes = {
  title: string,
  searchTerm: string,
  onChangeSearch: func,
  onClearSeacrch: func,
  columns: array,
  handleColumnVisibility: func,
  visibleColumns: object,
  onFilter: func,
  count: number,
};
