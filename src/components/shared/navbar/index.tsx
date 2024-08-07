import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container fixed top-0 right-0 left-0 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="block">
          <Image
            src="/assets/icons/ic-company-logo.svg"
            alt="Zamrood Logo"
            width={135}
            height={50}
            loading="eager"
            sizes="30vw"
          />
        </Link>
        <div className="flex items-center gap-8 text-basic-100">
          <Link
            href="/#home-hero"
            className="border-b border-basic-100 py-4 font-medium"
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
            <Button className="border border-basic-100 rounded-full bg-transparent hover:bg-primary-500 hover:border-primary-500 hover:font-medium">
              Need Assitance?
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
