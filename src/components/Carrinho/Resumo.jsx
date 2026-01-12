function Resumo() {
  return (
    <section className="bg-white w-90 md:w-60 sm:w-140 lg:w-100 h-auto p-6 rounded-2xl">
      <h1 className="text-2xl font-semibold">Resumo</h1>
      <div className="mt-4 flex justify-between font-medium text-lg">
        <p>Estimativa Total</p>
        <span>R$0,00</span>
      </div>
      <div className="flex flex-1 justify-center items-end mt-8">
        <button className="bg-[#0a1f4f] w-full cursor-pointer shadow-lg hover:bg-[#102d73] text-white  p-4 font-semibold rounded-3xl">
          Continuar(0)
        </button>
      </div>
    </section>
  );
}

export default Resumo;
