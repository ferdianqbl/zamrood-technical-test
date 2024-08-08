"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TProductGallery } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

type Props = {
  images: TProductGallery[];
};

const DestinationImageCarousel: FC<Props> = ({ images }) => {
  const [idxImg, setIdxImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdxImg((prevIdx) => prevIdx + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative lg:w-1/2 max-h-[256px] lg:max-h-[327px] aspect-video h-full">
      {images?.map((item, index) => (
        <div className="absolute h-full w-full">
          <Image
            width={1000}
            height={1000}
            src={item.src}
            alt={item.gallery_alt_text + "Destination Image"}
            className={cn(
              "h-full w-full object-cover object-center transition-opacity ease-in-out duration-300 opacity-0",
              idxImg === index && "opacity-100"
            )}
            sizes="100vw"
            loading="eager"
            // decoding="async"
          />
        </div>
      ))}
    </div>
  );
};

export default DestinationImageCarousel;
