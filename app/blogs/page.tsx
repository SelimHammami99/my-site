"use client";

import BlogAnimatedCard from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { blogs } from "@/lib/blogs";

const Page = () => {
  const router = useRouter();
  return (
    <main className="flex min-w-screen flex-col items-center justify-between ">
      <div className="flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]">
        <div className="flex flex-row justify-between w-full">
          <Button
            variant={"ghost"}
            className="font-semibold"
            onClick={() => router.push("/")}
          >
            <ChevronLeft className="w-3 h-3" />
            Go back
          </Button>
        </div>
        <div className="grid grid-cols-2 mt-4 gap-2">
          {blogs.map((blog, index) => (
            <BlogAnimatedCard
              title={blog.title}
              description={blog.description}
              icon={blog.icon}
              date={blog.date}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default Page;
