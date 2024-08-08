"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TProductGallery } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useState } from "react";

type Props = {
  images: TProductGallery[];
};

const DestinationImageCarousel: FC<Props> = ({ images }) => {
  const [idxImg, setIdxImg] = useState(0);

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
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
};

export default DestinationImageCarousel;
