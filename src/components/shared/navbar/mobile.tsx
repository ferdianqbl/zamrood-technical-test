"use client";
import { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  scrollY: number;
};

const NavbarMobile: FC<Props> = ({ scrollY }) => {
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
      <Sheet>
        <SheetTrigger
          className={cn(
            "border rounded-full border-primary-400 text-primary-400 p-2",
            scrollY <= 0 && "border-basic-100 text-basic-100"
          )}
        >
          <MenuIcon className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
