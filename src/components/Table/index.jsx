import { object } from "prop-types";
import { ArrowDown, ArrowUp } from "iconsax-react";
import clsx from "classnames";
import { flexRender } from "@tanstack/react-table";
import { TableWrapper } from "./Table.style";
import useTheme from "hooks/useTheme";

export default function Table({ table }) {
  const { theme } = useTheme();
  return (
    <TableWrapper>
      <table className="yassir-data-table">
        <thead className="yassir-table-thead">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="yassir-table-tr">
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className={clsx("yassir-table-th", {
                    "sticky-col": index === 0,
                    "first-col": index === 0,
                  })}
                >
                  {
                    {
                      asc: <ArrowUp size="16" color={theme.colors.black} />,
                      desc: <ArrowDown size="16" color={theme.colors.black} />,
                    }[header.column.getIsSorted() ?? null]
                  }

                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="yassir-table-tr">
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={cell.id}
                  className={clsx("yassir-table-td", {
                    "sticky-col": index === 0,
                    "first-col": index === 0,
                  })}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
}

Table.propTypes = {
  table: object,
};
