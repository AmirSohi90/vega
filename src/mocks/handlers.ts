import { assetHandlers } from "./handlers/assets";
import { auth } from "./handlers/auth";

const handlers = [...auth, ...assetHandlers];

export { handlers };
