import { MultiStepForm } from "./MultiStepForm";
import LangContext from "./LangContext";
import { useState } from "react";
import LangueComponant from "./LangueComponant";
import CartContext from "./CartContext";
import ProductItem from "./ProductItem";
import { CartSummary } from "./CartSummary";
import { MyForm } from "./MyForm";
import { ContectApp } from "./ContectApp";
function App() {
  const [cartItems, setCartTtems] = useState([]);
  const addToCart = (item) => {
    setCartTtems([...cartItems, item]);
  };
  const removeCart = (itemId) => {
    setCartTtems(cartItems.filter((item) => item.id !== itemId));
  };
  const value = {
    cartItems,
    addToCart,
    removeCart,
  };

  const [languege, setLangueg] = useState("Hello");
  const switchLang = () => {
    setLangueg((prev) => (prev === "Hello" ? "Haa" : "Hello"));
  };
  return (
    <div>
      <ContectApp/>
      <MyForm/>
      <CartContext.Provider value={value}>
        <h1>Product itams</h1>
        <ProductItem itemId={1} itemName={"Baris"} price={20} />
        <ProductItem itemId={2} itemName={"Bur"} price={30} />
        <ProductItem itemId={3} itemName={"sokor"} price={23} />
        <CartSummary />
      </CartContext.Provider>
      <LangContext.Provider value={languege}>
        <button onClick={switchLang}>
          switch to {languege === "Hello" ? "Somali" : "English"}
        </button>
        <LangueComponant />
      </LangContext.Provider>
      <MultiStepForm />
    </div>
  );
}
export default App;
