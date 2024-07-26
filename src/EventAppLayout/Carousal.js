import React, { useEffect, useRef, useState } from "react";
import "./Carousal.css";
import i1 from "./carousalImages/i1.png";
import i2 from "./carousalImages/i2.jpg";
import i3 from "./carousalImages/i3.png";
import i4 from "./carousalImages/i4.jpg";
import i5 from "./carousalImages/i5.png";
import i6 from "./carousalImages/i8.jpg";
import i7 from "./carousalImages/i9.jpg";

function Carousal() {
  const slider = useRef();
  let [sliderCount, setSliderCount] = useState(1);
  let [prevCount, setPrevCount] = useState(0);
  const totalSlides = document.querySelectorAll(".carousalImages img").length;
  const w = useRef();
  let width = 0;
  if (w.current) {
    width = w.current.offsetWidth;
  }

  function nextImage() {
    if (sliderCount == 0) {
      slider.current.style.transition = "none";
    } else {
      slider.current.style.transition = "transform 0.5s ease";
    }
    if (w.current) {
      const wid = w.current.offsetWidth;
      slider.current.style.transform = `translateX(${-sliderCount * wid}px)`;
      setSliderCount(sliderCount + 1);
      setPrevCount(sliderCount - 1);
    }

    if (sliderCount == totalSlides - 1) {
      setSliderCount(0);
      setPrevCount(totalSlides - 2);
    }
  }

  function previousImage() {
    slider.current.style.transition = "transform 0.5s ease";
    slider.current.style.transform = `translateX(${-prevCount * width}px)`;
    setPrevCount(prevCount - 1);
    setSliderCount(prevCount + 1);
    if (prevCount <= 0) {
      setPrevCount(0);
      setSliderCount(1);
    }
  }

  return (
    <>
      <div className="slider" ref={w}>
        <div className="carousalImages" ref={slider}>
          <figure>
            <img src={i2} />
          </figure>
          <figure>
            <img src={i3} />
          </figure>
          <figure>
            <img src={i4} />
          </figure>
          <figure>
            <img src={i5} />
          </figure>
          <figure>
            <img src={i6} />
          </figure>
          <figure>
            <img src={i7} />
          </figure>
        </div>
      </div>
      <i class="fa-solid fa-chevron-right" id="next" onClick={nextImage}></i>
      <i
        class="fa-solid fa-chevron-left"
        id="previous"
        onClick={previousImage}
      ></i>
    </>
  );
}

export default Carousal;
