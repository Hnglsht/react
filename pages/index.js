import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { LuSun } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    name: "About",
    link: "/About",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Testimonials",
    link: "/work",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const skills = [
  {
    name: "Javascript",
    Imagepath: "/icons/icon-javscript.png",
  },
  {
    name: "Typescript",
    Imagepath: "/icons/icon-typescript.png",
  },
  {
    name: "React",
    Imagepath: "/icons/icon-react.png",
  },
  {
    name: "Nextjs",
    Imagepath: "/icons/icon-nextjs.png",
  },
  {
    name: "NodeJs",
    Imagepath: "/icons/icon-nodejs.png",
  },
  {
    name: "Express",
    Imagepath: "/icons/icon-express.png",
  },
  {
    name: "Nest",
    Imagepath: "/icons/icon-nest.png",
  },
  {
    name: "Socket",
    Imagepath: "/icons/icon-socket.png",
  },
  {
    name: "PostgreSql",
    Imagepath: "/icons/icon-postgresql.png",
  },
  {
    name: "MongoDB",
    Imagepath: "/icons/icon-mongodb.png",
  },
  {
    name: "Sass",
    Imagepath: "/icons/icon-sass.png",
  },
  {
    name: "Tailwindcss",
    Imagepath: "/icons/icon-tailwindcss.png",
  },
  {
    name: "Figma",
    Imagepath: "/icons/icon-figma.png",
  },
  {
    name: "Cypress",
    Imagepath: "/icons/icon-cypress.png",
  },
  {
    name: "Storybook",
    Imagepath: "/icons/icon-storybook.png",
  },
  {
    name: "Git",
    Imagepath: "/icons/icon-git.png",
  },
];
const experiences = [
  {
    Logopath: "/icons/upwork.png",
    experienceTitle: "Sr. Frontend Developer",
    details: 
      <ul className="list-disc list-inside">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
        <li>Sed quis justo ac magna.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    ,
    date: "Nov 2021 - Present",
  },
  {
    Logopath: "/icons/upwork.png",
    experienceTitle: "Team Lead",
    details: 
      <ul className="list-disc list-inside">
        <li>Sed quis justo ac magna.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Sed quis justo ac magna.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    ,
    date: "Jul 2017 - Oct 2021",
  },
  {
    Logopath: "/icons/upwork.png",
    experienceTitle: "Full Stack Developer",
    details: 
      <ul className="list-disc list-inside">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    ,
    date: "Dec 2015 - May 2017",
  },
];
export default function Home() {
  return (
    <main className="container max-w-[1400px] mx-auto ">
      <div className="justify-between bg-[#ffffff] flex  text-center items-center mb-[100px] pt-4 pb-4 pr-20 pl-20 ">
        <div className="text-[#111827] text-3xl ">SS</div>
        <div className="flex">
          {/* <div className="text-[#4B5563] text-[16px]  gap-6 mr-[48px] hidden md:flex">
            <span>About</span>
            <span>Work</span>
            <span>Testimonials</span>
            <span>Contact</span>
          </div> */}
          <div className=" gap-6 mr-12 hidden md:flex ">
            {navigation.map((nav) => (
              <Link
                key={nav.link}
                href={nav.link}
                className="text-[#4B5563] text-[16px]"
              >
                {nav.name}{" "}
              </Link>
            ))}
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

        <div className="grid grid-cols-3 text-[#4B5563] text-[18px] mt-12  gap-x-21 gap-y-12 md:grid md:grid-cols-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-22 h-25 flex flex-col text-center justify-center items-center"
            >
              <Image
                src={skill.Imagepath}
                width={88}
                height={100}
                className="w-16 h-16"
              />
              {skill.name}
            </div>
          ))}
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
        <div className="mt-12 pr-48 pl-48">
          {experiences.map((experiences) => (
            <div className="flex-row md:flex p-8 gap-12 mb-12 bg-white m-auto">
              
              <div className="flex-none">
                
                <Image
                  src={experiences.Logopath}
                  width={102}
                  height={28}
                  className="mr-[150px]"
                />
              </div>
              <div className="flex-auto">
                
                <div className="text-[#111827] text-xl font-semibold">{experiences.experienceTitle}</div>
                <div className="mt-4 text-[#4B5563] text-[16px]">{experiences.details}</div>
              </div>
              <div className="flex-none  text-[16px] text-[#374151]">{experiences.date}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
      <div className="flex justify-center">
          <div className="bg-[#E5E7EB] rounded-xl flex  justify-center w-[105px] h-[28px] mt-[96px] text-[14px] text-[#4B5563] items-center">
            Work
          </div>
      </div>
      <div className="text-[#4B5563] text-xl flex justify-center mt-4">
      Some of the noteworthy projects I have built:
        </div>
      </div>
    </main>
  );
}
