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
    <main className="container max-w-[1400px] mx-auto ">
      <div className="justify-between bg-[#ffffff] flex  text-center items-center mb-[100px] pt-4 pb-4 pr-20 pl-20 ">
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
        <button className="md:hidden">
          <IoMdMenu className="h-6 w-6" />
        </button>
      </div>
      <div className=" mt-[120px] flex flex-col-reverse md:flex-row  gap-[48px] mb-[100px] justify-between pr-20 pl-20">
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
              <div className="w-[14px] h-[14px] flex items-center justify-center">
                <img src="./icons/icon-dot-emerald-500.png"></img>
              </div>
              Available for new projects
            </div>
          </div>
          <div className="mt-[48px] flex gap-[8px] ">
            <LuGithub className="h-6 w-6" />
            <FiTwitter className="h-6 w-6" />
            <FaFigma className="h-6 w-6" />
          </div>
        </div>
        <div>
        <div className="flex justify-center">
          <Image src="/pic.png" width={280} height={320} />
        </div>
        </div>
       
      </div>
      <div className="bg-[#F9FAFB]">
        <div className="flex justify-center">
          <div className="bg-[#E5E7EB] rounded-xl flex  justify-center w-[105px] h-[28px] mt-[96px] text-[14px] text-[#4B5563] items-center">
            About me
          </div>
        </div>
        <div className="mt-[48px] flex flex-col md:flex-row pr-20 pl-20 pb-24">
          <div className="flex-1 flex justify-center md:block">
            <div>
              <Image src="/pic2.png" width={400} height={480} />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[30px] text-[#111827]">
              Curious about me? Here you have it:
            </div>
            <div className="grid gap-y-4 mt-6 text-[#4B5563] text-[16px]">
              <div>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </div>
              <div>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </div>
              <div>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </div>
              <div>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </div>
              <div>Finally, some quick bits about me.</div>
              <div className="list-disc flex">
                <div className="flex-1">
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </div>
                <div className="flex-1">
                  <li>Avid learner</li>
                  <li>Aspiring indie hacker</li>
                </div>
              </div>
              <div>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pr-20 pl-20 pt-24 pb-24">
        <div className="flex justify-center">
          <div className="bg-[#E5E7EB] rounded-xl flex  justify-center w-[105px] h-[28px] mt-[96px] text-[14px] text-[#4B5563] items-center">
            Skills
          </div>
        </div>
        <div className="text-[#4B5563] text-[20px] flex justify-center mt-4">
          The skills, tools and technologies I am really good at:
        </div>
        <div className="grid grid-cols-3 text-[#4B5563] text-[18px] mt-12 text-center justify-center items-center gap-x-21 gap-y-12 md:grid md:grid-cols-8">
          <div className="w-[88px] h-[100px]">
            <Image
              src="/icons/icon-javscript.png"
              width={64}
              height={64}
              className="mx-auto mb-2 h-16"
            ></Image>
            <div>Javascript</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-typescript.png"
              width={64}
              height={64}
              className="mx-auto mb-2 h-16"
            ></Image>
            <div>Typescript</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-react.png"
              width={64}
              height={64}
              className="mx-auto mb-2 h-16"
            ></Image>
            <div>React</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-nextjs.png"
              width={64}
              height={64}
              className="mx-auto mb-2 h-16"
            ></Image>
            <div>NextJs</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-nodejs.png"
              width={64}
              height={64}
              className="mx-auto mb-2 h-16"
            ></Image>
            <div>NodeJs</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-express.png"
              width={64}
              height={64}
              className="mx-auto mb-2 h-16"
            ></Image>
            <div>Express</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-nest.png"
              width={64}
              height={64}
              className="mx-auto mb-2 h-16"
            ></Image>
            <div>Nest</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-socket.png"
              width={64}
              height={64}
              className="mx-auto mb-2 h-16"
            ></Image>
            <div>Socket</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-postgresql.png"
              width={64}
              height={64}
              className="mx-auto mb-2 h-16"
            ></Image>
            <div>PostgreSQL</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-mongodb.png"
              width={64}
              height={64}
              className="mx-auto mb-2 w-[30px] h-[64px]"
            ></Image>
            <div>MongoDB</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-sass.png"
              width={64}
              height={64}
              className="mx-auto mb-2"
            ></Image>
            <div>Sass</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-tailwindcss.png"
              width={64}
              height={64}
              className="mx-auto mb-2 h-16 w-[104px]"
            ></Image>
            <div>Tailwindcss</div>
          </div>
          <div className="w-[88px] h-[100px]">
            <Image
              src="/icons/icon-figma.png"
              width={64}
              height={64}
              className="mx-auto mb-2 w-[43px] h-16"
            ></Image>
            <div>Figma</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <img src="/icons/icon-cypress.png" className="mx-auto mb-2"></img>
            <div>Cypress</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-storybook.png"
              width={64}
              height={64}
              className="mx-auto mb-2"
            ></Image>
            <div>Storybook</div>
          </div>
          <div className="w-[88px] h-[100px]  ">
            <Image
              src="/icons/icon-git.png"
              width={64}
              height={64}
              className="mx-auto mb-2"
            ></Image>
            <div>Git</div>
          </div>
        </div>
      </div>
      <div className="pt-24 pb-24 pr-20 pl-20 bg-[#F9FAFB]">
        <div className="flex justify-center">
          <div className="bg-[#E5E7EB] rounded-xl flex  justify-center w-[105px] h-[28px] mt-[96px] text-[14px] text-[#4B5563] items-center">
            Experience
          </div>
        </div>
        <div className="text-[#4B5563] text-xl flex justify-center mt-4">
          Here is a quick summary of my most recent experiences:
          </div>
      </div>
    </main>
  );
}
