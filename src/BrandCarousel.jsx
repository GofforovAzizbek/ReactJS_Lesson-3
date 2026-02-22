import { useState } from "react";

import artisans from "./assets/images/artisans.svg";
import boling from "./assets/images/boling.svg";
import portkeys from "./assets/images/portkeys.svg";
import synco from "./assets/images/synco.svg";

const brands = [
  { id: 1, name: "7Artisans", logo: artisans },
  { id: 2, name: "BOLING", logo: boling },
  { id: 3, name: "PortKeys", logo: portkeys },
  { id: 4, name: "SYNCO", logo: synco },
];

export default function BrandCarousel() {
  const [current, setCurrent] = useState(0);

  const visibleItems = 4;
  //   const totalDots = 10;

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto px-4 relative">
        {/* LEFT */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 translate-y-1/2 text-2xl z-10"
        >
          &#10094;
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform"
            style={{
              transform: `translateX(-${(current % brands.length) * (100 / visibleItems)}%)`,
              width: `${(brands.length * 100) / visibleItems}%`,
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="">
                <div className="">
                  <img src={brand.logo} alt={brand.name} className="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl z-10"
        >
          &#10095;
        </button>

        {/* DOTS (10 ta)
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(totalDots)].map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                current % totalDots === index
                  ? "bg-gray-800"
                  : "bg-gray-400 opacity-50"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
