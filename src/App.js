import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Services } from './COMPONENTS/Services';
import './App.css';

import Footer from './COMPONENTS/Footer';
import Home from './COMPONENTS/Home';
import Sitemap from './COMPONENTS/Sitemap';
import Sidebar from './COMPONENTS/Sidebar';
import { Contact } from './COMPONENTS/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="b-container">
          <Routes>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services" element={<Services />} />
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