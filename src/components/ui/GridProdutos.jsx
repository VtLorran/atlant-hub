function GridProdutos({ img, name, price, description }) {
  return (
    <div className="bg-[#f3f3f3] flex flex-col rounded-2xl p-1 shadow-xl gap-2 justify-between  h-100 w-80">
      <img src={img} alt={name} className="h-40 object-cover rounded-2xl" />

      <h1 className="font-semibold text-lg ">{name}</h1>

      <p className="font-bold ">R$ {price}</p>

      <p className="text-sm text-gray-600">{description}</p>
      <div className="m-2">
        <button className="mt-auto cursor-pointer bg-[#071638] text-white rounded-lg py-2 w-full hover:bg-[#0c2560]">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default GridProdutos;
