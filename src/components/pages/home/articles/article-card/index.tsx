import { TArticle } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ArticleCard: FC<Partial<TArticle>> = ({
  featured_image,
  featured_image_caption,
  id,
  read_time,
  slug,
  title,
}) => {
  return (
    <Link
      href={"/"}
      className="w-full flex flex-col relative overflow-hidden article-card"
    >
      <div className="relative w-full h-full aspect-video overflow-hidden">
        <Image
          src={featured_image ?? ""}
          className="object-cover object-center grayscale hover:grayscale-0 transition-all ease-in-out duration-300 absolute w-full h-full"
          alt={featured_image_caption ?? ""}
          loading="lazy"
          fill
          decoding="async"
        />
      </div>
      <div className="absolute bg-primary-400 -bottom-96 w-full p-2 article-title transition-all duration-300">
        <h4 className="m-0 text-basic-100 text-sm md:text-base font-bold line-clamp-2">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export default ArticleCard;
