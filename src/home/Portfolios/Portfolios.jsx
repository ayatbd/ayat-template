import { useEffect, useState } from "react";
import Tittle from "./../../components/Tittle";
import "../../index.css";

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

  const handleDetails = (id) => {
    console.log(id);
  };
  return (
    <div>
      <Tittle
        tittle="Portfolios"
        tittleDesc="Check out some of my projects"
      ></Tittle>
      <div className="container mx-auto p-4">
        <div className="flex justify-center space-x-2 mb-4">
          <button
            className={`py-2 px-4 rouM
            nded ${
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
            <div key={p._id} className="">
              <div className="bg-img h-60 border border-spacing-1 border-red-500 rounded-lg"></div>
              <div className="text-center p-5 relative border-t border-white/10">
                <h3>{p.project_name}</h3>
                <p>{p.project_description}</p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
