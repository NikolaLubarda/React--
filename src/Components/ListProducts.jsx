import React, { useState, useEffect } from "react";
import ProductsService from "../Services/productService";
import ProductItemComponent from "./ProductItemComponent";

const ListProducts = () => {
  const [isActive, setIsActive] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => setProducts(res.data.products), setIsLoading(true))
      .catch((err) => console.log(err));
  }, []);

  function handleIsActive() {
    setIsActive(!isActive);
  }

  return (
    <div className="flex flex-wrap gap-[20px]">
      {isLoading ? (
        products.map((item) => {
          return <ProductItemComponent item={item} key={item.id} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
      <button onClick={handleIsActive}>Change Stats</button>
    </div>
  );
};

export default ListProducts;
