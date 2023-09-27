import NavHero from "./NavHero";
import Navigation from "./Navigation";
const Nav = () => {
  return (
    <div className="bg-[#f5df4e] md:h-[100vh]">
      <div>
        <Navigation></Navigation>
        <NavHero></NavHero>
      </div>
    </div>
  );
};

export default Nav;
