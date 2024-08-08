"use client";
import { FC, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type Props = {
  scrollY: number;
  data: {
    id: number;
    name: string;
    url: string;
  }[];
};

const NavbarMobile: FC<Props> = ({ scrollY, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <div className="lg:hidden container flex items-center justify-between w-full gap-3">
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
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          className={cn(
            "border rounded-full border-primary-400 text-primary-400 p-2",
            scrollY <= 0 && "border-basic-100 text-basic-100"
          )}
        >
          <MenuIcon className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent className="">
          <div
            className={cn(
              "mt-10 flex flex-col items-center gap-8 text-primary-400  justify-center"
            )}
          >
            {data.map((item) => (
              <Link
                href={item.url}
                className={cn(
                  "text-primary-400 hover:font-medium transition-all duration-300",
                  pathname + hash === item.url &&
                    "font-medium border-b-2 border-primary-400"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/">
              <Button
                className={cn(
                  "border rounded-full bg-transparent hover:bg-primary-500 hover:border-primary-500 hover:font-medium border-primary-400 text-primary-400 hover:text-basic-100"
                )}
              >
                Need Assitance?
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
