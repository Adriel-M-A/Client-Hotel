import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import SideBar from "./components/layout/SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
