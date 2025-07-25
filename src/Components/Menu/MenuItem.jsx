import styled from "styled-components";

const Item = styled.div`
  border-radius: 8px;
  margin: 0.5rem;
  background-color: #f9f9f9;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 1rem;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    font-weight: 600;
    color: #333;
  }
`;

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

export default MenuItem;
