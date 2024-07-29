import './App.css';
import Layout from './components/layout';
import Detail from './pages/detail';
import Contact from './components/Contact';
import Home from './components/Home';
import { Blog } from './components/Blog';
import { Checkouts } from './components/Checkouts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import { Comparison } from './components/Comparison';
import { CartPage } from './components/CartPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Layout />}>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<Blog/>} />
        <Route path="/checkout" element={<Checkouts/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
          <Route path="/product/:slug" element={<Detail/>} />
          <Route path='/comparison' element={<Comparison/>} />
          <Route path='/cartpage' element={<CartPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
