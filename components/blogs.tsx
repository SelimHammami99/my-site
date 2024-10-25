"use client";

import BlogsCarousel from "./carousel";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { blogs } from "@/lib/blogs";

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

      <BlogsCarousel carouselItems={blogs} />
    </div>
  );
};
export default Blogs;
