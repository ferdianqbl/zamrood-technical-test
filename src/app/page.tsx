import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <main>
      <section className="hero-image w-full h-screen" id="home_hero">
        <div className="container flex items-end justify-start h-screen">
          <div className="flex flex-col justify-end h-full pb-24 w-[50vw]">
            <h1 className="text-8xl text-secondary-400 font-signature">
              Premium Travel
            </h1>
            <h2 className="text-5xl font-bold font-unbounded text-basic-100">
              Beyond Expectation
            </h2>
            <p className="text-basic-100 text-xl">
              Experience the finest that Indonesia has to offer with our curated
              selection of premium trips, ensuring comfort every step of the way
            </p>

            <Link href="/#destination">
              <Button className="border border-basic-100 rounded-full bg-transparent hover:bg-secondary-400 hover:border-secondary-400 hover:font-medium text-xl mt-10">
                Take me there
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
