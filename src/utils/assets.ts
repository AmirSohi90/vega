import { type AssetType, type Asset } from "../types/asset";

function getTotalValueByType(assets: Asset[]): Record<AssetType, number> {
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

export { getTotalValueByType, getPortfolioTotal };
