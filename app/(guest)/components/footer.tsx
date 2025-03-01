import {  Mail } from "lucide-react";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,

  BsYoutube,
} from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Contact Icons */}
          <div className="flex space-x-6 mb-4">
            <Link href="https://facebook.com" aria-label="Facebook">
              <BsYoutube className="w-6 h-6 text-red-600 hover:text-gray-800" />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <BsFacebook className="w-6 h-6 text-blue-600 hover:text-gray-800" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <BsTelegram className="w-6 h-6 text-sky-500 hover:text-gray-800" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <BsInstagram className="w-6 h-6 text-pink-600 hover:text-gray-800" />
            </Link>
            <Link href="mailto:contact@example.com" aria-label="Email">
              <Mail className="w-6 h-6 text-red-400 hover:text-gray-800" />
            </Link>
            {/* <Button size={"sm"} aria-label="Email">
              Message
            </Button> */}
          </div>

          {/* Copyright Notice */}
          <div className="text-sm text-gray-500">
            © {currentYear} Your Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
