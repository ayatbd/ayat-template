import Container from "../../components/Container";
import Tittle from "../../components/Tittle";
import CountUp from "react-countup";
const About = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <Container>
        <div className="py-28" id="about">
          <Tittle tittle="About Me" tittleDesc="Know Me More"></Tittle>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-y-20 md:flex-row items-center justify-center"
          >
            <div className="flex md:flex-row flex-col md:w-7/12 gap-6">
              <div className="space-y-4 text-start">
                <p className="text-xl">
                  <span className="font-bold">Name:</span> Ayatullah Behesti
                </p>
                <p className="text-xl">
                  <span className="font-bold">Age:</span> 24
                </p>
                <p className="text-xl">
                  <span className="font-bold">Phone:</span> +880 1619792124
                </p>
                <p className="text-xl">
                  <span className="font-bold">Address:</span> Cumilla,
                  Bangladesh
                </p>
                <p className="text-xl">
                  <span className="font-bold">Language:</span> Bangla, English
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xl">
                  <span className="font-bold">Nationality:</span> Bangladeshi
                </p>
                <p className="text-xl">
                  <span className="font-bold">Email:</span>{" "}
                  albehestione@gmail.com
                </p>
                <p className="text-xl">
                  <span className="font-bold">Studing:</span>
                  Cumilla Victoria College, <br /> BA final year
                </p>
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <div className="py-8 px-14 flex flex-col items-center justify-center border rounded-lg border-black">
                <p>
                  <span className="text-6xl font-bold text-pink-600">+</span>
                  <CountUp
                    className="text-6xl font-bold text-pink-600"
                    start={0}
                    end={27}
                    duration={5}
                  />
                </p>
                <h2 className="text-3xl font-bold">-Completed Projects</h2>
              </div>
              <div className="py-8 px-14 flex flex-col items-center justify-center border rounded-lg border-black">
                <p>
                  <span className="text-6xl font-bold text-pink-600">+</span>
                  <CountUp
                    className="text-6xl font-bold text-pink-600"
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
    </div>
  );
};

export default About;
