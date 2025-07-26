// MenuItem.jsx
import styled from "styled-components";

const MenuItem = ({ title, imgSrc }) => {
  return (
    <Item>
      <div className="image-wrapper">
        <img src={imgSrc} alt={title} />
      </div>
      <p className="title">{title}</p>
    </Item>
  );
};

const Item = styled.div`
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
  transition: all 0.3s ease;
  padding: 0.5rem;
  margin: 0.25rem;

  &:hover {
    background-color: #f1f1f1;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 0.75rem;

    @media (min-width: 1024px) {
      width: 180px;
      height: 180px;
      margin: 0 auto 0.75rem;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .title {
    font-weight: 600;
    color: #333;
    font-size: 0.9rem;
    margin: 0.5rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 480px) {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    min-width: 200px;
    flex-shrink: 0;
  }
`;

export default MenuItem;
