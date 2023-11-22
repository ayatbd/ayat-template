import NavHero from "./NavHero";
import Navigation from "./Navigation";
const Nav = () => {
  return (
    <div className="bg-[#F5DF4E] md:h-[100vh]">
      <div>
        <Navigation></Navigation>
        <NavHero></NavHero>
      </div>
    </div>
  );
};

export default Nav;
