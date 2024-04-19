import ProgressBar from "@ramonak/react-progress-bar";
import Container from "../../components/Container";
import Tittle from "../../components/Tittle";
import "../../index.css";

const Skills = () => {
  return (
    <div id="skills" className="py-28">
      <Container>
        <Tittle tittle="My Skills" tittleDesc="Why Choose Me"></Tittle>
        <div>
          <div className="flex md:flex-row flex-col justify-start gap-10 md:gap-44">
            <div data-aos="fade-right" className="md:flex-1 space-y-4">
              <h3 className="text-center text-2xl font-bold">Fronend:</h3>
              <div className="space-y-5">
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">HTML 5</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      animateOnRender
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={80}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">CSS 3</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={75}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">JavaScript (ES6)</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={70}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">React.js</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={85}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">Next.js</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={50}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">Redux</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={50}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">Firebase</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={90}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">Tailwind CSS</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={85}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">Bootstrap</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={70}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="md:flex-1 space-y-4">
              <h3 className="text-center text-2xl font-bold">Backend:</h3>
              <div className="space-y-5">
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">Node.js</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={65}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">Express.js</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={75}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold">MongoDB</p>
                  </div>
                  <div className="progress-line flex items-center justify-between">
                    <ProgressBar
                      bgColor="#14C196"
                      height="15px"
                      className="w-full"
                      completed={70}
                    />
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
