import Container from "../../components/Container";
import Tittle from "../../components/Tittle";
import "../../index.css";

const Skills = () => {
  return (
    <div id="skills" className="bg-[#f8f9fa] py-28">
      <Container>
        <Tittle
          tittle="My Skills"
          tittleDesc="Take a Look on My Skills"
        ></Tittle>
        <div>
          <div className="flex md:flex-row flex-col justify-start gap-10 md:gap-44">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="md:w-1/2"
            >
              <h3 className="text-center text-xl font-bold">Fronend:</h3>
              <div className="space-y-5">
                <div>
                  <div>
                    <p className="font-bold">HTML 5</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">80%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="80"
                      max="100"
                    ></progress>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-bold">CSS 3</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">75%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="75"
                      max="100"
                    ></progress>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-bold">JavaScript (ES6)</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">70%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="70"
                      max="100"
                    ></progress>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-bold">React.js</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">85%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="85"
                      max="100"
                    ></progress>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-bold">Firebase</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">85%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="75"
                      max="100"
                    ></progress>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-bold">Tailwind CSS</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">80%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="80"
                      max="100"
                    ></progress>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-bold">Bootstrap</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">70%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="70"
                      max="100"
                    ></progress>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="md:w-1/2"
            >
              <h3 className="text-center text-xl font-bold">Backend:</h3>
              <div className="space-y-5">
                <div>
                  <div>
                    <p className="font-bold">Node.js</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">60%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="60"
                      max="100"
                    ></progress>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-bold">Express.js</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">75%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="80"
                      max="100"
                    ></progress>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-bold">MongoDB</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">70%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="70"
                      max="100"
                    ></progress>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-bold">Mongoose</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">60%</p>
                    <progress
                      className="progress progress-info w-[90%] h-2"
                      value="60"
                      max="100"
                    ></progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
