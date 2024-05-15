import { Routes, Route } from "react-router-dom";
import DashboardPageWrapper from "pages/Dashboard";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPageWrapper />} />
    </Routes>
  );
}
