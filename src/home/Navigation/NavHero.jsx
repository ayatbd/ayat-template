/* eslint-disable react/no-unescaped-entities */
import img1 from "../../assets/images/img1.jpeg";
import { BsArrowDownCircle } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import "../../index.css";
const NavHero = () => {
  const handleDownload = () => {
    const url = "/public/Document.docx.pdf";
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "resume.pdf";
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.click();
  };
  return (
    <div className="flex justify-between items-center">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="900"
        className="flex flex-col py-4 items-start justify-center w-1/2 h-full
        space-y-6"
      >
        <h3 className="text-4xl">HI, I'M</h3>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          AYATULLAH BEHESTI
        </h1>
        <Typewriter
          options={{
            strings: ["MERN STACK WEB DEVELOPER", "Specialized in React.js"],
            autoStart: true,
            loop: true,
          }}
        />
        <p className="text-xl text-black">
          Self-taught programmer with proficiency in MERN stack, solid
          understanding of JavaScript, HTML and CSS. Committed to continuous
          learning and staying updated with industry trends. Skilled in creating
          responsive user interfaces and building RESTful APIs.
        </p>
        <div className="flex gap-1">
          <button className="text-xl transition-all delay-100 hover:text-black hover:border-black hover:bg-white border-spacing-1 flex flex-col justify-center items-center px-6 py-3 bg-black text-white">
            <a onClick={handleDownload} download>
              Download My Resume
            </a>
          </button>
          <button className="px-6 py-2 flex gap-2 justify-center items-center rounded-none underline hover:no-underline">
            Contact Me <BsArrowDownCircle className="text-black" size="20" />
          </button>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="900"
        className="bg-white rounded-full p-4"
      >
        <img className="w-full rounded-full" src={img1} />
      </div>
    </div>
  );
};

export default NavHero;
