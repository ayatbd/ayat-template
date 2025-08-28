import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import Container from "./../../components/Container";
import "../../index.css";
import { useRef } from "react";
import { useEffect } from "react";

const Navigation = () => {
  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky_header");
    } else {
      headerRef.current.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);
  return (
    <div className="md:fixed top-0 left-0 right-0" ref={headerRef}>
      <Container>
        <div>
          <div className="navbar w-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="font-bold"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="font-bold"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={600}
                      className="font-bold"
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={700}
                      className="font-bold"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={800}
                      className="font-bold"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                data-aos="fade-right"
                className="text-2xl text-gray-800 font-sans font-bold"
              >
                AB
              </Link>
            </div>
            <div data-aos="fade-down" className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal">
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="font-bold text-xl"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="font-bold text-xl"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={600}
                    className="font-bold text-xl"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                    className="font-bold text-xl"
                  >
                    Portfolios
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    className="font-bold text-xl"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div data-aos="fade-left" className="navbar-end">
              <p className=" font-bold md:text-[20px] text-gray-800 flex items-center justify-center gap-2">
                <MdEmail color="#14C196" /> albehestione@gmail.com
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
