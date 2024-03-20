"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef } from "react";

// import classNames from "classnames";
const ImageCarousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex absolute top-0 left-0 w-full h-full transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
        ref={containerRef}
      >
        {images.map((image: any, index: number) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Image
              src={`/${image}`}
              width={30}
              height={30}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 focus:outline-none"
        onClick={prevImage}
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
        onClick={nextImage}
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default ImageCarousel;
