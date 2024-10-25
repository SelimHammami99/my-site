"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function BlogsCarousel({
  carouselItems,
}: {
  carouselItems: any[];
}) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      carousel.classList.add("active");
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      carousel.classList.remove("active");
    };

    const onMouseUp = () => {
      isDown = false;
      carousel.classList.remove("active");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener("mousedown", onMouseDown);
    carousel.addEventListener("mouseleave", onMouseLeave);
    carousel.addEventListener("mouseup", onMouseUp);
    carousel.addEventListener("mousemove", onMouseMove);

    return () => {
      carousel.removeEventListener("mousedown", onMouseDown);
      carousel.removeEventListener("mouseleave", onMouseLeave);
      carousel.removeEventListener("mouseup", onMouseUp);
      carousel.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const handleNavigation = (link: string) => router.push(`/blogs/${link}`);

  return (
    <Carousel className="w-full mt-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8 dark:bg-none text-gray-700 dark:text-gray-300 ">
            <ChevronLeft className="h-4 w-4" />
          </CarouselPrevious>
          <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8 dark:bg-none text-gray-700 dark:text-gray-300 ">
            <ChevronRight className="h-4 w-4" />
          </CarouselNext>
        </div>
      </div>
      <CarouselContent
        ref={carouselRef}
        className="cursor-grab active:cursor-grabbing mt-5"
      >
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <Card
              className={`bg-gradient-to-br overflow-hidden from-red-500 via-teal-500 to-green-500 border-0 rounded-lg shadow-md`}
            >
              <CardContent className="p-6 aspect-[3/4] flex flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <div className="text-lg font-semibold text-white">
                    {item.title}
                  </div>
                  <Button
                    onClick={() => handleNavigation(item.link)}
                    variant={"link"}
                    className="text-xs font-light pr-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-xs font-light text-white mt-auto">
                  {item.description}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
