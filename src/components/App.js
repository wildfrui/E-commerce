//external deps
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//inner deps
import Shop from "./Shop.js";
import ProductList from "./ProductList.js";
import Header from "./Header";
//css

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" exact element={<ProductList />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
