
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



function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='productdetails/:id' element={<ProductDeatails/>} />
        <Route path='/cart' element={<Cart/>} />
       
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Registation/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/contact' element={<Contact/>} />
        
      </Routes>
      <Footer />

    </>
  )
}

export default App