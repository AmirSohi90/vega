import type { Asset } from "../../types/asset";
import { getTotalValueByAssetType } from "../assets";

type MockAsset = Pick<Asset, "type" | "marketValue">;

describe("getTotalValueByAssetType", () => {
  it("aggregates market value by asset type", () => {
    const assets: MockAsset[] = [
      { type: "crypto", marketValue: 100 },
      { type: "stock", marketValue: 200 },
      { type: "crypto", marketValue: 50 },
      { type: "etf", marketValue: 75 },
    ];

    const result = getTotalValueByAssetType(assets as Asset[]);

    expect(result).toEqual({
      crypto: 150,
      stock: 200,
      etf: 75,
    });
  });

  it("returns an empty object when given no assets", () => {
    const result = getTotalValueByAssetType([]);

    expect(result).toEqual({});
  });
});
