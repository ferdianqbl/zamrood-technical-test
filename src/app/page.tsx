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
    </main>
  );
};

export default Page;
