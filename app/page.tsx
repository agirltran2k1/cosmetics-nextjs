
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <div className="w-full flex-col items-center justify-between">
      <header>
        <NavBar />   
      </header>

      <main className="relative">

        <Slide />

        <div>
          <p className="text-main">Beauty</p>
          <p className="font-playfairdisplay">Top Product</p>
        </div>
      
    </main>
    </div>
  );
}
