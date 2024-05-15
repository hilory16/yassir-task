import { useState, useMemo, useEffect } from "react";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useDebounce } from "use-debounce";
import { data } from "data";
import DashboardContainer from "components/DashboardContainer";
import { DashboardPageWrapper } from "pages/Dashboard/Dashboard.style";
import { preventMultipleWhiteSpaces } from "utils/string";
import Table from "components/Table";
import ReservationTableControls from "./Feature/ReservationTableControls";
import FilterModal from "./Feature/FilterModal";
import { getColumns, searchCustomer } from "./utils";

export default function Index() {
  const [sorting, setSorting] = useState();
  const [tableData, setTableData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [filters, setFilters] = useState({});
  const [searchValue] = useDebounce(searchTerm, 500);

  const [columnVisibility, setColumnVisibility] = useState({
    guestNotes: false,
  });

  const table = useReactTable({
    data: tableData,
    columns: getColumns(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting, columnVisibility },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
  });

  const handleColumnVisibility = (val) => {
    const handleView = (value) => {
      if (value === undefined) return false;
      return !value;
    };
    setColumnVisibility((prevState) => ({
      ...prevState,
      [val]: handleView(prevState[val]),
    }));
  };

  const onChangeSearch = (e) => {
    const value = preventMultipleWhiteSpaces(e.target.value);
    setSearchTerm(value);
  };

  const handleSearch = (text) => {
    const result = searchCustomer(data?.reservations, text);
    setTableData(result);
  };

  const onClearSeacrch = () => setSearchTerm("");

  useEffect(() => {
    if (data?.reservations) {
      setTableData(data?.reservations);
    }
  }, []);

  useEffect(() => {
    handleSearch({ search: searchValue, ...filters });
  }, [searchValue, filters]);

  const allColumns = useMemo(() => {
    if (data?.reservations && data?.reservations.length) {
      return [
        "firstName",
        "lastName",
        ...Object.keys(data?.reservations[0]).filter(
          (item) => item !== "customer" && item !== "id"
        ),
      ];
    }
    return [];
  }, []);

  return (
    <>
      <DashboardContainer>
        <DashboardPageWrapper>
          <h2 className="page-title">Reservations</h2>
          <ReservationTableControls
            title="Upcoming Reservations"
            searchTerm={searchTerm}
            count={tableData.length}
            columns={allColumns}
            visibleColumns={columnVisibility}
            onChangeSearch={onChangeSearch}
            onClearSeacrch={onClearSeacrch}
            handleColumnVisibility={handleColumnVisibility}
            onFilter={() => setFilterVisibility(true)}
          />
          <div className="table-wrapper">
            <Table table={table} />
          </div>
        </DashboardPageWrapper>
      </DashboardContainer>

      <FilterModal
        isOpen={filterVisibility}
        onClose={() => setFilterVisibility((prev) => !prev)}
        onSubmit={(val) => setFilters(val)}
        defaultValues={filters}
      />
    </>
  );
}
