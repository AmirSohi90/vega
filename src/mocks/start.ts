export async function startMocks() {
  if (!import.meta.env.DEV) return;

  const { worker } = await import("./browser");
  console.log("Starting MSW...");
  await worker.start({ onUnhandledRequest: "bypass" });
  console.log("MSW started");
}
