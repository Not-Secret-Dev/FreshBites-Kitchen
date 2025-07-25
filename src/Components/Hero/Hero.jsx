import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  height: calc(100vh - 4.15rem);
  background: url("/Assets/Images/Background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 2rem 3rem;
  border-radius: 12px;
  max-width: 700px;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Eat Clean. Live Fresh. Delivered to Your Door.</h1>
        <p>
          Wholesome, chef-prepared meals made with organic ingredients — ready
          when you are.
        </p>
        <button>Explore Our Menu</button>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
