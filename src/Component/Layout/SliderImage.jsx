import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const slides = [
    'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  ];

  const plusSlides = (n) => {
    showSlides(currentIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let newIndex = n;
    if (newIndex > slides.length) {
      newIndex = 1;
    }
    if (newIndex < 1) {
      newIndex = slides.length;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container max-w-2xl mx-auto relative bg-gray-100 p-2 sm:p-4">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`images fade ${index + 1 === currentIndex ? '' : 'hidden'}`}
        >
          <img src={src} alt={`Image ${index + 1}`} className="w-full" />
        </div>
      ))}

      <a
        className="previous absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md cursor-pointer"
        onClick={() => plusSlides(-1)}
      >
        ❮
      </a>

      <a
        className="next absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md cursor-pointer"
        onClick={() => plusSlides(1)}
      >
        ❯
      </a>

      <div className="text-center">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`navigation-dot cursor-pointer h-15px w-15px m-0-2px rounded-full inline-block transition duration-600 ${
              index + 1 === currentIndex ? 'active bg-[#717171]' : 'bg-[#bbb]'
            }`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
