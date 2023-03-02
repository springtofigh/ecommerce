import React, {useState , useEffect} from "react";
import { Route, Routes } from "react-router-dom";

// API
import { commerce } from './lib/commerce';

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from './components/Cart/Cart';
import Checkout from "./components/CheckoutFolder/Checkout/Checkout";
// import SignUp from "./components/SignUp/SignUp";



const App = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState({});
    const [order , setOrder] = useState({});
    const [errorMsg, setErrorMsg] = useState('');

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
        const  item  = await commerce.cart.add(productId , quantity);
      
        setCart(item)
      }

      // UPDATE QUANITY FOR EACH PRODUCT
      const handleUpdateCartQuantity = async (productId , quantity ) => {
        const item = await commerce.cart.update(productId , {quantity});
        setCart(item)
      }

      // REMOVE PRODUCT FORM CART
      const handleRemoveFromCart = async (productId) => {
        const item = await commerce.cart.remove(productId);
        setCart(item)
      }

      // FULL EMPTY CART
      const handleEmptyCart = async () => {
        const item = await commerce.cart.empty();
        setCart(item)
      }

      // MAKE CART EMTY AFTER PAYMENT
      const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart)
      }

      // 
      const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
          setOrder(incomingOrder);
          refreshCart();
        } catch (error) {
          setErrorMsg(error.data.error.message)
        }
      };

      useEffect(() => {
        fetchProducts();
        fetchCart();
      }, []);

      console.log(products);
      console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      <Routes>
      <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} cart={cart}/>}/>
          <Route path="/cart" element={<Cart cart={cart}  handleEmptyCart={handleEmptyCart}  handleRemoveFromCart={handleRemoveFromCart}  handleUpdateCartQuantity={handleUpdateCartQuantity}/>}/>
          <Route path="/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMsg} />}/>
      </Routes>


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