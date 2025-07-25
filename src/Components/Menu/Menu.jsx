import styled from "styled-components";
import MenuItem from "./MenuItem";
import Items from "./MenuItems";

const MenuSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  .heading {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: #222;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 1.5rem;
    padding: 0;
    margin-bottom: 2rem;
  }

  li {
    cursor: pointer;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #f1f1f1;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d4ffd6;
    }
  }

  .menu-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 0.5rem;
    max-width: 1000px;
    margin: 0 auto;
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
