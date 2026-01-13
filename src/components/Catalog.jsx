import GridProdutos from "./ui/GridProdutos";
import productsAtlantHub from "../data/Products"
function Catalog() {
  return (
    <section className="p-10 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productsAtlantHub.map((product, index) => (
          <GridProdutos
            key={index}
            img={product.img}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Catalog;
