import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Carrinho from "./pages/Carrinho.jsx";
import Pedidos from "./pages/Pedidos.jsx";
import ListaDesejos from "./pages/ListaDesejos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Carrinho",
    element: <Carrinho />,
  },
  {
    path: "/Pedidos",
    element: <Pedidos/>,
  },
  {
    path: "/Desejos",
    element: <ListaDesejos/>
  } 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
