import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Faculdade from "./pages/Faculdade";
import DpoLgpd from "./pages/DpoLgpd";
import Noticias from "./pages/Noticias";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/institucional/a-faculdade">A Faculdade</Link></li>
          <li><Link to="/institucional/dpo-lgpd">DPO - LGPD</Link></li>
          <li><Link to="/noticias">Notícias</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/institucional/a-faculdade" element={<Faculdade />} />
        <Route path="/institucional/dpo-lgpd" element={<DpoLgpd />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
