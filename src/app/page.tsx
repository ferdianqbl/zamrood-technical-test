import Discover from "@/components/pages/home/discover";
import Experience from "@/components/pages/home/experience";
import Hero from "@/components/pages/home/hero";

const Page = () => {
  return (
    <main>
      <section className="hero-image w-full min-h-screen" id="home_hero">
        <Hero />
      </section>
      <section className="py-20" id="home_experience">
        <Experience />
      </section>
      <section className="pt-10 pb-20" id="home_discover">
        <Discover />
      </section>
    </main>
  );
};

export default Page;
