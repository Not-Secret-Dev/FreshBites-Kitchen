import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSlider = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: center;
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #f8faf7;
  border-radius: 16px;
  overflow: hidden;

  @media (min-width: 1025px) {
    flex-direction: row;
  }

  .left {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    order: 2;

    @media (min-width: 1025px) {
      width: 50%;
      height: 100%;
      padding: 4rem;
      order: 1;
    }

    @media (max-width: 768px) {
      height: 70%;
      padding: 1.5rem;
    }

    @media (max-width: 480px) {
      padding: 1rem;
    }
  }

  .right {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    order: 1;

    @media (min-width: 1025px) {
      width: 50%;
      height: 100%;
      padding: 2rem;
      order: 2;
    }
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #2a7d4a;
    margin-bottom: 1.5rem;
    line-height: 1.2;

    @media (max-width: 1024px) {
      font-size: 2.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #4a5568;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 90%;

    @media (max-width: 1024px) {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      max-width: 100%;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  .cta {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }
  }

  .primary {
    background-color: #2a7d4a;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #3a8d5a;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0.8rem;
    }
  }

  .secondary {
    background-color: white;
    color: #2a7d4a;
    border: 2px solid #2a7d4a;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f0f7f3;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    pointer-events: none;

    @media (max-width: 1024px) {
      max-height: 90%;
    }
  }
`;

const Slider = ({ headline, subline, imgSrc }) => {
  return (
    <HeroSlider
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="right">
        <motion.img
          src={imgSrc}
          alt={headline}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </section>
      <section className="left">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {subline}
        </motion.p>
        <motion.div
          className="cta"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="primary" onClick={(e) => e.stopPropagation()}>
            View This Week's Menu
          </button>
          <button className="secondary" onClick={(e) => e.stopPropagation()}>
            Customize Your Plan
          </button>
        </motion.div>
      </section>
    </HeroSlider>
  );
};

export default Slider;
