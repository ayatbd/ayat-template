import Container from "../../components/Container";
import NavHero from "./NavHero";
import Navigation from "./Navigation";

const Nav = () => {
  return (
    <div className="bg-[#f5df4e] h-[95vh]">
      <div>
        <Navigation></Navigation>
        <NavHero></NavHero>
      </div>
    </div>
  );
};

export default Nav;
