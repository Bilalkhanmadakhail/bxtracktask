import React, { useState } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image1.png";
import image5 from "../assets/image2.png";
import statue from "../assets/Vector (17).png";
import image6 from "../assets/image3.png";
import left from "../assets/Group 1000003642.png";
import right from "../assets/Group 4285 (1).png";

const images = [image1, image2, image3, image4, image5, image6];

const RoomsScreen = () => {
  const totalImages = images.length;
  const imagesPerPage = 3;

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + imagesPerPage < totalImages) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  const isLastImageVisible = startIndex + imagesPerPage >= totalImages;
  const isFirstImageVisible = startIndex === 0;
  return (
    <div className=" container mx-auto overflow-hidden">
      <div className="flex border-2 h-[100vh] px-20 pt-10 border-black w-[100%] ">
        <div className="w-[80%] flex ">
          <div className="ml-14 ">
            <img className="w-[300px] h-[500px]" src={statue} />
          </div>
          <div className="mt-10 mr-6  top-0 left-0 w-full">
            <h1 className="font-normal text-[42px]">Rooms</h1>
            <p className="font-reg opacity-70">
              MADE FOR SOPHISTICATED RELAXATION
            </p>
          </div>
        </div>
        <div className="flex w-[20%] mt-20 justify-between">
        <img
            src={right}
            className={` transform -translate-y-1/2 right-0 w-[90px] h-[90px]  text-white  rounded-r ${
              isLastImageVisible ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={nextSlide}
            disabled={isLastImageVisible}
          />
          <img
            src={left}
            className={` w-[90px] h-[90px]  transform -translate-y-1/2  text-white  rounded-l ${
              isFirstImageVisible ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={prevSlide}
            disabled={isFirstImageVisible}
          />
         
        </div>
      </div>

      <div className="slider px-28 flex justify-between transition-transform duration-500 ease-in-out absolute  ">
        <div className="flex transition-transform duration-500 ease-in-out">
          {Array.from({ length: imagesPerPage }, (_, index) => (
            <div
              key={index + startIndex}
              className="flex-shrink-0 w-[380px] h-[508px] bg-[#EDECE3] p-4 border text-center relative"
            >
              <img
                src={images[(index + startIndex) % totalImages]}
                alt={`Image ${((index + startIndex) % totalImages) + 1}`}
                className="w-100 h-200 object-cover rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-bold">
                  Image {((index + startIndex) % totalImages) + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="dots">
        {images.map((_, index) => (
          <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
        ))}
      </div> */}
    </div>
  );
};

export default RoomsScreen;
