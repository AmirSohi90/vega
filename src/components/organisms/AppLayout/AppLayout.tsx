import { Outlet } from "react-router";
import { Navbar } from "../../molecules/Navbar";
import { LoadingOverlay } from "../../atoms/LoadingOverlay";
import { useLoading } from "../../../context/LoadingContext/LoadingContext";

function AppLayout() {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && <LoadingOverlay />}
      <header className="sticky top-0 border-b border-gray-200 bg-white/80 backdrop-blur">
        <Navbar />
      </header>
      <main className="bg-gradient-to-b from-gray-100 via-gray-50 to-white">
        <Outlet />
      </main>
    </>
  );
}

export { AppLayout };
