import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSlider = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #f8faf7;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  .left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;
  }

  .right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f5f0;
    padding: 2rem;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #2a7d4a;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem;
    color: #4a5568;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 90%;
  }

  .cta {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
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
    box-shadow: 0 4px 12px rgba(42, 125, 74, 0.2);

    &:hover {
      background-color: #3a8d5a;
      transform: translateY(-2px);
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
  }

  img {
    max-width: 100%;
    max-height: 80%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
          <button className="primary">View This Week's Menu</button>
          <button className="secondary">Customize Your Plan</button>
        </motion.div>
      </section>
      <section className="right">
        <motion.img
          src={imgSrc}
          alt={headline}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </section>
    </HeroSlider>
  );
};

export default Slider;
