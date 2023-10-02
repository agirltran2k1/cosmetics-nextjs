"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoMdArrowDroprightCircle } from 'react-icons/io'

export default function Slide() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    sildesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <AiOutlineLeft />,
    nextArrow: <AiOutlineRight />
  };

  return (
    <div className="w-full h-full">
      <Slider
        
        {...settings}
      >
        <div className="relative">
          <Image
            src="/assets/images/slider-01-1920x795.jpg"
            width={200}
            height={200}
            alt=""
            layout="responsive"
            quality={100}
          />
           <div className="absolute top-14 left-10 lg:top-40 lg:left-40">
            <div className="font-playfairdisplay relative lg:text-5xl text-3xl text-[#424242]">Beauty Youth</div>
            <div className="hidden relative mt-3 w-60 lg:w-1/3 text-lg lg:flex text-[#424242]">
                <div className="text-[#424242]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem a normal distribution of letters.</div>
                </div>
            <div className="w-36 lg:w-44 mt-4 cursor-pointer flex items-center justify-center gap-2 text-sm lg:p-3 p-2 px-5 rounded-full bg-[#91514E] text-white hover:bg-slate-950 hover:duration-1000 hover:animate-pulse">
                <p className="lg:text-lg">Shop now</p>
                <IoMdArrowDroprightCircle size={26} />
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/assets/images/slider-02-1920x795.jpg"
            width={200}
            height={200}
            alt=""
            layout="responsive"
            quality={100}
          />
         <div className="absolute top-14 left-10 lg:top-40 lg:left-40">
            <div className="relative font-playfairdisplay lg:text-5xl text-3xl text-[#424242]">Perfect Skin</div>
            <div className="hidden relative mt-3 w-60 lg:w-1/3 text-lg lg:flex text-[#424242]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
            <div className="w-36 lg:w-44 mt-4 cursor-pointer flex items-center justify-center gap-2 text-sm lg:p-3 p-2 px-5 rounded-full bg-[#91514E] text-white hover:bg-slate-950 hover:duration-1000 hover:animate-pulse">
                <p className="lg:text-lg">Shop Now</p>
                <IoMdArrowDroprightCircle size={26} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
