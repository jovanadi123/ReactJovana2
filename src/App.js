import "./App.css";
import { useState } from "react";
import NavBar from "./navBar";
import Cart from "./cart";
import Products from "./products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartNum, setCartNum] = useState(0);
  const [products, setProducts] = useState([ {
      id: 1,
      title: "Brazilska kafa",
      picture: "https://www.klubzdravihnavika.com/wp-content/uploads/2019/09/Kafa.jpg",
      description:
        "Sa brazilskih plantaža kafe, koje se prostiru na preko 27.000 kvadratnih kilometara dolazi nam najkvalitetnija vrsta kafe.",
         amount: 0,
    
    },
    {
      id: 2,
      title: "Limunada",
      picture:"https://staticsensa.mondo.rs/Picture/24075/jpeg/12-zdravstvenih-tegoba-kod-kojih-pomaze-limunada-mocan-napitak-koji-cuva-kosti-i-vitalne-organe.jpg",
      description:
        "Limunada je omiljeno letnje piće koje osvežava, rashlađuje i sadrži veliku količinu vitamina i minerala.",
      amount: 0,
    },
    {
      id: 3,
      title: "Milford čaj",
      picture:"https://www.kucastil.rs/uploads/ck_editor/images/RECEPTI%20I%20STIL/Otkrijte%20da%20li%20ceo%20%C5%BEivot%20pijete%20%C4%8Daj%20na%20pogre%C5%A1an%20na%C4%8Din/Otkrijte%20da%20li%20ceo%20%C5%BEivot%20pijete%20caj%20na%20pogre%C5%A1an%20nacin%20665.jpg",
      description:
        "Pažljivo birano voće i bilje čine ispijanje čaja iskustvom intenzivnog ukusa.",
      amount: 0,
    },
  ]);
  const refreshCart = () => {
    const newProducts = products.filter((product) => product.amount > 0);
    setCartProducts(newProducts);
  };

  const addToCart = (id) => {
    products.map((product) => {
      if (product.id === id) {
        product.amount = product.amount + 1;
        const a = cartNum + 1;
        setCartNum(a);
        refreshCart();
        console.log("product id=", product.id, "amount=", product.amount);
      }
    });
  };
  const remFromCart = (id) => {
    products.map((product) => {
      if (product.id === id) {
        if (product.amount > 0) {
          product.amount = product.amount - 1;
          const a = cartNum - 1;
          setCartNum(a);
          refreshCart();
          console.log("product id=", product.id, "amount=", product.amount);
        } else {
          alert("Ne možete izbaciti proizvod koji se ne nalazi u korpi.");
        }
      }
    });
  };


   
  return (
    <BrowserRouter>
      <NavBar cartNum={cartNum} />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              products={products}
              onAdd={addToCart}
              onRemove={remFromCart}
            />
          }
        />
            <Route
    path="/cart"
    element={<Cart cartProducts={cartProducts} />}
  />

      </Routes>
    </BrowserRouter>
  );

  }

export default App;