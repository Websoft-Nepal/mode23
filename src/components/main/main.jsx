import React from "react";
import ProductCard from "../cards/productCard";
import image1 from "../../assets/asset 10.jpeg";
import image2 from "../../assets/asset 11.jpeg";
import image3 from "../../assets/asset 12.jpeg";
import MainButton from "../buttons/mainButton";

export default function Main() {
  const newArrivals = [
    {
      id: 1,
      image: image1,
      name: "Fluffy Blue Balaclava Hoddie",
      price: "Rs.4,950",
    },
    { id: 2, image: image2, name: "Ivy Golden Fur Jacket", price: "Rs.4,140" },
    { id: 3, image: image3, name: "Ritzy Vintage Hoddie", price: "Rs.3,100" },
  ];

  return (
    <div className="flex gap-4 ">
      <div className="w-[40rem] h-full sticky top-32">
        <video loop="true" autoPlay="autoPlay" muted>
          <source
            src="https://www.mode23nepal.com/catalog/view/theme/mode23/assets/video/dashain-video.MP4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="w-full grid grid-cols-1 gap-4">
        <ProductCard title={"Top Sales"} images={newArrivals} />
        <ProductCard title={""} images={newArrivals} />
        <ProductCard title={""} images={newArrivals} />
        <div className='flex items-center justify-center'>
          <MainButton />
        </div>
      </div>
    </div>
  );
}
