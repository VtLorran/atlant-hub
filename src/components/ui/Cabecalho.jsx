import { Search } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import Menu from "../Menu";
import { useNavigate } from "react-router-dom";

function Cabecalho({ imagem, cor, corTexto, corInput, CorIcone }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <section className={`w-full justify-between flex items-center h-20 ${cor}`}>
      <div className="gap-3 flex items-center ml-5  lg:ml-20">
        <img src={imagem} alt="Logo" className=" h-10 sm:h-12" />
        <h1 className={`hidden md:block ${corTexto} sm:text-xl lg:text-3xl font-bold`}>
          Atlant Hub
        </h1>
      </div>

      <div
        className={`flex sm:w-65 lg:w-180 w-50 ${corInput} rounded-4xl text-[10px] sm:text-[13px] gap-3 items-center`}
      >
        <input
          placeholder="Pesquisar Produtos..."
          className="lg:w-165 w-38 sm:w-48 p-3 outline-0 pl-5 "
          type="text"
        />
        <button className="cursor-pointer">
          <Search />
        </button>
      </div>

      <div className="flex justify-end lg:mr-20 sm:mr-3 sm:gap-3 mr-5 gap-4 lg:gap-7 relative">
        <button onClick={()=> navigate("/Carrinho")} className="cursor-pointer flex sm:items-center">
          <ShoppingCart className={`h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] ${CorIcone}`}/>
          <div className={`text-sm hidden sm:flex ml-2 lg:flex flex-col ${CorIcone}`}>
            <div className="flex bg-[#071638] w-7 rounded-4xl h-4 text-white justify-center sm:mt-1 items-center ">
              <span>0</span>
            </div>
            <h1>Carrinho</h1>
          </div>
        </button>

        <button
          onClick={() => setOpen(!open)}
          className={`cursor-pointer flex sm:items-center`}
        >
          <CircleUserRound className={`h-[30px] w-[30px]  sm:h-[38px] sm:w-[38px] lg:h-[35px] lg:w-[35px] ${CorIcone}`}/>
          <div className={`hidden sm:flex ml-2 lg:flex flex-col text-sm ${CorIcone}`}>
            <h1 className="text-start  md:block">Olá!</h1>
            <p className="font-bold sm:text-[12px] lg:text-sm">Entrar/Registrar</p>
          </div>
        </button>

        <div
          className={`
          absolute right-0 mt-11 origin-top-right
          transition-all duration-200 ease-out
          ${
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
        >
          <Menu />
        </div>
      </div>
    </section>
  );
}

export default Cabecalho;
