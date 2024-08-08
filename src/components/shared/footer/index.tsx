import { InstagramIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 bg-primary-500 text-basic-100">
      <div className="container flex flex-col lg:flex-row items-center gap-3 justify-between">
        <span className="text-sm sm:text-base text-center lg:text-start">
          &copy; 2023 Zamrood by PT Teknologi Pandu Wisata
        </span>
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image
              src={"/assets/icons/ic-facebook.svg"}
              alt="fb ic"
              width={24}
              height={24}
              className="object-cover object-center"
            />
          </Link>
          <Link href={"/"}>
            <InstagramIcon className="w-7 h-7" />
          </Link>
          <Link href={"/"}>
            <MailIcon className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
