import Carrito from "../components/Carrito";
import Home from "../views/Home";
import Inicio from "../views/Inicio";

export let rutas = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Inicio",
    element:<Inicio/>
  },
  {
    path: "/Carrito",
    element:<Carrito/>
  }
];
