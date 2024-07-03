import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { LuSun } from "react-icons/lu"; 
export default function Home() {
  return (
    <main className="container auto  mx-auto">
      <div className="justify-between bg-[#ffffff] flex  text-center items-center  ">
        <div className="text-[#111827] text-3xl ">SS</div>
        <div className="flex">
          <div className="text-[#4B5563] text-[16px] flex gap-6 mr-[48px]">
            <span>About</span>
            <span>Work</span>
            <span>Testimonials</span>
            <span>Contact</span>
          </div>
          <div className="flex gap-4 items-center">
            <button>
            <LuSun className="h-6 w-6"/>
            </button>
            <button className="bg-[#111827] rounded-xl	text-white text-center items-center w-[136px]">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-[120px] gap-48px">
        <div>
          <div className="text-[#111827] text-[60px]">Hi, I’m Sagar 👋</div>
          <div className="text-[#4B5563] text-[16px]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) <br /> exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even <br /> though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </div>
          <div className="">

          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
