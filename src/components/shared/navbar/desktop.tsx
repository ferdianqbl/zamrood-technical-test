import { FC } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  scrollY: number;
  data: {
    id: number;
    name: string;
    url: string;
  }[];
};

const NavbarDesktop: FC<Props> = ({ scrollY, data }) => {
  const pathname = usePathname();
  const hash = window && window.location.hash ? window.location.hash : null;
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
        {data.map((item) => (
          <Link
            href={item.url}
            className={cn(
              "py-4 text-basic-100 hover:font-medium transition-all duration-300",
              scrollY > 0 && "text-primary-400",
              pathname + hash === item.url &&
                "font-medium border-b-2 border-basic-100",
              pathname + hash === item.url &&
                scrollY > 0 &&
                "font-medium border-b-2 border-primary-400"
            )}
          >
            {item.name}
          </Link>
        ))}
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
