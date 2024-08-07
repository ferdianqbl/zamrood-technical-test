import Destination from "@/components/pages/home/destination";
import Discover from "@/components/pages/home/discover";
import Experience from "@/components/pages/home/experience";
import Hero from "@/components/pages/home/hero";
import Image from "next/image";

const Page = () => {
  return (
    <main>
      <section className="hero-image w-full min-h-screen" id="home_hero">
        <Hero />
      </section>
      <section className="pt-20" id="home_experience">
        <Experience />
      </section>
      <section className="pt-20" id="home_discover">
        <Discover />
      </section>
      <div className="pt-20">
        <Image
          src="/assets/icons/ic-separator.svg"
          width={1000}
          height={1000}
          alt="ornament"
          className="mx-auto"
        />
      </div>
      <div className="pt-20">
        <Destination />
      </div>
    </main>
  );
};

export default Page;
