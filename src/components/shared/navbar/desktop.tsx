import { FC } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  scrollY: number;
};

const NavbarDesktop: FC<Props> = ({ scrollY }) => {
  return (
    <div className="container hidden lg:flex items-center justify-between">
      <Link href="/" className="block">
        <Image
          src={`/assets/icons/${
            scrollY > 0 ? "ic-company-logo-scroll" : "ic-company-logo"
          }.svg`}
          alt="Zamrood Logo"
          width={135}
          height={50}
          loading="eager"
          sizes="30vw"
        />
      </Link>
      <div
        className={cn(
          "flex items-center gap-8 text-basic-100",
          scrollY > 0 && "text-primary-400"
        )}
      >
        <Link
          href="/#home-hero"
          className={cn(
            "border-b border-basic-100 py-4 font-medium",
            scrollY > 0 && "border-primary-400"
          )}
        >
          Homepage
        </Link>
        <Link
          href="/#tailored-experiences"
          className="py-4 hover:border-b hover:border-basic-100"
        >
          Customize Your Trip
        </Link>
        <Link href="/destination" className="py-4">
          Destination
        </Link>
        <Link href="/#article" className="py-4">
          Article
        </Link>
        <Link href="/t">
          <Button
            className={cn(
              "border border-basic-100 rounded-full bg-transparent hover:bg-primary-500 hover:border-primary-500 hover:font-medium",
              scrollY > 0 &&
                "border-primary-400 text-primary-400 hover:text-basic-100"
            )}
          >
            Need Assitance?
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarDesktop;
