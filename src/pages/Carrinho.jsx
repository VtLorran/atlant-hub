import Cabecalho from "../components/ui/Cabecalho";
import logo from "../assets/Leme Branco - PNG.png";
import Footer from "../components/Footer";
import Tittle from "../components/Carrinho/Tittle";
import ProductsCarrinho from "../components/Carrinho/ProductsCarrinho";
import Resumo from "../components/Carrinho/Resumo";
import { useNavigate } from "react-router-dom";

function Carrinho() {
  const navigate = useNavigate("/Carrinho");

  return (
    <section className="min-h-screen flex flex-col bg-[#ececec]">
      <Cabecalho
        cor={"bg-gradient-to-r from-[rgb(2,0,36)] to-[rgb(0,89,184)]"}
        imagem={logo}
        corTexto={"text-white"}
        corInput={"bg-white"}
        CorIcone={"text-white"}
      />

      <div className="flex flex-col flex-1 lg-mt-0 mt-5 items-center lg:justify-center  ">
        <div className=" flex sm:w-135 w-80 md:w-180 lg:w-300 md:mt-0 mt-7 justify-start">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-red-400"
          >
            Inicio &gt;
          </button>
          <p className="ml-2">Carrinho</p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <Tittle />
            <ProductsCarrinho />
          </div>

          <div>
            <Resumo />
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
}

export default Carrinho;
