import { useEffect } from "react";
import About from "../About/About";
// import Nav from "../Navigation/Nav";
// import AOS from "aos";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Portfolios from "../Portfolios/Portfolios";
import Nav from "../Navigation/Nav";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 1000,
      once: true,
    });
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
