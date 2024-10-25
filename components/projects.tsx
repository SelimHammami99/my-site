import AnimatedCard from "./project-card";

const projects = [
  {
    title: "Feed",
    description: "easily integrate Feed and start collecting feedback today.",
    image: "/feed.JPG",
    link: "https://saas-dashboard-blond-nine.vercel.app/",
    badge: "Live",
  },
  {
    title: "Resumify.now",
    description:
      "showcase your skills, experiences, and achievements. generate your resume with just a few clicks!",
    image: "/resumify.JPG",
    link: "https://resumify-chi.vercel.app/",
    badge: "Production",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col flex-wrap mt-16 w-full">
      <h1 className="text-md font-semibold">Projects</h1>
      <div className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[0.75rem]">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedCard
              title={project.title}
              description={project.description}
              image={project.image}
              badge={project.badge}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Projects;
