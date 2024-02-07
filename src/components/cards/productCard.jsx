import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function ProductCard({ title, images }) {
  const [orderNow, setOrderNow] = useState(null);

  const handleHover = (index) => {
    setOrderNow(index);
  };

  const handleMouseEnter = (index) => {
    handleHover(index);
  };

  const handleMouseLeave = () => {
    handleHover(null);
  };
  AOS.init();

  console.log(orderNow);

  console.log(images);
  return (
    <div className="">
      <h1 className="text-5xl mb-10">{title}</h1>
      <div className="grid grid-cols-3 gap-4 overflow-hidden">
          {images?.map((image) => (
            <div data-aos="fade-down"
            data-aos-duration="1000"
              key={image.id}
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer relative hover:opacity-90 overflow-hidden"
            >
              <div className="overflow-hidden h-[39rem] ">
                <img
                  loading="lazy"
                  className={`w-full h-full object-cover ${
                    orderNow === image.id
                      ? "scale-105 ease-in duration-1000 "
                      : "scale-100 ease-out duration-1000 "
                  }`}
                  src={image.image}
                  alt={`Image ${image.id}`}
                />
              </div>
              <div className="">
                <p>{image.name}</p>
                <p>{image.price}</p>
              </div>
              {orderNow === image.id && (
                <>
                  <div className="hover:bg-black absolute inset-0 bottom-[49px] opacity-40  ease-in duration-700"></div>
                  <div
                    className={`bg-gray-300 bg-opacity-60 flex backdrop:blur-lg items-center justify-center p-4 font-semibold absolute bottom-12 z-30 w-full `}
                  >
                    <p>ORDER NOW</p>
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
