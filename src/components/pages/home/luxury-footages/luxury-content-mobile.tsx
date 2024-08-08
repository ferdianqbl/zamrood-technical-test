"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { TProduct } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const LuxuryContentMobile = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Products"],
  });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-3">
        <Skeleton className="w-full h-48" />
        <Skeleton className="w-full h-48" />
        <Skeleton className="w-full h-48" />
      </div>
    );
  }

  if (isError) {
    return <div className="text-center">Tidak ada Data.</div>;
  }
  return (
    <div className="">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {(data as TProduct[]).map((item, index) => (
            <CarouselItem key={index} className="w-full max-h-[400px] h-full">
              <Image
                key={item.itinerary_id}
                src={item.related_galleries[3].src}
                alt={item.related_galleries[3].gallery_alt_text}
                className={cn("object-cover object-center aspect-video")}
                width={1000}
                height={1000}
                loading="lazy"
                decoding="async"
              />
            </CarouselItem>
          ))}
          {(data as TProduct[]).map((item, index) => (
            <CarouselItem key={index} className="w-full max-h-[400px] h-full">
              <Image
                key={item.itinerary_id}
                src={item.related_galleries[8].src}
                alt={item.related_galleries[8].gallery_alt_text}
                className={cn("object-cover object-center aspect-video")}
                width={1000}
                height={1000}
                loading="lazy"
                decoding="async"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === current - 1 ? "bg-primary-400" : "bg-basic-100/60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default LuxuryContentMobile;
