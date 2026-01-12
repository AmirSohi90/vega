import { getAxios } from "../lib/facades/get";
import type { Asset } from "../types/asset";

function getAssetsApi({ token }: { token: string }): Promise<Asset[]> {
  return getAxios({
    url: "/assets",
    params: {},
    headers: { Authorization: token },
  });
}

export { getAssetsApi };
