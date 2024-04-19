import Container from "../../components/Container";
import ScrollToTop from "react-scroll-to-top";
import "../../index.css";

const Footer = () => {
  return (
    <div className="bg-black">
      <Container>
        <footer className="footer footer-center p-4  text-white">
          <ScrollToTop
            data-aos="zoom-in"
            width="20"
            height="20"
            top="800"
            smooth
            color="#fff"
          />
          <div>
            <p>Copyright © 2023 - All right reserved by Ayatullah Behesti</p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
