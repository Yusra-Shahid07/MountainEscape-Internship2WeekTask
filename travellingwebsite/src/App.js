import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home';
import Footer  from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <-- Router components import karo
import PoliciesPage from './pages/Policies';
function App() {
  
  return (
    <>
    <Router>
      <Header mainHeading ="Mountain Escape"/>
      <Routes>
        <Route path="/" element={<Home heading="Destinations"/>}/>
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
      </Routes>
      
      <Footer/>
      </Router>
    </>
  );
}

export default App;
