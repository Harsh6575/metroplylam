import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './COMPONENTS/Footer';
import Home from './COMPONENTS/Home';
import Sitemap from './COMPONENTS/Sitemap';
import Sidebar from './COMPONENTS/Sidebar';
import { Contact } from './COMPONENTS/Contact';
import { Products } from './COMPONENTS/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="b-container">
          <Routes>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Sitemap" element={<Sitemap />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Footer />

    </div>
  );
}

export default App;