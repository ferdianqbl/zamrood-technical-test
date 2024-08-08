export type TProductGallery = {
  itinerary_id: string;
  gallery_id: number;
  gallery_alt_text: string;
  gallery_path: string;
  src: string;
  title: string;
};

export type TProductVariant = {
  itinerary_id: string;
  itinerary_variant_id: number;
  itinerary_variant_pub_price: string;
  itinerary_variant_disc_price: string;
  unit_name: string;
  related_unit: string;
};

export type TProduct = {
  itinerary_id: string;
  itinerary_name: string;
  itinerary_day: number;
  itinerary_slug: string;
  partner_name: string;
  partner_alias: string;
  itinerary_location: string;
  itinerary_short_description: string;
  itinerary_long_description: string;
  morph_class: string;
  related_galleries: TProductGallery[];
  related_variant: TProductVariant;
};

export type TArticle = {
  id: string;
  slug: string;
  title: string;
  featured_image: string;
  featured_image_caption: string;
  read_time: string;
};
