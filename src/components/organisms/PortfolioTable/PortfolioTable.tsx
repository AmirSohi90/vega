export type AssetPosition = {
  id: string;
  type: "crypto" | "stock" | "etf" | "cash";
  symbol: string;
  name: string;
  quantity: number;
  currency: string;
  currentPrice: number;
  marketValue: number;
};

type Props = {
  data: AssetPosition[];
};

export function PositionsTable({ data }: Props) {
  const formatUSD = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-left text-sm text-gray-500">
            <th className="px-4 py-3 font-medium">Asset</th>
            <th className="px-4 py-3 font-medium text-right">Quantity</th>
            <th className="px-4 py-3 font-medium text-right">Price (USD)</th>
            <th className="px-4 py-3 font-medium text-right">Value (USD)</th>
          </tr>
        </thead>

        <tbody>
          {data.map((asset) => (
            <tr
              key={asset.id}
              className="border-b border-gray-100 last:border-0"
            >
              <td className="px-4 py-3">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {asset.name}
                  </span>
                  <span className="text-xs text-gray-500">{asset.symbol}</span>
                </div>
              </td>

              <td className="px-4 py-3 text-right text-sm text-gray-900">
                {asset.quantity}
              </td>

              <td className="px-4 py-3 text-right text-sm text-gray-900">
                {formatUSD(asset.currentPrice)}
              </td>

              <td className="px-4 py-3 text-right text-sm font-medium text-gray-900">
                {formatUSD(asset.marketValue)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
