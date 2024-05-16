import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Status } from "components/Status";

dayjs.extend(customParseFormat);

const columnHelper = createColumnHelper();

export const getColumns = (visibleColumns) => {
  const columns = [
    columnHelper.accessor("id", {
      header: () => "S/N",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("customer", {
      id: "customer",
      header: () => "Customer",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const value = info.getValue().toLowerCase();
        return <Status status={value}>{value}</Status>;
      },
    }),

    columnHelper.accessor("shift", {
      header: "Shift",
    }),

    columnHelper.accessor("quantity", {
      header: () => "Quantity",
      cell: (info) => info.renderValue(),
    }),

    columnHelper.accessor("area", {
      header: "Area",
    }),

    columnHelper.accessor("guestNotes", {
      header: "Guest Note",
      cell: (info) => info.renderValue() || "-",
    }),

    columnHelper.accessor("businessDate", {
      header: "Business Date",
      cell: (info) => (
        <p>{dayjs(info.getValue(), "DD.MM.YYYY").format("DD MMM, YYYY")}</p>
      ),
    }),

    columnHelper.accessor("start", {
      cell: (info) => <p>{dayjs(info.getValue()).format("hh:mmA")}</p>,
      header: "Start",
    }),

    columnHelper.accessor("end", {
      cell: (info) => <p>{dayjs(info.getValue()).format("hh:mmA")}</p>,
      header: "End",
    }),
  ];

  return columns.filter((value) => value);
};
export const mapColumnToTitle = {
  id: "S/N",
  businessDate: "Business Date",
  firstName: "First Name",
  lastName: "Last Name",
  status: "Status",
  shift: "Shift",
  start: "Start",
  end: "End",
  quantity: "Quanitity",
  customer: "Customer",
  area: "Area",
  guestNotes: "Guest Notes",
};

const getFilter = (base, value) => {
  return value && value !== "all"
    ? base?.toLowerCase() === value.toLowerCase()
    : true;
};

// COMPARE DATES
const dateCheck = (date1, date2) => {
  if (date1 && date2) {
    return dayjs(date1, "DD.MM.YYYY")?.diff(date2) === 0;
  }
  return true;
};

export const searchCustomer = (data, key) => {
  if ((data, key)) {
    const { search, status, shift, date, area } = key;
    return data.filter(
      (item) =>
        item.customer.toLowerCase().indexOf(search.toLowerCase()) > -1 &&
        getFilter(item.status, status) &&
        getFilter(item.shift, shift) &&
        getFilter(item.area, area) &&
        dateCheck(item.businessDate.replaceAll("."), date)
    );
  }
  return data || [];
};

export const options = {
  status: ["all", "confirmed", "seated", "checked out", "not confirmed"],
  shift: ["all", "breakfast", "lunch", "dinner"],
  area: ["all", "main room", "bar"],
};

export const mergeName = (baseData) =>
  baseData.map(({ customer, ...rest }) => ({
    ...rest,
    customer: `${customer.firstName} ${customer.lastName}`,
  }));
