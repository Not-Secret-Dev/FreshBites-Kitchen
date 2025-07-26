// Menu.jsx
import styled from "styled-components";
import MenuItem from "./MenuItem";
import Items from "./MenuItems";

const MenuSection = styled.section`
  padding: 2rem 1rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  .heading {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: #222;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    gap: 0.75rem;
    padding: 0;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  li {
    cursor: pointer;
    font-weight: 600;
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    border-radius: 5px;
    background-color: #f1f1f1;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d4ffd6;
    }

    @media (min-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }

  .menu-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    max-width: 1000px;
    margin: 0 auto;

    @media (min-width: 1024px) {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      overflow-x: auto;
      padding: 1rem;
      scrollbar-width: none; /* For Firefox */
      &::-webkit-scrollbar {
        display: none; /* For Chrome/Safari */
      }
    }
  }
`;

const Menu = () => {
  return (
    <MenuSection>
      <p className="heading">Explore our menu</p>
      <ul>
        <li>All</li>
        <li>Vegetarian</li>
        <li>Vegan</li>
        <li>Gluten-Free</li>
      </ul>
      <div className="menu-items">
        {Items.map((item) => (
          <MenuItem key={item.id} title={item.title} imgSrc={item.imgSrc} />
        ))}
      </div>
    </MenuSection>
  );
};

export default Menu;
