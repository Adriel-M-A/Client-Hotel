import { Link } from "react-router-dom";

const SideBar = () => (
  <aside className="w-64 h-screen bg-purple-700 text-white p-6">
    <nav className="h-full flex flex-col justify-between">
      <div>
        <h1 className="text-2xl mb-4">Mi Aplicación</h1>
        <ul>
          <li className="mb-2">
            <Link to="/" className="text-white hover:text-blue-500">
              HOME
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/hoteles" className="text-white hover:text-blue-500">
              HOTELES
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/configuracion" className="text-white hover:text-blue-500">
          Configuración
        </Link>
      </div>
    </nav>
  </aside>
);

export default SideBar;
