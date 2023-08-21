import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from './Sobre';
import NaoEncontrada from './NaoEncontrada';
import Header from './Header';
import Footer from './Footer';
import Contato from './Contato';

const RoutesLocal = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesLocal;