// Hero.jsx
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SliderItems from "./Slider/SliderItems";

const HeroContainer = styled.section`
  height: 89vh;
  width: 100%;
  position: relative;
  overflow: hidden;
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

const Slide = styled(motion.div)`
  width: ${(props) => 100 / props.$slideCount}%;
  height: 100%;
  display: flex;
  background: linear-gradient(to right, #f8f8f8 50%, #ffffff 50%);
  padding: 0 5%;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 2rem;
`;

const Headline = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: #2e8b57;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Subline = styled(motion.p)`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 2.5rem;
  max-width: 500px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
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

  &:hover {
    background: white;
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
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
  }
`;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SliderItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SliderItems.length - 1 : prev - 1));
  };

  return (
    <HeroContainer>
      <SliderWrapper
        $currentSlide={currentSlide}
        $slideCount={SliderItems.length}
      >
        {SliderItems.map((item) => (
          <Slide key={item.id} $slideCount={SliderItems.length}>
            <ContentWrapper>
              <TextContent>
                <Headline
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.headline}
                </Headline>
                <Subline
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {item.subline}
                </Subline>
                <ButtonGroup
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <button className="primary">View This Week's Menu</button>
                  <button className="secondary">Customize Your Plan</button>
                </ButtonGroup>
              </TextContent>
              <div className="image-container">
                <motion.img
                  src={item.imgSrc}
                  alt={item.headline}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </ContentWrapper>
          </Slide>
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
            key={item.id} // Use the same unique id here
            $active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotsContainer>
    </HeroContainer>
  );
};

export default Hero;
