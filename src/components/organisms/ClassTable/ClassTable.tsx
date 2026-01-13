import type { AssetType } from "../../../types/asset";
import { formatUSD } from "../../../utils/assets";
import { TableDataCell } from "../../atoms/TableDataCell";
import { TableHeader } from "../../atoms/TableHeader";
import { TableRow } from "../../atoms/TableRow";

type ClassTableProps = {
  data?: { id: AssetType; name: AssetType; total: number }[];
};

function ClassTable({ data }: ClassTableProps) {
  if (!data) return null;
  return (
    <div className="overflow-scroll rounded-xl border border-gray-200 bg-white">
      <table className="w-full border-collapse">
        <thead>
          <TableRow>
            <TableHeader header="Asset" />
            <TableHeader header="Total" />
          </TableRow>
        </thead>

        <tbody>
          {data.map((asset) => (
            <TableRow key={asset.id}>
              <TableDataCell>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {asset.name}
                  </span>
                </div>
              </TableDataCell>

              <TableDataCell>{formatUSD(asset.total)}</TableDataCell>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { ClassTable };
