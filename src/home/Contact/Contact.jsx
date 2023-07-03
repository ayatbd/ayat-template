import Tittle from "../../components/Tittle";
import Container from "../../components/Container";
import { PiPhoneFill } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import Email from "./Email";

const Contact = () => {
  return (
    <Container>
      <div className="my-28">
        <Tittle tittle="Contact Me" tittleDesc="Let's get in touch"></Tittle>
        <div className="flex justify-start gap-36">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="w-2/6"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-start gap-6">
                <PiPhoneFill
                  className="bg-white rounded-full p-3 border border-spacing-1 text-red-500 border-red-500"
                  size="45"
                />
                <div>
                  <p className="text-2xl font-bold">Phone</p>
                  <p className="text-xl font-bold">+8801619792124</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-6">
                <HiOutlineMail
                  className="bg-white rounded-full p-3 border border-spacing-1 text-red-500 border-red-500"
                  size="45"
                />
                <div>
                  <p className="text-2xl font-bold">Email</p>
                  <p className="text-xl font-bold">albehestione@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-6">
                <MdLocationOn
                  className="bg-white rounded-full p-3 border border-spacing-1 text-red-500 border-red-500"
                  size="45"
                />
                <div>
                  <p className="text-2xl font-bold">Location</p>
                  <p className="text-xl font-bold">Cumilla, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 mt-9">
              <a href="https://www.linkedin.com/in/ayatullah-behesti-b63b601a3/">
                <AiFillLinkedin
                  className="bg-red-500 hover:bg-red-700 cursor-pointer rounded-full p-3 border border-spacing-1 text-white border-red-500"
                  size="45"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100023765114556">
                <FaFacebook
                  className="bg-red-500 hover:bg-red-700 cursor-pointer rounded-full p-3 border border-spacing-1 text-white border-red-500"
                  size="45"
                />
              </a>
              <a href="https://github.com/ayatbd">
                <FaGithub
                  className="bg-red-500 hover:bg-red-700 cursor-pointer rounded-full p-3 border border-spacing-1 text-white border-red-500"
                  size="45"
                />
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <Email></Email>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
