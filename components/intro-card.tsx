/* eslint-disable @next/next/no-img-element */
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import PersonalDialog from "./personal-info-dialog";

const IntroCard = () => {
  return (
    <div className="flex justify-between items-center w-full border rounded-md p-5">
      <div className="flex flex-col justify-center items-start w-full ">
        <div className="flex justify-center items-center gap-2">
          <PersonalDialog />
          <div>
            <p className="text-md font-semibold leading-7">
              Ahmed Selim Hammami
            </p>
            <p className="text-xs font-light">
              Full Stack Developer & MS Student @ Univeristy of Coimbra
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/SelimHammami99" target="_blank">
          <GitHubLogoIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-selim-hammami/"
          target="_blank"
        >
          <LinkedInLogoIcon className="w-5 h-5" />
        </a>
        <a href="mailto:aselim.hammami@gmail.com" target="_blank">
          <EnvelopeClosedIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default IntroCard;
