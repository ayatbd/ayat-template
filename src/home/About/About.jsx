import Container from "../../components/Container";
import Tittle from "../../components/Tittle";
import CountUp from "react-countup";
const About = () => {
  return (
    <Container>
      <div className="py-28" id="about">
        <Tittle tittle="About Me" tittleDesc="Know Me More"></Tittle>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col gap-y-20 md:flex-row items-center justify-center"
        >
          <div className="flex md:flex-row flex-col md:w-7/12 gap-6">
            <div className="space-y-4 text-start">
              <p className="text-xl">
                Name: <span className="font-bold">Ayatullah Behesti</span>
              </p>
              <p className="text-xl">
                Age: <span className="font-bold">24</span>
              </p>
              <p className="text-xl">
                Phone: <span className="font-bold">+880 1619792124</span>
              </p>
              <p className="text-xl">
                Address: <span className="font-bold">Cumilla, Bangladesh</span>
              </p>
              <p className="text-xl">
                Language: <span className="font-bold">Bangla, English</span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-xl">
                Nationality: <span className="font-bold">Bangladeshi</span>
              </p>
              <p className="text-xl">
                Email: <span className="font-bold">albehestione@gmail.com</span>
              </p>
              <p className="text-xl">
                Studing:
                <span className="font-bold">
                  Cumilla Victoria College, <br /> BA final year
                </span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="py-8 px-14 flex flex-col items-center justify-center border rounded-lg border-black">
              <p>
                <span className="text-6xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">
                  +
                </span>
                <CountUp
                  className="text-6xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text"
                  start={0}
                  end={27}
                  duration={5}
                />
              </p>
              <h2 className="text-3xl font-bold">-Completed Projects</h2>
            </div>
            <div className="py-8 px-14 flex flex-col items-center justify-center border rounded-lg border-black">
              <p>
                <span className="text-6xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">
                  +
                </span>
                <CountUp
                  className="text-6xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text"
                  start={0}
                  end={150}
                  duration={5}
                />
              </p>

              <h2 className="text-3xl font-bold">-Problem Solved</h2>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
