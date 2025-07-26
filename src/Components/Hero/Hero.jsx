import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  min-height: 500px;
  background: url("/Assets/Images/Background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
    min-height: 70vh;
  }

  @media (min-width: 1024px) {
    min-height: 90vh;
  }
`;

const HeroContent = styled.div`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 12px;
  width: 90%; /* Takes more width on mobile */
  max-width: 700px;
  margin: 0 auto;
  backdrop-filter: blur(2px); /* Subtle blur effect */

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    line-height: 1.3;

    @media (min-width: 480px) {
      font-size: 2.2rem;
    }

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.8rem;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;

    @media (min-width: 480px) {
      font-size: 1.1rem;
    }

    @media (min-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%; /* Full width on mobile */
    max-width: 200px; /* But constrained to max-width */

    &:hover {
      background-color: #45a049;
      transform: translateY(-2px);
    }

    @media (min-width: 480px) {
      padding: 0.75rem 2rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    padding: 2rem 3rem;
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
