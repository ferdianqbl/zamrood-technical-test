import { TProductGallery } from "@/lib/types";
import Image from "next/image";
import React, { FC } from "react";
import DestinationImageCarousel from "./destination-img-carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  index: number;
  id: string;
  day: number;
  images: TProductGallery[];
  title: string;
  partner: string;
  description: string;
  price: string;
};

const DestinationCard: FC<Props> = ({
  index,
  id,
  day,
  images,
  title,
  partner,
  description,
  price,
}) => {
  return (
    <div
      className={cn(
        "flex gap-8 flex-col lg:flex-row",
        index % 2 !== 0 ? "lg:flex-row-reverse" : ""
      )}
    >
      <DestinationImageCarousel images={images} />
      <div className="flex flex-col justify-between gap-4 w-full h-full lg:w-1/2">
        <div className="flex flex-col gap-2 w-full">
          <span className="text-primary-500">
            {day} DAYS {day - 1} NIGHTS
          </span>
          <span className="font-unbounded text-2xl font-bold text-primary-400">
            {title}
          </span>
          <span className="text-lg font-semibold text-primary-500">
            Organized by {partner}
          </span>
          <p className="text-primary-500">{description}</p>
        </div>
        <div className="flex items-end justify-between gap-3 w-full">
          <div className="flex flex-col">
            <span className="text-primary-500">Start From</span>
            <span className="font-unbounded text-lg md:text-2xl font-medium text-primary-400">
              IDR {Number(price).toLocaleString()}
            </span>
          </div>
          <Link
            href={"/"}
            className="border rounded-full px-4 py-2 border-primary-500 text-primary-500 transition-colors hover:text-basic-100 hover:bg-primary-500"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
