import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Home from './component/Home'
import ProductDeatails from './component/product/ProductDeatails'

import Login from './component/user/Login'
import Registation from './component/user/Registation'
import Dashboard from './component/admin/Dashboard'
import Profile from './component/user/Profile'
import Contact from './component/Contact'
import Cart from './component/cart/Cart'

import { useDispatch,useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadUser } from './redux/actions/UserAction'

import Shipping from './component/cart/Shipping'
import ConfirmOrder from './component/cart/ConfirmOrder'
import Payment from './component/payment/Payment'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from './component/payment/Success'

import MyOrder from './component/order/MyOrder'
import ProtectedRoute from './component/protectedRoute/ProtectedRoute'
import OrderDetails from './component/order/OrderDetails'
import ProductList from './component/admin/ProductList'




function App() {

  const {isAuthenticated } = useSelector((state) => state.auth);

  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/stripeapiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  // console.log(stripeApiKey)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loadUser())
    getStripeApiKey()
  }, [dispatch])
  return (
    <>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='productdetails/:id' element={<ProductDeatails />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/checkout' element={<CHeckOut />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registation />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard />} /> 
        <Route path='/admin/product' element={<ProductList/>} /> 

         {/* secure */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>} >
        <Route path='/profile' element={<Profile />} />
              
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/order/confirm' element={<ConfirmOrder />} />
        <Route path='/success' element={<Success />} />
        <Route path='/orders/me' element={<MyOrder/>} />
        <Route path='/order/:id' element={<OrderDetails/>} />
        </Route>

        {
          stripeApiKey && (
            <Route
              path="/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              }
            />
          )
        }

      </Routes>
      <Footer />

    </>
  )
}

export default App