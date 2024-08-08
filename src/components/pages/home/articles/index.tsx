"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { TArticle } from "@/lib/types";
import { getAllArticles } from "@/services/articles";
import { useQuery } from "@tanstack/react-query";
import ArticleCard from "./article-card";

const getArticles = async () => {
  const res: {
    data: TArticle[];
  } = await getAllArticles();
  return res.data;
};

const Articles = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Articles"],
    queryFn: getArticles,
  });

  if (isLoading) {
    return (
      <div className="container">
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-48" />
          <Skeleton className="w-full h-48" />
          <Skeleton className="w-full h-48" />
        </div>
      </div>
    );
  }
  if (isError) {
    return <div className="text-center">Tidak ada Data.</div>;
  }
  return (
    <div className="container">
      <h3 className="text-3xl text-center lg:text-start text-primary-400 font-bold font-unbounded">
        Articles
      </h3>
      <p className="text-xl text-center lg:text-start text-primary-400">
        Our curated writings, offering something for every reader.
      </p>

      <div className="lg:grid lg:grid-cols-2 gap-3 mt-12 hidden">
        <ArticleCard {...data?.[0]} />

        <div className="grid lg:grid-cols-2 gap-3">
          {data?.slice(1).map((item) => (
            <ArticleCard {...item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-12 lg:hidden">
        {data?.map((item) => (
          <ArticleCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
