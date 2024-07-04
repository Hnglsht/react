import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { LuSun } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container  mx-auto">
      <div className="justify-between bg-[#ffffff] flex  text-center items-center  ">
        <div className="text-[#111827] text-3xl ">SS</div>
        <div className="flex">
          <div className="text-[#4B5563] text-[16px]  gap-6 mr-[48px] hidden md:flex">
            <span>About</span>
            <span>Work</span>
            <span>Testimonials</span>
            <span>Contact</span>
          </div>
          <div className=" gap-4 items-center hidden md:flex">
            <button>
              <LuSun className="h-6 w-6" />
            </button>
            <button className="bg-[#111827] rounded-xl	text-white text-center items-center w-[136px]">
              Download CV
            </button>
          </div>
        </div>
        <button>
          <IoMdMenu className="h-6 w-6  md:hidden" />
        </button>
      </div>
      <div className=" mt-[120px] flex relative md: flex-col">
        <div className="absolute w-[240px] h-[280px] right-0">
          <Image src="/image.png" fill />
        </div>
        <div>
          <div>
            <div className="text-[#111827] text-[60px]">Hi, I’m Sagar 👋</div>
            <div className="text-[#4B5563] text-[16px]">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) <br /> exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even <br /> though I have been creating web
              applications for over 7 years, I still love it as if it was
              something new.
            </div>
          </div>
          <div className="text-[#4B5563] text-[16px] mt-[48px]">
            <div className="flex items-center gap-[8px]">
              <HiOutlineLocationMarker />
              Ahmedabad, India
            </div>
            <div className="flex items-center gap-[8px]">
              <img src="./icons/icon-dot-emerald-500.png"></img>
              Available for new projects
            </div>
          </div>
          <div className="mt-[48px] flex gap-[8px] ">
            <LuGithub className="h-6 w-6" />
            <FiTwitter className="h-6 w-6" />
            <FaFigma className="h-6 w-6" />
          </div>
        </div>
      </div>
    </main>
  );
}
