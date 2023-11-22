import Container from "../../components/Container";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div className="bg-black">
      <Container>
        <footer className="footer footer-center p-4  text-white">
          <ScrollToTop top="1000" smooth color="#6366F1" />
          <div>
            <p>Copyright © 2023 - All right reserved by Ayatullah Behesti</p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
