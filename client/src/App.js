import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Layout/Navbar';
import TopBanner from './components/Layout/TopBanner';
import Footer from './components/Footer';
import FollowUs from './components/FollowUs';

function App() {
  return (
    <Router>
      <TopBanner />
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
      <FollowUs />
      <Footer />
    </Router>
  );
}

export default App;
