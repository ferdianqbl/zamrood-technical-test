import Articles from "@/components/pages/home/articles";
import Destination from "@/components/pages/home/destination";
import Discover from "@/components/pages/home/discover";
import Experience from "@/components/pages/home/experience";
import Hero from "@/components/pages/home/hero";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="container mt-20">
        <div
          className="flex justify-between py-8 px-4 relative"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.36) 100%), url('/assets/images/img-background.png')`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src={"/assets/icons/ic-company-logo.svg"}
            alt="ic-company"
            width={135}
            height={50}
            loading="eager"
            sizes="30vw"
          />
          <div className="flex flex-col text-basic-100">
            <span>
              Want to see other destinations? Check us out at our website
            </span>
            <Link
              href={"https://pandooin.com"}
              target="_blank"
              className="flex items-center gap-1 text-end w-full justify-end font-medium text-xl underline"
            >
              pandooin.com <ArrowUpRightIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-20">
        <Articles />
      </div>
    </main>
  );
};

export default Page;
