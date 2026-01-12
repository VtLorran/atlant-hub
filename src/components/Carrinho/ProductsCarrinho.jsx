import { useNavigate } from "react-router-dom";
import img from "../../assets/Pirata Empurrando Carrinho Vazio Cartoon(1).png";

function ProductsCarrinho() {
  const navigate = useNavigate("Carrinho");
  return (
    <section className="bg-white sm:w-140 w-90 md:w-120 lg:w-200 flex flex-col justify-center items-center h-auto min-h-120 0 mt-5 gap-3 rounded-2xl">
      <img className="h-60 sm:h-80 md:h-70" src={img} alt="" />
      <p className="font-semibold">Carrinho vazio?</p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#0a1f4f] cursor-pointer shadow-lg hover:bg-[#102d73] text-white p-3 md:p-4 font-semibold rounded-3xl"
      >
        Continue Navegando
      </button>
    </section>
  );
}

export default ProductsCarrinho;
