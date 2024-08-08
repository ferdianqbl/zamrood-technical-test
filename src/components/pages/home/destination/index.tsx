"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { TProduct } from "@/lib/types";
import { getAllProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { ChevronRightCircleIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import DestinationCard from "./destination-card";

const getProducts = async () => {
  const res: {
    data: TProduct[];
  } = await getAllProducts();
  return res.data;
};

const Destination = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Products"],
    queryFn: getProducts,
  });

  const loadingComponents = () => (
    <div className="container mt-8">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-48" />
        <Skeleton className="w-full h-48" />
        <Skeleton className="w-full h-48" />
      </div>
    </div>
  );

  const mainComponents = () => (
    <>
      <div className="flex flex-col gap-10 md:gap-40 mt-8">
        {data?.map((item, index) => (
          <DestinationCard
            index={index}
            key={item.itinerary_id}
            id={item.itinerary_id}
            day={item.itinerary_day}
            images={item.related_galleries}
            description={item.itinerary_short_description}
            partner={item.partner_name}
            title={item.itinerary_name}
            price={item.related_variant.itinerary_variant_pub_price}
          />
        ))}
      </div>
      <Link
        className="text-primary-500 font-semibold flex items-center gap-2 transition-colors hover:text-secondary-400 mx-auto lg:ms-auto w-fit mt-20"
        href={"/"}
      >
        <ChevronRightCircleIcon className="w-8 h-8" />
        EXPLORE MORE
      </Link>
    </>
  );

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <h3 className="text-3xl text-center lg:text-start text-primary-500 font-bold font-unbounded">
          Destinations
        </h3>
        <Link
          className="text-primary-500 font-semibold flex items-center gap-2 transition-colors hover:text-secondary-400"
          href={"/"}
        >
          <ChevronRightCircleIcon className="w-8 h-8" />
          EXPLORE MORE
        </Link>
      </div>
      {isLoading ? (
        loadingComponents()
      ) : isError ? (
        <div className="text-center">Tidak ada Data.</div>
      ) : (
        mainComponents()
      )}
    </div>
  );
};

export default Destination;
