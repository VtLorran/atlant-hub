import Cabecalho from "../components/ui/Cabecalho";
import logo from "../assets/Leme Branco - PNG.png";
import OpcoesPedidos from "../components/Pedidos/OpcoesPedidos";
import ProductsPedidos from "../components/Pedidos/ProductsPedidos";
import Footer from "../components/Footer";
import TittlePedidos from "../components/Pedidos/TittlePedidos";
import { useNavigate } from "react-router-dom";

function Pedidos() {
  const navigate = useNavigate()
  return (
    <section className="min-h-screen flex flex-col bg-[#ececec]">
      <Cabecalho
        cor={"bg-gradient-to-r from-[rgb(2,0,36)] to-[rgb(0,89,184)]"}
        imagem={logo}
        corTexto={"text-white"}
        corInput={"bg-white"}
        CorIcone={"text-white"}
      />

      <div className="flex flex-col flex-1 lg-mt-0 mt-10 items-center lg:justify-start">
        <div className=" flex w-80 sm:w-135 md:w-175 lg:w-280 mb-2 md:mt-0 mt-7 justify-start">
          <button
            onClick={()=> navigate("/")}  
            className="cursor-pointer hover:text-red-400"
          >
            Inicio &gt;
          </button>
          <p className="ml-2">Pedidos</p>
        </div>
        <div className="gap-3 flex flex-col">
            <div>
                <TittlePedidos/>
            </div>

            <div className=" flex md:flex-row lg:flex-row flex-col  h-auto gap-4">
                <OpcoesPedidos />
                <ProductsPedidos />
            </div>
        </div>
      </div>
      

      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
}

export default Pedidos;
