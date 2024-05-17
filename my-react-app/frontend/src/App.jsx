// import { useState } from 'react'
// import reactLogo from './Components/assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/assets/banner_mens.png';
import women_banner from './Components/assets/banner_women.png';
import kid_banner from './Components/assets/banner_kids.png';
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}></Route>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}></Route>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}></Route>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}></Route>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div> 
  );
}

export default App
