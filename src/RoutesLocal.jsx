import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from './Sobre';
import NaoEncontrada from './NaoEncontrada';
import Header from './Header';
import Footer from './Footer';
import Contato from './Contato';
import Login from './Login';
import Home from './Home';

const RoutesLocal = () => {
  return (
    <BrowserRouter>
    <Header />
    <Login />
      <Routes>
        <Route path="sobre" element={<Sobre />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NaoEncontrada />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesLocal;