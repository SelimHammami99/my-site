/* eslint-disable @next/next/no-img-element */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  {
    name: "Next.js",
    icon: "nextjs.svg",
  },
  {
    name: "Vite",
    icon: "vite.svg",
  },
  {
    name: "TypeScript",
    icon: "ts.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind.svg",
  },
  {
    name: "Shadcn/ui",
    icon: "shadcn-ui.svg",
  },

  {
    name: "Framer Motion",
    icon: "framer-motion.svg",
  },
  {
    name: "PostgreSQL",
    icon: "postgres.svg",
  },
  {
    name: "Supabase",
    icon: "supabase.svg",
  },
  {
    name: "Git",
    icon: "git.svg",
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col flex-wrap mt-16 w-full">
      <h1 className="text-md font-semibold">Skills</h1>
      <div className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"></div>
      <div className="flex flex-row mt-5 gap-4">
        {skills.map((skill) => (
          <TooltipProvider key={skill.name}>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={"h-6 w-6"}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white border">
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};
export default Skills;
