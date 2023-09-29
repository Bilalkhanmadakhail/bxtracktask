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
import "../App.css";

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
  /////for the second screen
  const captions = [
    'Room Feature 1',
    'Room Feature 2',
    'Room Feature 3',
    'Room Feature 4',
    'Room Feature 5',
    'Room Feature 6',
  ];
  const descriptions = [
    'Lorem ipsum dolor sit amet coii adipiscing elit 1',
    'Lorem ipsum dolor sit amet coii adipiscing elit 2',
    'Lorem ipsum dolor sit amet coii adipiscing elit 3',
    'Lorem ipsum dolor sit amet coii adipiscing elit 4',
    'Lorem ipsum dolor sit amet coii adipiscing elit 5',
    'Lorem ipsum dolor sit amet coii adipiscing elit 6',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageClicked, setIsImageClicked] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsImageClicked(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsImageClicked(false);
  };

  const handleImageClicked = () => {
    setIsImageClicked(true);
  };

  return (
    <div>
      <div className="container mx-auto md:block hidden  overflow-hidden">
      <div className="flex xl:ml-7 sm:mx-20 md:mx-0 sm:flex sm:flex-col md:flex-row md:flex h-[100vh] lg:w-[99%] overflow-hidden mt-2 pt-5 xl:w-[90%] ">
        <div className="xl:w-[98%] xl:ml-5 sm:w[100%]  lg:w-[85%] md:w-[70%] flex ">
          <div className="xl:ml-28 md:mx-10 lg:mx-0 lg:ml-16 ">
            <img
              className="xl:w-[366px] lg:w-[350px] lg:h-[500px] xl:h-[660px]"
              src={statue}
              alt="Statue"
            />
          </div>
          <div className="xl:mt-16 sm:mt-8 lg:mt-10 md:mt-8 mr-6 top-0 left-0 w-full">
            <h1 className="font-normal md:text-[30px] sm:text-[20px]  lg:text-[35px] xl:text-[40px] xl:leading-[40px]">
              Rooms
            </h1>
            <p className="font-reg xl:text-[18px] md:text-[14px] lg:text-[16px]  lg:mt-2 xl:mt-5 leading-[25px] opacity-70">
              MADE FOR SOPHISTICATED RELAXATION
            </p>
          </div>
        </div>
        <div className="flex  xxl:ml-32 xl:w-[20%] lg:w-[25%] sm:w-10 sm:h-10 md:mt-16 md:w-[20%] xl:mt-24 lg:mt-20 ">
          <img
            src={right}
            className={`lg:w-[70px] lg:h-[70px] md:w-[50px]  md:h-[50px] sm:w-10 sm:h-10 xl: transform -translate-y-1/2 text-white rounded-l ${
              startIndex === 0 ? "opacity-20" : ""
            }`}
            onClick={prevSlide}
            alt="Next"
          />
          <img
            src={left}
            className={`lg:w-[70px] lg:h-[70px] md:w-[50px] md:h-[50px] md:ml-8  transform -translate-y-1/2 text-white rounded-l ${
              startIndex === totalImages - imagesPerPage ? "opacity-20" : ""
            }`}
            onClick={nextSlide}
            alt="Previous"
          />
        </div>
      </div>
      <div className="slider xl:px-14 top-[200px] xxl:h-[120px] xxl:border-2 xxl:top-[190px] lg:px-10 xl:ml-44 xl:mt-[398px]  z-10 opacity-70 xl:bg-[#F4F4EF] w-[100px] h-[100px]    xl:flex justify-between transition-transform duration-500 ease-in-out absolute  "></div>
      <div className="slider overflow-hidden xl:px-14 sm:top-[150px] xl:top-[202px] md:top-[150px] lg:px-10 md:px-10 lg:right-12 xl:left-12 lg:top-[170px]  xl:ml-5 xl:w-[100%] lg:w-[95%] md:w-[98%] flex justify-between transition-transform duration-500 ease-in-out absolute  ">
        <div className="md:flex md:flex-row sm:flex sm:flex-col lgm:px-10 xl:px-0 xl:w-[85%] xxl:w-[80%] xxl:ml-14 lg:w-[99%] md:w-[99%]  justify-between transition-transform duration-500 ease-in-out">
          {Array.from({ length: imagesPerPage }, (_, index) => {
            const currentIndex = index + startIndex;
            const isVisible = currentIndex === currentLeftmostIndex;
            const isSelected = currentIndex === selectedIndex;

            return (
              <div
                key={currentIndex}
                className={`flex-shrink-0 md:w-[200px] md:h-[300px] xl:w-[320px] xl:h-[408px] lg:w-[280px] mdm:w-[250px] sm:w-[500px] sm:mx-20 md:mx-0 md:mb-0 sm:mb-10 xxl:w-[320px] xxl:h-[390px] sm:pb-10 md:pb-0 mdm:h-[320px] lg:h-[350px] bg-[#EDECE3] p-4 border text-center relative 
                  ${currentIndex === selectedIndex ? "selected" : ""}`}
                onClick={() => handleImageClick(currentIndex)}
              >
                <img
                  src={images[currentIndex % totalImages]}
                  alt={`Image ${currentIndex + 1}`}
                  className={`lg:w-[232px] xl:w-[260px] sm:w-[250px] xl:h-[325px] lg:h-[300px] md:w-[200px] m-auto object-cover rounded ${
                    isVisible ? "opacity-30  " : ""
                  }
                  ${isSelected ? "opacity-20" : ""}`}
                />
                <div className="absolute inset-0 flex flex-col justify-end">
                  {isSelected && (
                    <div className="text-black mx-14    text-[18px] leading-[21px] font-normal absolute inset-0 flex flex-col items-start  text-start justify-center">
                      Room Feature {currentIndex + 1}
                      <div>
                        <p className="opacity-70   ">
                          Lorem ipsum dolor sit amet coii adipiscing elit mus,
                          convallis morbi
                        </p>
                      </div>
                    </div>
                  )}
                  {!isSelected && (
                    <p className="text-black md:ml-6 text-[18px] xl:ml-7 ml-5 md:mb-2 lg:ml-6 leading-[21px] font-normal sm:ml-32 xxl:mb-2 absolute xl:mb-8 lg:-mb-1 transform -translate-y-1/2">
                      Room Feature {currentIndex + 1}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="slider-dots xl:mt-4 md:mt-[100px] mdm:mt-[140px] lg:mt-[200px] mb-10 w-[100%]  flex  justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === selectedIndex ? "selected" : ""} ${
              index === 1 && selectedIndex === 1 ? "large-dot" : ""
            } ${index === currentLeftmostIndex ? "current-dot" : ""}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
    <div className="second flex mx-20 md:hidden  ">
      <div>
        <img src={statue} className=""/>
      </div>
      <div className=" mt-14">

      <h1 className="font-normal md:text-[30px] sm:text-[20px]  lg:text-[35px] xl:text-[40px] xl:leading-[40px]">
              Rooms
            </h1>
            <p className="font-reg xl:text-[18px] md:text-[14px] lg:text-[16px]  lg:mt-2 xl:mt-5 leading-[25px] opacity-70">
              MADE FOR SOPHISTICATED RELAXATION
            </p>
      </div>
      </div>
    <div className="absolute bg-[#EDECE3] w-[100%]  top-[200px]  md:hidden block">
    <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className={`m-auto w-[70%] ${isImageClicked ? 'opacity-30' : ''}`}
        onClick={handleImageClicked}
      />
      <div className="absolute left-0 bottom-28 z-50 right-0 text-black p-2 text-center">
        <div>
          {isImageClicked ? 'Room Feature ' : captions[currentIndex]}
        </div>
        {isImageClicked && (
          <div className="opacity-70">
            {descriptions[currentIndex]}
          </div>
        )}
      </div>
      <img
        src={right}
        alt="Left Arrow"
        className="absolute left-0 sm:w-[80px] sm:h-[80px] w-[60px] h-[60px]  top-1/2 transform -translate-y-1/2"
        onClick={goToPrev}
      />
      <img
        src={left}
        alt="Right Arrow"
        className="absolute right-0 sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] top-1/2 transform -translate-y-1/2"
        onClick={goToNext}
      />
    </div>
    
    </div>
  );
};

export default RoomsScreen;
