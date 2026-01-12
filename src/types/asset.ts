const assetType = {
  crypto: "Crypto",
  etf: "ETF",
  stock: "Stock",
  cash: "Cash",
} as const;

type AssetType = keyof typeof assetType;

type BaseAsset = {
  id: string;
  symbol: string;
  name: string;
  quantity: number;
  currency: string;
  currentPrice: number;
  marketValue: number;
  lastUpdated: string;
};

type CryptoAsset = BaseAsset & {
  type: "crypto";
  exchange: string;
};

type StockAsset = BaseAsset & {
  type: "stock" | "etf";
  exchange: string;
};

type CashAsset = BaseAsset & {
  type: "cash";
  account: string;
};

type Asset = CryptoAsset | StockAsset | CashAsset;

export { assetType };
export type { Asset, AssetType };
