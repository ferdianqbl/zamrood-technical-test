import callAPI from "@/lib/api";

export const getAllArticles = async () => {
  const res = await callAPI({
    method: "GET",
    url: "/zamrood/article",
  });

  return res;
};
