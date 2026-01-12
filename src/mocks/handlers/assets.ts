import { http, HttpResponse } from "msw";
import type { Asset } from "../../types/asset";

const assets: Asset[] = [
  {
    id: "asset_001",
    type: "crypto",
    symbol: "BTC",
    name: "Bitcoin",
    quantity: 0.75,
    currency: "BTC",
    currentPrice: 43000.25,
    marketValue: 32250.19,
    exchange: "Coinbase",
    lastUpdated: "2026-01-12T09:15:00Z",
  },
  {
    id: "asset_002",
    type: "crypto",
    symbol: "ETH",
    name: "Ethereum",
    quantity: 12.4,
    currency: "ETH",
    currentPrice: 2300.1,
    marketValue: 28521.24,
    exchange: "Binance",
    lastUpdated: "2026-01-12T09:15:00Z",
  },
  {
    id: "asset_003",
    type: "stock",
    symbol: "AAPL",
    name: "Apple Inc.",
    quantity: 50,
    currency: "USD",
    currentPrice: 192.35,
    marketValue: 9617.5,
    exchange: "NASDAQ",
    lastUpdated: "2026-01-11T21:00:00Z",
  },
  {
    id: "asset_004",
    type: "stock",
    symbol: "TSLA",
    name: "Tesla, Inc.",
    quantity: 15,
    currency: "USD",
    currentPrice: 238.4,
    marketValue: 3576.0,
    exchange: "NASDAQ",
    lastUpdated: "2026-01-11T21:00:00Z",
  },
  {
    id: "asset_005",
    type: "etf",
    symbol: "VOO",
    name: "Vanguard S&P 500 ETF",
    quantity: 20,
    currency: "USD",
    currentPrice: 435.6,
    marketValue: 8712.0,
    exchange: "NYSE",
    lastUpdated: "2026-01-11T21:00:00Z",
  },
  {
    id: "asset_006",
    type: "cash",
    symbol: "USD",
    name: "US Dollars",
    quantity: 12500.0,
    currency: "USD",
    currentPrice: 1.0,
    marketValue: 12500.0,
    account: "Checking Account",
    lastUpdated: "2026-01-12T08:00:00Z",
  },
];

const getAssets = http.get("/assets", ({ request }) => {
  const auth = request.headers.get("Authorization");
  console.log({ auth });

  if (!auth) {
    return HttpResponse.json(
      { message: "Missing or invalid token" },
      { status: 401 }
    );
  }

  if (auth !== "mock-jwt-token") {
    return HttpResponse.json({ message: "Invalid token" }, { status: 403 });
  }

  return HttpResponse.json(assets, { status: 200 });
});

const assetHandlers = [getAssets];

export { assetHandlers };
