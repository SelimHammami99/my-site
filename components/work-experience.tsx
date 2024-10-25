const WorkExperience = () => {
  return (
    <div className="flex flex-col flex-wrap mt-16 w-full">
      <h1 className="text-md font-semibold">Work Experience</h1>
      <div className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"></div>
      <div>
        <ul className="space-y-7 relative mt-5">
          <li className="flex items-start relative">
            <div className="absolute left-2 top-5 h-[calc(100%+0.75rem)] w-px bg-gradient-to-t from-white/20 to-green-600 z-0"></div>
            <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-green-600 bg-background z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <div className="absolute w-full h-full rounded-full border-2 border-green-500 animate-ping"></div>
            </div>
            <div className="flex-grow w-full ml-8">
              <div className="flex justify-between item-center mb-1">
                <h3 className="text-sm font-semibold text-white">
                  Full Stack Developer
                </h3>
                <span className="text-xs text-gray-400">
                  Sept 2022 - Oct 2023
                </span>
              </div>
              <p className="text-xs text-white/80 font-medium">
                Move JS - Tunis, Tunisia
              </p>
              <p className="text-xs text-left leading-normal text-white/60">
                I developed the frontend of a content management system,
                focusing on creating a user-friendly and responsive interface,
                while also contributing to backend tasks. I optimized the
                application’s performance and maintainability, improving the
                overall user experience.
              </p>
            </div>
          </li>
          <li className="flex items-start relative">
            <div className="absolute left-2 top-5 h-[calc(100%+0.75rem)] w-px bg-gradient-to-t bg-white/20 z-0"></div>
            <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white/30 bg-background z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
            </div>
            <div className="flex-grow w-full ml-8">
              <div className="flex justify-between item-center mb-1">
                <h3 className="text-sm font-semibold text-white">
                  Intern - Frontend Developer
                </h3>
                <span className="text-xs text-gray-400">
                  Febr 2022 - Jul 2022
                </span>
              </div>
              <p className="text-xs text-white/80 font-medium">
                Move JS - Tunis, Tunisia
              </p>
              <p className="text-xs text-left leading-normal text-white/60">
                Improved React development skills, explored D3.js and Nivo for
                graph creation, used Jest for testing, and mastered Git and
                Scrum for effective project contributions.
              </p>
            </div>
          </li>
          <li className="flex items-start relative">
            <div className="absolute left-2 top-5 h-[calc(100%+0.75rem)] w-px bg-gradient-to-t bg-white/20 z-0"></div>
            <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white/30 bg-background z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
            </div>
            <div className="flex-grow w-full ml-8">
              <div className="flex justify-between item-center mb-1">
                <h3 className="text-sm font-semibold text-white">Intern</h3>
                <span className="text-xs text-gray-400">
                  Aug 2021 - Sep 2021
                </span>
              </div>
              <p className="text-xs text-white/80 font-medium">
                ST2i - Tunis, Tunisia
              </p>
              <p className="text-xs text-left leading-normal text-white/60">
                This role enriched me with data visualization, teamwork, and
                responsibility. I contributed effectively, crafting impactful
                visualizations, optimizing data analysis, and enhancing
                communication for successful project outcomes.
              </p>
            </div>
          </li>
          <li className="flex items-start relative">
            <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white/30 bg-background z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
            </div>
            <div className="flex-grow w-full ml-8">
              <div className="flex justify-between item-center mb-1">
                <h3 className="text-sm font-semibold text-white">Intern</h3>
                <span className="text-xs text-gray-400">
                  June 2020 - Aug 2020
                </span>
              </div>
              <p className="text-xs text-white/80 font-medium">
                3S: Standard Sharing Software - Tunis, Tunisia
              </p>
              <p className="text-xs text-left leading-normal text-white/60">
                Gained valuable experience in database management and SQL
                skills.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
