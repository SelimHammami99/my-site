import IntroCard from "@/components/intro-card";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between ">
      <div className="flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]">
        <IntroCard />
        <WorkExperience />
      </div>
    </main>
  );
}
