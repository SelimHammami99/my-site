/* eslint-disable @next/next/no-img-element */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const languages = [
  {
    name: "English",
    level: "Fluent (C1)",
    icon: "english.svg",
  },
  {
    name: "French",
    level: "Fluent (C1)",
    icon: "french.svg",
  },
  {
    name: "Portuguese",
    level: "Beginner (A1)",
    icon: "portuguese.svg",
  },
  {
    name: "Arabic",
    level: "Native",
    icon: "arabic.svg",
  },
];

const Languages = () => {
  return (
    <div className="flex flex-col flex-wrap mt-16 w-full">
      <h1 className="text-xl font-semibold">Languages</h1>
      <div className="flex flex-row mt-5 gap-4">
        {languages.map((language) => (
          <TooltipProvider key={language.name}>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  key={language.name}
                  variant={"outline"}
                  className="py-2 px-3 rounded-3xl font-light text-sm"
                >
                  <img
                    src={language.icon}
                    alt={language.name}
                    className="w-5 h-5 rounded-full mr-2 "
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                  {language.name}
                </Badge>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white border">
                <p>{language.level}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};
export default Languages;
