
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Performance from './pages/Performance';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route
  
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Classes" element={<Classes />} />
          <Route path="/Performance" element={<Performance />} />
        </Routes>
      <Footer />
    </Router>
    </div>
  );
}


export default App;
