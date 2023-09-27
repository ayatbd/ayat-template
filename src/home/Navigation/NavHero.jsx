/* eslint-disable react/no-unescaped-entities */
import img1 from "../../assets/images/img2.jpg";
import { BsArrowDownCircle } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import "../../index.css";
import { Link } from "react-scroll";
import Container from "../../components/Container";
const NavHero = () => {
  const handleDownload = () => {
    const url = "/Document.docx.pdf";
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "resume.pdf";
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.click();
  };
  return (
    <div className="bg-[#f5df4e] overflow-hidden">
      <Container>
        <div className="md:mt-[80px] mt-[10px]">
          <div
            id="home"
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="900"
              className="flex flex-col py-4 items-start justify-center md:w-1/2 h-full space-y-6"
            >
              <h3 className="md:text-4xl text-xl">HI, I'M</h3>
              <h1 className="md:text-6xl text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                AYATULLAH BEHESTI
              </h1>
              <Typewriter
                options={{
                  strings: [
                    "MERN STACK WEB DEVELOPER",
                    "Specialized in React.js",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p className="md:text-xl text-black">
                Self-taught programmer with proficiency in MERN stack, solid
                understanding of JavaScript, HTML and CSS. Committed to
                continuous learning and staying updated with industry trends.
                Skilled in creating responsive user interfaces and building
                RESTful APIs.
              </p>
              <div className="flex gap-1">
                <button className="md:text-xl transition-all delay-100 hover:text-black hover:border-black hover:bg-white border-spacing-1 flex flex-col justify-center items-center px-6 py-3 bg-black text-white">
                  <Link onClick={handleDownload} download>
                    Download My Resume
                  </Link>
                </button>
                <button className="px-6 hidden py-2 md:flex gap-2 justify-center items-center rounded-none underline hover:no-underline">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                  >
                    Contact Me
                  </Link>
                  <BsArrowDownCircle
                    className="text-black animate-bounce"
                    size="20"
                  />
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="900"
              className="bg-gradient-to-r from-gray-700 via-gray-900 to-black mb-8 md:mb-0 w-[300px] md:w-[400px] md:h-[400px] h-[300px] rounded-full p-4 mt-10 md:mt-0"
            >
              <img className="w-full h-full rounded-full" src={img1} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavHero;
