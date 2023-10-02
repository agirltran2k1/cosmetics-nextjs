"use client"; // This is a client component

import Image from "next/image";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slide from "@/components/Slide";

/**
 * Carousel componet
 */

export default function Banner() {

    {/* Data slide */}
    const slides = [
        {
            url: require("../public/assets/images/slider-01-1920x795.jpg")
        },
        {
            url: require("../public/assets/images/slider-02-1920x795.jpg")
        }
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0);

    {/* Chuyển banner */}

    const prevSlide = () => {
        const isFirstSilde = currentIndex === 0;
        const newIndex = isFirstSilde ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="w-full h-[780px] max-w-[1400px] relative">
                
        </div>
    )
}
