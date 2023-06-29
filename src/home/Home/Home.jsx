import { useEffect } from "react";
import About from "../About/About";
import Nav from "../Navigation/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "../Skills/Skills";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Skills></Skills>
    </div>
  );
};

export default Home;
