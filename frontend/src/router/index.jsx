import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ClientPage from "../pages/ClientPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/client" element={<ClientPage />} />
    </Routes>
  );
}
