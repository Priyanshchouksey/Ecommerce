import React, { useState } from 'react'
import Nav from './comp/nav';
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout';
import Footer from './comp/footer';
import Homeproduct from './comp/home-product';
const App = () => {
  const [cart,setCart]=useState([])
  const [shop,setShop] = useState(Homeproduct)
  const [search,setSearch] = useState('')
  const Filter = (x)=>{
    const catefilter = Homeproduct.filter((product)=>{
      return product.cat ===x
    })
    setShop(catefilter)
  }
  const allcatefilter =()=>{
    setShop(Homeproduct)
  }
  const searchlength = (search || []).length === 0
  const searchproduct = ()=>{
  if(searchlength){
    alert("please Search Something!")
    setShop(Homeproduct);
  }else{
      const searchfilter = Homeproduct.filter((x)=>{
        return x.cat ===search
      })
      setShop(searchfilter)
    
    }
  }
  const addtocart =(product)=>{
    const exist = cart.find((x)=>{
      return x.id === product.id
    })
    if(exist){
      alert("This product is already added in cart");
    }else{

      setCart([...cart, {...product, qty:1}])
      alert("Added To Cart")
    }
          
  }
  return (
    <>
    <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
      <Rout  setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App