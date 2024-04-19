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
    <div id="contact" className="py-28">
      <Container>
        <div className="">
          <Tittle tittle="Contact Me" tittleDesc="Let's get in touch"></Tittle>
          <div className="flex flex-col-reverse md:flex-row md:justify-start gap-36">
            <div data-aos="fade-right" className="md:w-2/6">
              <div className="space-y-5">
                <div className="flex items-center justify-start gap-6">
                  <PiPhoneFill
                    className="bg-white rounded-full p-2 border border-spacing-1 text-[#14C196] border-[#14C196]"
                    size="24"
                  />
                  <div>
                    <p className="text-2xl font-bold">Phone</p>
                    <p className="text-xl font-bold">+8801619792124</p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-6">
                  <HiOutlineMail
                    className="bg-white rounded-full p-2 border border-spacing-1 text-[#14C196] border-[#14C196]"
                    size="24"
                  />
                  <div>
                    <p className="text-2xl font-bold">Email</p>
                    <p className="text-xl font-bold">albehestione@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-6">
                  <MdLocationOn
                    className="bg-white rounded-full p-2 border border-spacing-1 text-[#14C196] border-[#14C196]"
                    size="24"
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
                    className="bg-[#14C196] hover:bg-pink-600 cursor-pointer rounded-full p-2 border border-spacing-1 text-white"
                    size="24"
                  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100023765114556">
                  <FaFacebook
                    className="bg-[#14C196] hover:bg-pink-600 cursor-pointer rounded-full p-2 border border-spacing-1 text-white"
                    size="24"
                  />
                </a>
                <a href="https://github.com/ayatbd">
                  <FaGithub
                    className="bg-[#14C196] hover:bg-pink-600 cursor-pointer rounded-full p-2 border border-spacing-1 text-white"
                    size="24"
                  />
                </a>
              </div>
            </div>
            <div data-aos="fade-left" className="overflow-hidden md:w-1/2">
              <Email></Email>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
