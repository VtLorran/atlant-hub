import { useNavigate } from "react-router-dom";
import img from "../../assets/ChatGPT Image 11 de jan. de 2026, 15_17_18(1).png";

function ProductsPedidos() {
  const navigate = useNavigate();
  return (
    <section className="bg-white rounded-2xl flex flex-col gap-3 justify-center items-center min-h-120 pb-3 h-auto w-90 md:w-115 sm:w-140 lg:w-220">
      <img className="h-80" src={img} alt="" />
      <p className="font-semibold">Sem Pedidos?</p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#0a1f4f] cursor-pointer shadow-lg hover:bg-[#102d73] text-white p-3 md:p-4 font-semibold rounded-3xl"
      >
        Continue Navegando
      </button>
    </section>
  );
}

export default ProductsPedidos;
