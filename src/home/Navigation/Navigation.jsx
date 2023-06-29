import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

const Navigation = () => {
  return (
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
              <Link>Item 1</Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link className="text-2xl font-bold">AYAT</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="font-bold text-xl">Home</Link>
          </li>
          <li>
            <Link className="font-bold text-xl">About</Link>
          </li>
          <li>
            <Link className="font-bold text-xl">Skills</Link>
          </li>
          <li>
            <Link className="font-bold text-xl">Portfolio</Link>
          </li>
          <li>
            <Link className="font-bold text-xl">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <p className="font-bold text-xl flex items-center justify-center gap-2">
          <FaPhone /> +880 161979-2124
        </p>
      </div>
    </div>
  );
};

export default Navigation;