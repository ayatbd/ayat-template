import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import Container from "./../../components/Container";
import "../../index.css";

const Navigation = () => {
  return (
    <div className="bg-[#f5df4e] fixed top-0 w-full z-50">
      <Container>
        <div className="">
          <div className="navbar">
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
              <Link className="text-2xl font-bold">AYAT</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
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
            <div className="navbar-end">
              <p className=" font-bold md:text-xl flex items-center justify-center gap-2">
                <MdEmail /> albehestione@gmail.com
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
