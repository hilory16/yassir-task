import { useState, useMemo, useEffect, useCallback } from "react";
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
import { apis } from "services";

export default function Index() {
  const [sorting, setSorting] = useState();
  const [tableData, setTableData] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [filters, setFilters] = useState({});
  const [searchValue] = useDebounce(searchTerm, 300);
  const [columnVisibility, setColumnVisibility] = useState({
    guestNotes: false,
  });

  // CREATE TABLE
  const table = useReactTable({
    data: tableData,
    columns: getColumns(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting, columnVisibility },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const { reservations } = await apis.fetchData();
      // (data.reservations) - I ADDED THIS FALLBACK BECAUSE THE LINK WAS INACCESSIBLE AS SOME POINT
      setResponseData(reservations || data.reservations);
    } catch (e) {
      // I ADDED THIS FALLBACK BECAUSE THE LINK WAS INACCESSIBLE AS SOME POINT
      setResponseData(data.reservations);
    }
    setLoading(false);
  };

  // HANDLE HIDE & SHOW COLUMN
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

  const handleSearch = useCallback(
    (text) => {
      const result = searchCustomer(responseData, text);
      setTableData(result);
    },
    [responseData]
  );

  const onClearSeacrch = () => setSearchTerm("");

  useEffect(() => {
    if (responseData) {
      setTableData(responseData);
    }
  }, [responseData]);

  // FETCH INITIAL DATA FROM THE SERVER
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleSearch({ search: searchValue, ...filters });
  }, [searchValue, filters, handleSearch]);

  //GET LIST OF COLUMN TO SHOW ON SELECT COLUMN DROPDOWN
  const allColumns = useMemo(() => {
    if (responseData.length) {
      return [
        "firstName",
        "lastName",
        ...Object.keys(responseData[0]).filter(
          (item) => item !== "customer" && item !== "id"
        ),
      ];
    }
    return [];
  }, [responseData]);

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
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            <div className="table-wrapper">
              <Table table={table} />
            </div>
          )}
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
