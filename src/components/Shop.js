import React from "react";
import ProductSearch from "./ProductSearch";
import ProductList from "./ProductList";
import "./Shop.css";

class Shop extends React.Component {
  render() {
    return (
      <div className="shop">
        <ProductSearch></ProductSearch>
        <ProductList></ProductList>
      </div>
    );
  }
}

export default Shop;
