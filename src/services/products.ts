import callAPI from "@/lib/api";

export const getAllProducts = async () => {
  const res = await callAPI({
    method: "GET",
    url: "/zamrood/itinerary?highlight=true",
  });

  return res;
};
