"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { TProduct } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const LuxuryContentDesktop = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Products"],
  });

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
    <div className="hidden lg:flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-8">
        {(data as TProduct[]).map((item) => (
          <div className="w-full max-h-[400px] h-full">
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
          </div>
        ))}
      </div>
      <div className="mx-auto">
        <Image
          src="/assets/icons/ic-separator-white.svg"
          alt="separator"
          width={1000}
          height={1000}
        />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {(data as TProduct[]).map((item) => (
          <div className="w-full max-h-[400px] h-full">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryContentDesktop;
