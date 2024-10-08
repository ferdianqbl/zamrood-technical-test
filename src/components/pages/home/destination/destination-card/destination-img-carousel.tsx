"use client";
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
      setIdxImg((prevIdx) => (prevIdx >= 6 ? 0 : prevIdx + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-video lg:aspect-auto lg:w-1/2">
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
