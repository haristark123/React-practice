import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/notification";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, FetchCartData } from "./store/cartHttp";
let x=true; 
function App() {
  const cartVisible = useSelector((state) => state.ui.cartVisible);
  const loading = useSelector((state) => state.ui.loading);
  const cart = useSelector((state) => state.cart);
  const notification=useSelector(state=>state.ui.notification)
  const dispatch = useDispatch();

  useEffect(() => {
    if (x){
      x=false
      return
    }
    dispatch(sendCartData(cart));
  }, [dispatch, cart]);
  useEffect(() => {
    dispatch(FetchCartData());
  }, [dispatch]);
  return (
    <>
      {loading && <Notification notification={{...notification}}/>}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
