import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Discover = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-0 justify-center">
      <Image
        src="/assets/icons/ic-discover-tailored-experiences.svg"
        width={300}
        height={300}
        alt="discover-ic"
        className=""
      />
      <div className="flex flex-col w-1/2">
        <h3 className="text-3xl text-center lg:text-start text-primary-500 font-bold font-unbounded">
          Discover Tailored Experiences
        </h3>
        <p className="mt-4 text-center lg:text-start">
          Create your own journey, personalized to suit your preferences and
          interests, ensuring a once-in-a-lifetime adventure awaits.
        </p>

        <Link href="/#destination" className="mt-8">
          <Button className="border border-primary-500 rounded-full bg-primary-500 hover:bg-secondary-400 hover:border-secondary-400 text-basic-100 hover:font-medium text-base w-full lg:w-fit">
            Customize Your Trip
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Discover;
