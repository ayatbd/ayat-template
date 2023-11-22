import { useEffect, useState } from "react";
import Tittle from "./../../components/Tittle";
import "./portfolio.css";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import Container from "../../components/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LazyLoad from "react-lazy-load";

const Portfolios = () => {
  const [project, setProject] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  const filterProjectByCategory = (category) => {
    setActiveCategory(category);
  };

  const categories = ["All", "Full Stack", "React", "ES6", "Design"];

  const filteredProject = activeCategory
    ? project.filter((p) =>
        activeCategory === "All" ? true : p.type === activeCategory
      )
    : project;

  return (
    <div id="portfolio" className="py-14 bg-gray-50">
      <Tittle tittle="Portfolios" tittleDesc="Check out some of my projects" />
      <Container>
        <div className="mx-auto p-4 overflow-hidden">
          <Tabs
            onSelect={(index) => filterProjectByCategory(categories[index])}
          >
            <TabList className="flex bg-white gap-y-1 flex-col md:flex-row justify-center space-x-1 py-2">
              {categories.map((category, index) => (
                <Tab
                  className="cursor-pointer text-gray-600 py-1 md:py-4 px-6 block hover:text-blue-500 focus:outline-none md:border-b-2 font-medium border-white"
                  key={index}
                >
                  {category}
                </Tab>
              ))}
            </TabList>
            {categories.map((category, index) => (
              <TabPanel key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="div-shadow box-shadow shadow-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-7"
                >
                  {filteredProject.map((p) => (
                    <div key={p._id} className="hover-class">
                      <div
                        className="h-60 border-b-none border-round-2 overflow-hidden
                border transition-transform duration-[3000ms] ease-linear transform
                translate-y-0 border-spacing-1 border-red-500 rounded-lg"
                      >
                        <LazyLoad height={762}>
                          <img
                            className="translate-y-0 object-cover object-center delay-3000"
                            src={p.img}
                            alt={p.project_name}
                          />
                        </LazyLoad>
                      </div>
                      <div className="relative overflow-hidden">
                        <div className="text-center h-[130px] border-round p-5 border border-red-500 rounded-lg">
                          <h3 className="md:text-2xl text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">
                            {p.project_name}
                          </h3>
                          <p className="md:text-xl">{p.project_description}</p>
                        </div>
                        <div className="bg-gray-800 rounded-2xl w-full custom-cls-1 h-full absolute translate-y-52 overflow-hidden border-round inset-0">
                          <p className="text-white m-3">
                            <span className="font-bold">Technologies: </span>
                            {p.technologies}
                          </p>
                          <div className="flex justify-center items-center gap-4">
                            <button className="text-red-500 flex justify-center items-center gap-2 border border-red-500 px-5 py-1 rounded-lg hover:bg-gray-950">
                              <AiFillGithub size="20" />
                              <a href={p.github_link}>github</a>
                            </button>
                            <button className="text-red-500 flex justify-center items-center gap-2 border border-red-500 px-5 py-1 rounded-lg hover:bg-gray-950">
                              <AiFillEye size="20" />
                              <a href={p.live_link}>live site</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Portfolios;
