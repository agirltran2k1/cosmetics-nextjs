import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  return (
    <div className="w-full h-20 lg:h-28 border-b lg:border-none border-slate-400 bg-white lg:bg-[#F2E0D4]">
      <div className="h-full max-w-screen-2xl flex items-center justify-between px-4 mx-auto">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Home"
            width={120}
            height={100}
            className="max-w-xs"
          />
        </Link>

        <ul className="hidden lg:inline-flex items-center gap-8 text-sm text-slate-700">
          <li className="navbarLi">Makeup</li>
          <li className="navbarLi">Primer</li>
          <li className="navbarLi">Concealer</li>
          <li className="navbarLi">Foudation</li>
          <li className="navbarLi">Contact Us</li>
        </ul>

        <div className="inline-flex gap-8 items-center">
          <BsSearch className="text-xl hover:text-[#91514E] cursor-pointer text-[#424242]" />
          <div className="relative">
            <FaOpencart className="text-2xl hover:text-[#91514E] cursor-pointer text-[#424242]" />
            <span className="w-5 h-5 bg-[#91514E] text-white rounded-full absolute left-4 bottom-3 text-xs flex items-center justify-center">
              0
            </span>
          </div>
          <FaUser className="text-xl hover:text-[#91514E] cursor-pointer text-[#424242]" />
        </div>

        <div className="inline-flex lg:hidden">
          <AiOutlineMenu className="text-3xl text-[#424242]" />
        </div>
        
      </div>
    </div>
  );
}
