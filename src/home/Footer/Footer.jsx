import React from "react";
import Container from "../../components/Container";

const Footer = () => {
  return (
    <div className="bg-black">
      <Container>
        <footer className="footer footer-center p-4  text-white">
          <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
