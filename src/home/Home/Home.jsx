import { useEffect } from "react";
import About from "../About/About";
import Nav from "../Navigation/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Portfolios from "../Portfolios/Portfolios";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Skills></Skills>
      <Portfolios></Portfolios>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
