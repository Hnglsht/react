import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export function Works() {
  return (
    <div className="mb-24">
      <div className="flex justify-center mb-4">
        <div className="mt-24">
          <Tag name="About me" />
        </div>
      </div>
      <div className="text-center mb-6">
        Some of the noteworthy projects I have built:
      </div>
      <div>
        <WorkCard />
        <WorkCard isReverse={true} />
        <WorkCard />
      </div>
    </div>
  );
}
function WorkCard({isReverse = false}) {
  return (
    <div className={`mb-4 rounded-lg  shadow md:flex ${isReverse ? "md:flex-row-reverse" : "" }`}>
      <div className="bg-[#F3F4F6] p-4 md:flex-1">
        <Image
          src="/Picture1.png"
          width={200}
          height={200}
          className="rounded-lg shadow-sm p-8 w-full"
        />
      </div>
      <div className="p-8 md:flex-1">
        <div className="mb-6 font-bold text-xl">Fiskill</div>

        <div className="mb-6 text-[#4B5563] text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Tag name="React" />
          <Tag name="Next.js" />
          <Tag name="Typescript" />
          <Tag name="Nest.js" />
          <Tag name="PostgreSQL" />
          <Tag name="Tailwindcss" />
          <Tag name="Figma" />
          <Tag name="Cypress" />
          <Tag name="Storybook" />
          <Tag name="Git" />
          <Tag name="Work" />
        </div>

        <div className="m-[6px]">
          <FaExternalLinkAlt className="w-6 h-6" />
        </div>

      </div>
    </div>
  );
}
export function Tag({ name }) {
  return (
    <div className="bg-[#E5E7EB] rounded-xl  text-[14px] text-[#4B5563] pr-5 pl-5 pt-1 pb-1 ">
      {name}
    </div>
  );
}
