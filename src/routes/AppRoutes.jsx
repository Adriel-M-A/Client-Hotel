import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HotelesPage from "../pages/HotelesPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/hoteles" element={<HotelesPage />} />
  </Routes>
);

export default AppRoutes;
