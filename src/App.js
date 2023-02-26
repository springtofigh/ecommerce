import React, {useState , useEffect} from "react";
// import { Route, Routes } from "react-router-dom";

// API
import { commerce } from './lib/commerce';

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from './components/Cart/Cart';
// import Checkout from "./components/CheckoutFolder/Checkout/Checkout";
// import SignUp from "./components/SignUp/SignUp";



const App = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState({});

    // GET ANG SHOW PRODUCTS
    const fetchProducts = async () => {
      const  response  = await commerce.products.list();
      setProducts(response.data);
      }

      // GET PRODUCTS IN USER CART
      const fetchCart = async () => {
        const  response  = await commerce.cart.retrieve();
        setCart(response)
      }

      // ADD PRODUCTS TO CART
      
      const handleAddToCart = async (productId , quantity) => {
        const  response  = await commerce.cart.add(productId , quantity);
      
        setCart(response.cart)
      
      }

      // UPDATE QUANITY FOR EACH PRODUCT
      // const handleUpdateCartQuantity = async (productId , quantity ) => {
      //   const response = await commerce.cart.update(productId , {quantity});
      //   setCart(response.cart)
      // }

      // 
      // const handleRemoveFromCart = async (productId) => {
      //   const response = await commerce.cart.remove(productId);
      //   setCart(response.cart)
      // }

      // FULL EMPTY CART
      // const handleEmptyCart = async () => {
      //   const response = await commerce.cart.empty();
      //   setCart(response.cart)
      // }

      useEffect(() => {
        fetchProducts();
        fetchCart();
      }, []);

      console.log(products);
      console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
      <Cart cart={cart} />


        {/* <Navbar totalItems={cart.total_items}/>
        <Routes>
          <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} cart={cart}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/cart" element={<Cart cart={cart}  handleEmptyCart={handleEmptyCart}  handleRemoveFromCart={handleRemoveFromCart}  handleUpdateCartQuantity={handleUpdateCartQuantity}/>}/>
          <Route path="/checkout" element={<Checkout cart={cart} />}/>
        </Routes> */}
        
    </div>
  )
}

export default App