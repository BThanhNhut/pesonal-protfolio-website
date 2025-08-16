"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";

type BookFlipProps = {
  images: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styleFlipBox?: any;
};

export default function BookFlip({ images, styleFlipBox }: BookFlipProps) {
  return (
    <HTMLFlipBook
      {...styleFlipBox}
      width={400}
      height={500}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size="fixed"
      // className="bg-green-600"
    >
      <div className="page" style={{ background: "transparent" }}>
        <div className="page-content cover">
          <img
            src={
              "https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Emblem.jpg"
            }
          ></img>
        </div>
      </div>
      {images.map((img, index) => (
        <div key={index} className="w-full h-full">
          <img
            src={img}
            alt={`Page ${index + 1}`}
            className="w-full h-full object-cover rounded"
          />
        </div>
      ))}
    </HTMLFlipBook>
  );
}
