import { useEffect, useState } from "react";
import Tittle from "./../../components/Tittle";
import "./portfolio.css";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import Container from "../../components/Container";
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

  const filteredProject = activeCategory
    ? project.filter((p) => p.type === activeCategory)
    : project;

  return (
    <div id="portfolio" className="py-14">
      <Tittle
        tittle="Portfolios"
        tittleDesc="Check out some of my projects"
      ></Tittle>
      <Container>
        <div className="mx-auto p-4 overflow-hidden">
          <div className="flex gap-y-1 flex-col md:flex-row justify-center space-x-1 mb-4">
            <button
              className={`py-3 px-4 rounded ${
                activeCategory === null
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => filterProjectByCategory(null)}
            >
              All <span>({project.length})</span>
            </button>
            <button
              className={`py-3 px-4 rounded ${
                activeCategory === "Full Stack"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => filterProjectByCategory("Full Stack")}
            >
              Full Stack (MERN)
            </button>
            <button
              className={`py-3 px-4 rounded ${
                activeCategory === "React"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => filterProjectByCategory("React")}
            >
              Frontend (React)
            </button>
            <button
              className={`py-3 px-4 rounded ${
                activeCategory === "ES6"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => filterProjectByCategory("ES6")}
            >
              ES6 & DOM
            </button>
            <button
              className={`py-3 px-4 rounded ${
                activeCategory === "Design"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => filterProjectByCategory("Design")}
            >
              Basic Design
            </button>
          </div>
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
        </div>
      </Container>
    </div>
  );
};

export default Portfolios;
