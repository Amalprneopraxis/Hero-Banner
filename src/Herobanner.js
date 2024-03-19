import React, { useState, useEffect } from 'react';
import './components/banner/Banner.css'

const Herobanner = () => {
    const [slideIndex, setSlideIndex] = useState('1');
  
    useEffect(() => {
      const interval = setInterval(() => {
        plusSlides(1);
      }, 4000);
      return () => clearInterval(interval);
    }, [slideIndex]);
  
    const plusSlides = (n) => {
      showSlides(slideIndex + n);
    };
  
    const showSlides = (n) => {
      let newIndex = n;
      const slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {
        newIndex = 1;
      }
      if (n < 1) {
        newIndex = slides.length;
      }
      setSlideIndex(newIndex);
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[newIndex - 1].style.display = "block";
    };
  
    return (
      <div className="slideshow-container">
        <div className="mySlides">
          <q style={{color: "red"}}>BigCommerce offers a comprehensive e-commerce solution that combines advanced functionality with user-friendly design</q>
        </div>
        <div className="mySlides">
          <q style={{color: "red"}}>With BigCommerce, businesses can seamlessly scale their online operations</q>
        </div>
        <div className="mySlides">
          <q style={{color: "red"}}> BigCommerce empowers businesses of all sizes to build.</q>
        </div>
      </div>
    );
  };
  // Attach Headernav to the window object
   window.Herobanner = Herobanner;
   export default Herobanner;

