import { type AssetType, type Asset } from "../types/asset";

function getTotalValueByAssetType(assets: Asset[]): Record<AssetType, number> {
  return assets.reduce((obj, { type, marketValue }) => {
    return {
      ...obj,
      [type]: obj[type] ? (obj[type] += marketValue) : marketValue,
    };
  }, {} as Record<AssetType, number>);
}

function getPortfolioTotal(assets: Asset[]): number {
  return assets.reduce((acc, { marketValue }) => {
    return (acc += marketValue);
  }, 0);
}

const formatUSD = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);

export { getTotalValueByAssetType, getPortfolioTotal, formatUSD };
