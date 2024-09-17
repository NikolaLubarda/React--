import React from "react";

const ProductItemComponent = ({ item }) => {
  return (
    <div className="">
      {" "}
      <img src={item.thumbnail} />
    </div>
  );
};
export default ProductItemComponent;
