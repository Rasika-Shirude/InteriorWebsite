//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';
import Team from './components/team/Team';
import { BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import HInterior from './components/hinterior/HInterior';
import OInterior from './components/oInterior/OInterior';
import Bungalow from './components/bungalow/Bungalow';
import Resort from './components/resort/Resort';
import Gym from './components/gym/Gym';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
  <>
<BrowserRouter basename={process.env.PUBLIC_URL}></BrowserRouter>
  <Router>
  <ScrollToTop /> {/* Add ScrollToTop component here */}

   <Navbar/>

   <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/home-interior" element={<HInterior/>} />
          <Route exact path="/office-interior" element={<OInterior/>} />
          <Route exact path="/bungalow" element={<Bungalow/>} />
          <Route exact path="/resort" element={<Resort/>} />
          <Route exact path="/gym" element={<Gym/>} />
          <Route exact path="/testimonials" element={<Testimonials/>} />

         
        </Routes>
       <Footer/>
   </Router>
   
  </>
  );
}

export default App;
