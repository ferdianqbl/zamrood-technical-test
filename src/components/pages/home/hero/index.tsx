import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container flex items-center justify-center lg:items-end lg:justify-start min-h-screen">
      <div className="flex flex-col justify-center items-center lg:items-stretch lg:justify-end h-full lg:pb-24 w-full lg:w-[50vw]">
        <h1 className="text-5xl sm:text-8xl text-secondary-400 font-signature text-center lg:text-start">
          Premium Travel
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold font-unbounded text-basic-100 text-center lg:text-start">
          Beyond Expectation
        </h2>
        <p className="text-center lg:text-start text-basic-100 sm:text-xl mt-3 sm:mt-5">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>

        <Link href="/#destination">
          <Button className="border border-basic-100 rounded-full bg-transparent hover:bg-secondary-400 hover:border-secondary-400 hover:font-medium text-base sm:text-xl mt-10">
            Take me there
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
