import logo from "../assets/Leme Azul - PNG.png";
import Cabecalho from "./ui/Cabecalho";

function Header() {
  return (
    <Cabecalho
      imagem={logo}
      cor={"bg-white"}
      corTexto={"text-blue-950"}
      corInput={"bg-stone-300"}
    />
  )
}

export default Header;
