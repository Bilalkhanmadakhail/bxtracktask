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
import '../App.css';

const images = [image1, image2, image3, image4, image5, image6];

const RoomsScreen = () => {
  const totalImages = images.length;
  const imagesPerPage = 3;

  const [startIndex, setStartIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const nextSlide = () => {
    if (startIndex + imagesPerPage < totalImages) {
      setStartIndex((prevIndex) => prevIndex + 1);
      setSelectedIndex(-1); // Reset selected index when changing slides
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
      setSelectedIndex(-1); // Reset selected index when changing slides
    }
  };

  const handleImageClick = (index) => {
    setStartIndex((prevIndex) => prevIndex); // Prevent changing slides on image click
    setSelectedIndex(index);
  };

  const currentLeftmostIndex = Math.max(0, startIndex);

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="flex ml-7 h-[100vh] overflow-hidden mt-2 pt-5 w-[100%] ">
        <div className="w-[70%] flex ">
          <div className="ml-28 ">
            <img className="w-[366px] h-[650px]" src={statue} alt="Statue" />
          </div>
          <div className="mt-16 mr-6 top-0 left-0 w-full">
            <h1 className="font-normal text-[40px] leading-[40px]">Rooms</h1>
            <p className="font-reg text-[18px] mt-5 leading-[25px] opacity-70">
              MADE FOR SOPHISTICATED RELAXATION
            </p>
          </div>
        </div>
        <div className="flex ml-4 w-[20%] mt-24 justify- ">
          <img
            src={right}
            className={`w-[70px] h-[70px] ml-12 transform -translate-y-1/2 text-white rounded-l ${startIndex === 0 ? 'opacity-20' : ''}`}
            onClick={prevSlide}
            alt="Next"
          />
          <img
            src={left}
            className={`w-[70px] h-[70px] ml-12 transform -translate-y-1/2 text-white rounded-l ${startIndex === totalImages - imagesPerPage ? 'opacity-20' : ''}`}
            onClick={nextSlide}
            alt="Previous"
          />
        </div>
      </div>
<div className="slider px-14 ml-40 mt-[398px] z-10 opacity-70 bg-[#F4F4EF] w-[100px] h-[100px] border-2  flex justify-between transition-transform duration-500 ease-in-out absolute  ">

</div>
      <div className="slider px-14 ml-5 w-[100%] flex justify-between transition-transform duration-500 ease-in-out absolute  ">
        <div className="flex w-[80%] justify-between transition-transform duration-500 ease-in-out">
          {Array.from({ length: imagesPerPage }, (_, index) => {
            const currentIndex = index + startIndex;
            const isVisible = currentIndex === currentLeftmostIndex;
            const isSelected = currentIndex === selectedIndex;

            return (
              <div
                key={currentIndex}
                className={`flex-shrink-0 w-[320px] h-[398px] bg-[#EDECE3] p-4 border text-center relative 
                  ${currentIndex === selectedIndex ? "selected" : ""}`}
                onClick={() => handleImageClick(currentIndex)}
              >
                <img
                  src={images[currentIndex % totalImages]}
                  alt={`Image ${currentIndex + 1}`}
                  className={`w-[232px] h-[300px] m-auto object-cover rounded ${
                    isVisible ? "opacity-30  " : ""
                  }
                  ${isSelected ? "opacity-20" : ""}`}
                />
                <div className="absolute inset-0 flex flex-col justify-end">
                  {isSelected && (
                    <div className="text-black mx-14    text-[18px] leading-[21px] font-normal absolute inset-0 flex flex-col items-start  text-start justify-center">
                      Room Feature {currentIndex + 1}
                     <div>
                      <p className="opacity-70   ">Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbi</p>
                    </div>
                    </div>
                  )}
                  {!isSelected && (
                    <p className="text-black text-[18px] ml-11 leading-[21px] font-normal absolute mb-12  transform -translate-y-1/2">
                      Room Feature {currentIndex + 1}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

     
      <div className="slider-dots mt-4 mb-10 flex justify-center">
  {images.map((_, index) => (
    <div
      key={index}
      className={`dot ${index === selectedIndex ? 'selected' : ''} ${index === 1 && selectedIndex === 1 ? 'large-dot' : ''} ${index === currentLeftmostIndex ? 'current-dot' : ''}`}
      onClick={() => handleImageClick(index)}
    />
  ))}
</div>
    </div>
  );
};

export default RoomsScreen;
