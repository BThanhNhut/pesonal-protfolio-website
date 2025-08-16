import React from "react";
import BookFlip from "./BookFlip";

export default function DemoSection() {
  const images = [
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/08/hinh-anh-pokemon-28.jpg",
    "https://i.pinimg.com/736x/68/a4/86/68a48637cc9ddaaca5e47f212a6cd29a.jpg",
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/06/anh-pokemon.jpg",
  ];
  return (
    <div className="w-full flex justify-center px-4 py-8 bg-red-500">
      <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] bg-yellow-600 mx-auto">
        <BookFlip images={images} />
      </div>
    </div>
  );
}
