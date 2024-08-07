"use client";
import { FC, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  scrollY: number;
};

const NavbarMobile: FC<Props> = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
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
            <Link
              href="/#home-hero"
              className={cn("border-b border-primary-400 pb-2 font-medium")}
              onClick={() => setIsOpen(false)}
            >
              Homepage
            </Link>
            <Link
              href="/#tailored-experiences"
              className=" hover:border-b hover:border-basic-100"
            >
              Customize Your Trip
            </Link>
            <Link href="/destination" className="">
              Destination
            </Link>
            <Link href="/#article" className="">
              Article
            </Link>
            <Link href="/t">
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
