import { type AssetType, type Asset } from "../types/asset";

function getTotalValueByType(assets: Asset[]): Record<AssetType, number> {
  return assets.reduce((obj, { type, marketValue }) => {
    return {
      ...obj,
      [type]: obj[type] ? (obj[type] += marketValue) : marketValue,
    };
  }, {} as Record<AssetType, number>);
}

export { getTotalValueByType };
