import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navigate from "./components/layout/Navigate";

function App() {
  return (
    <BrowserRouter>
      <Navigate />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
