"use client";

import BlogsCarousel from "./carousel";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const carouselItems = [
  {
    title: "Next.js Middleware",
    description: "A Modern Way to Control Requests and Responses",
    link: "/next-js-middleware",
    bgColor: "from-pink-500 to-blue-500",
    darkBgColor: "dark:from-pink-600 dark:to-blue-600",
  },
  //   {
  //     title: "For Teams",
  //     description: "A superassistant for every member of your team",
  //     bgColor: "from-blue-500 to-green-500",
  //     darkBgColor: "dark:from-blue-600 dark:to-green-600",
  //   },
  //   {
  //     title: "For Enterprises",
  //     description: "Empower your entire workforce with enterprise-grade AI",
  //     bgColor: "from-yellow-500 to-blue-500",
  //     darkBgColor: "dark:from-yellow-600 dark:to-blue-600",
  //   },
  //   {
  //     title: "SearchGPT Prototype",
  //     description: "SearchGPT is a prototype of new AI search features",
  //     bgColor: "from-purple-500 via-pink-500 to-red-500",
  //     darkBgColor: "dark:from-purple-600 dark:via-pink-600 dark:to-red-600",
  //   },
  //   {
  //     title: "Creative Writing",
  //     description: "Unleash your storytelling potential",
  //     bgColor: "from-red-500 via-orange-500 to-yellow-500",
  //     darkBgColor: "dark:from-red-600 dark:via-orange-600 dark:to-yellow-600",
  //   },
  //   {
  //     title: "Code Assistant",
  //     description: "Your AI pair programmer",
  //     bgColor: "from-green-500 via-teal-500 to-blue-500",
  //     darkBgColor: "dark:from-green-600 dark:via-teal-600 dark:to-blue-600",
  //   },
  //   {
  //     title: "Data Analysis",
  //     description: "Uncover insights from your data",
  //     bgColor: "from-blue-500 via-indigo-500 to-purple-500",
  //     darkBgColor: "dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600",
  //   },
  //   {
  //     title: "Language Learning",
  //     description: "Master new languages with AI",
  //     bgColor: "from-yellow-500 via-green-500 to-teal-500",
  //     darkBgColor: "dark:from-yellow-600 dark:via-green-600 dark:to-teal-600",
  //   },
];

const Blogs = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-wrap mt-16 w-full">
      <div className="flex flex-row justify-between">
        <h1 className="text-md font-semibold">Latest Blogs</h1>
        <Button
          onClick={() => router.push("/blogs")}
          className="py-1 px-2 font-light text-xs"
          variant={"ghost"}
        >
          See all
        </Button>
      </div>
      <div className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"></div>

      <BlogsCarousel carouselItems={carouselItems} />
    </div>
  );
};
export default Blogs;
