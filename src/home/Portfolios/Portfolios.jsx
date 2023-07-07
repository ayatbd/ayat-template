import { useEffect, useState } from "react";
import Tittle from "./../../components/Tittle";
import "./portfolio.css";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import Container from "../../components/Container";

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
    ? project.filter((project) => project.category === activeCategory)
    : project;

  return (
    <div id="portfolio" className="py-14">
      <Tittle
        tittle="Portfolios"
        tittleDesc="Check out some of my projects"
      ></Tittle>
      <Container>
        <div className="mx-auto p-4 overflow-hidden">
          <div className="flex justify-center space-x-2 mb-4">
            <button
              className={`py-2 px-4 rounded ${
                activeCategory === null
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => filterProjectByCategory(null)}
            >
              All <span>({project.length})</span>
            </button>
            <button
              className={`py-2 px-4 rounded ${
                activeCategory === "Math Toy"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => filterProjectByCategory("Math Toy")}
            >
              Full Stack (MERN)
            </button>
            <button
              className={`py-2 px-4 rounded ${
                activeCategory === "Engineering Toy"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => filterProjectByCategory("Engineering Toy")}
            >
              Frontend (React)
            </button>
            <button
              className={`py-2 px-4 rounded ${
                activeCategory === "Science Toy"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => filterProjectByCategory("Science Toy")}
            >
              Dom
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-7"
          >
            {filteredProject.map((p) => (
              <div key={p._id} className="hover-class">
                <div className="h-60 border-b-none border-round-2 overflow-hidden border transition-transform duration-[3000ms] ease-linear transform translate-y-0 border-spacing-1 border-red-500 rounded-lg">
                  <img className="translate-y-0" src={p.img} />
                </div>
                <div className="button-class">
                  <div className="text-center h-[130px] div-shadow box-shadow shadow-custom border-round p-5 border border-red-500 rounded-lg">
                    <h3 className="md:text-2xl text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">
                      {p.project_name}
                    </h3>
                    <p className="md:text-xl">{p.project_description}</p>
                  </div>
                  <div className="bg-gray-800 w-full h-full absolute bottom-0 overflow-hidden border-round">
                    <p className="text-white m-3">
                      <span className="font-bold">Technologies: </span>
                      {p.technologies}
                    </p>
                    <div className="flex justify-center items-center gap-4">
                      <button className="text-red-500 flex justify-center items-center gap-2 border border-red-500 px-5 py-1 rounded-lg hover:bg-gray-950">
                        <AiFillGithub size="20" />
                        github
                      </button>
                      <button className="text-red-500 flex justify-center items-center gap-2 border border-red-500 px-5 py-1 rounded-lg hover:bg-gray-950">
                        <AiFillEye size="20" />
                        live site
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
