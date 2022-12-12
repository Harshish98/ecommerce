import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { Navigate, Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

function App() {
  
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to={"/home"}/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
