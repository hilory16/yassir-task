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

    columnHelper.accessor("customer.firstName", {
      id: "firstName",
      header: () => "First Name",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("customer.lastName", {
      id: "lastName",
      header: () => "Last Name",
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

export const searchCustomer = (data, key) => {
  if ((data, key)) {
    const { search, status, shift, date, area } = key;

    const searchValues = search
      .split(" ")
      .map((item) => item.toLowerCase())
      .filter((item) => item !== "");

    return data
      .filter(({ customer }) => {
        return searchValues.every(
          (item) =>
            customer?.firstName.toLowerCase().indexOf(item) > -1 ||
            customer?.lastName.toLowerCase().indexOf(item) > -1
        );
      })
      .filter(
        (item) =>
          getFilter(item.status, status) &&
          getFilter(item.shift, shift) &&
          getFilter(item.area, area) &&
          getFilter(item.date, date)
      );
  }
  return data || [];
};
