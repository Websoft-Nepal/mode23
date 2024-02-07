import React from "react";
import Navbar from "../components/navbar/navbar";
import main from "../assets/asset 5.png";
import SliderMain from "../components/slider/sliderMain";
import ProductCard from "../components/cards/productCard";
import image1 from "../assets/asset 10.jpeg";
import image2 from "../assets/asset 11.jpeg";
import image3 from "../assets/asset 12.jpeg";
import image4 from "../assets/asset 13.jpeg";
import image5 from "../assets/asset 14.jpeg";
import image6 from "../assets/asset 15.jpeg";
import image7 from "../assets/asset 31.jpeg";
import image8 from "../assets/asset 12.jpeg";
import image9 from "../assets/asset 10.jpeg";
import MainButton from "../components/buttons/mainButton";
import Main from "../components/main/main";
import Sales from "../components/main/sales";
import NewsLetter from "../components/newsLetter/newsLetter";
import Footer from "../components/footer/footer";

export default function MainPage() {
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

  const bestSellers = [
    {
      id: 1,
      image: image4,
      name: "FChloe Off-white Polar Jacket",
      price: "Rs.4,000",
    },
    {
      id: 2,
      image: image5,
      name: "Faux Shearling Lined Blue Corduroy Jacket",
      price: "Rs.2,140",
    },
    { id: 3, image: image6, name: "Mode Black Blast Jeans", price: "Rs.1,100" },
  ];

  const bottoms = [
    {
      id: 1,
      image: image7,
      name: "Mode Brown Woolen Plaid Skirt",
      price: "Rs.2,950",
    },
    { id: 2, image: image8, name: "Mode Black Blast Jeans", price: "Rs.3,140" },
    { id: 3, image: image9, name: "Ritzy Vintage Hoddie", price: "Rs.5,100" },
  ];

  return (
    <div>
      <Navbar />
      <div className="">
        <img src={main}></img>
      </div>
      <div className="pl-28 pr-28 flex flex-col gap-28 ">
        {/* <SliderMain/> */}
        <ProductCard title={"New Arrivals"} images={newArrivals} />
        <ProductCard title={"Best Seller"} images={bestSellers} />
        <div className="flex items-center justify-center">
          <MainButton />
        </div>
        <ProductCard title={"Bottoms"} images={bottoms} />
        <div className="flex items-center justify-center">
          <MainButton />
        </div>
        <Main />
        <Sales />
        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
}
