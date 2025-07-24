import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  height: calc(100vh - 11.5vh);
  margin: 0;
  background: url("/Assets/Images/Background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Hero = () => {
  return (
    <HeroSection>
      <p>Hero</p>
    </HeroSection>
  );
};

export default Hero;
