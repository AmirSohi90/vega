import { TableHeader } from "../../atoms/TableHeader";
import { TableDataCell } from "../../atoms/TableDataCell";
import { TableRow } from "../../atoms/TableRow";
import type { Asset } from "../../../types/asset";
import { formatUSD } from "../../../utils/assets";

type AssetTableProps = {
  data: Asset[];
};

function AssetTable({ data }: AssetTableProps) {
  return (
    <div className="overflow-scroll rounded-xl bg-white">
      <table className="w-full border-collapse">
        <thead>
          <TableRow>
            <TableHeader header="Asset" />
            <TableHeader header="Quantity" />
            <TableHeader header="Price (USD)" />
            <TableHeader header="Value (USD)" />
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
                  <span className="text-xs text-gray-500">{asset.symbol}</span>
                </div>
              </TableDataCell>

              <TableDataCell>{asset.quantity}</TableDataCell>

              <TableDataCell>{formatUSD(asset.currentPrice)}</TableDataCell>

              <TableDataCell>{formatUSD(asset.marketValue)}</TableDataCell>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { AssetTable };
