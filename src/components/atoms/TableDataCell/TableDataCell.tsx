import type React from "react";

type TableDataCellProps = {
  children: React.ReactNode;
};

function TableDataCell({ children }: TableDataCellProps) {
  return <td className="px-4 py-3  text-sm text-gray-900">{children}</td>;
}

export { TableDataCell };
