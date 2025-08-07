// Hero.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SliderItems from "./Slider/SliderItems";
import Slider from "./Slider/Slider";

const HeroContainer = styled.section`
  height: 100vh;
  max-height: 900px;
  min-height: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 80vh;
    min-height: 500px;
  }

  @media (max-width: 768px) {
    height: 70vh;
    min-height: 400px;
  }

  @media (max-width: 480px) {
    height: 60vh;
    min-height: 300px;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  height: 100%;
  width: ${(props) => props.$slideCount * 100}%;
  transform: translateX(
    -${(props) => props.$currentSlide * (100 / props.$slideCount)}%
  );
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
`;

const SlideContainer = styled.div`
  width: ${(props) => 100 / props.$slideCount}%;
  height: 100%;
  flex-shrink: 0;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #2e8b57;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 20px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &.next {
    right: 20px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 480px) {
    bottom: 20px;
    gap: 8px;
  }
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.$active ? "#2e8b57" : "rgba(46, 139, 87, 0.3)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2e8b57;
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SliderItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SliderItems.length - 1 : prev - 1));
  };

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <HeroContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <SliderWrapper
        $currentSlide={currentSlide}
        $slideCount={SliderItems.length}
      >
        {SliderItems.map((item) => (
          <SlideContainer key={item.id} $slideCount={SliderItems.length}>
            <Slider
              headline={item.headline}
              subline={item.subline}
              imgSrc={item.imgSrc}
            />
          </SlideContainer>
        ))}
      </SliderWrapper>

      <NavButton className="prev" onClick={prevSlide}>
        &#10094;
      </NavButton>
      <NavButton className="next" onClick={nextSlide}>
        &#10095;
      </NavButton>

      <DotsContainer>
        {SliderItems.map((item, index) => (
          <Dot
            key={item.id}
            $active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotsContainer>
    </HeroContainer>
  );
};

export default Hero;
