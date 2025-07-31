import styled from "styled-components";
import { useState, useEffect } from "react";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarComponent = styled.nav`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fefcf7;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  #logo {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    p {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      transition: color 0.3s ease;
    }

    p:hover {
      color: #378039;
      cursor: pointer;
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  li {
    list-style: none;
    font-size: 1rem;
    margin: 0 1rem;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  li:hover {
    color: #378039;
    cursor: pointer;
  }

  .desktop-buttons {
    display: flex;
    gap: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    width: 130px;
    height: 40px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #4caf50;
    color: white;
    font-size: 0.8rem;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  button#cartbtn {
    width: 50px;
  }

  button:hover {
    background-color: #45a049;
  }

  .hamburger {
    display: none;
    font-size: 1.8rem;
    cursor: pointer;
    color: #333;
  }

  @media (max-width: 900px) {
    ul {
      display: none;
    }

    .hamburger {
      display: block;
    }

    .desktop-buttons {
      display: none;
    }
  }

  @media (max-width: 480px) {
    #logo p {
      font-size: 1.2rem;
    }

    img {
      width: 40px !important;
      height: 40px !important;
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #fefcf7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  z-index: 999;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 2rem 0;
  }

  li {
    margin: 1.5rem 0;
    font-size: 1.2rem;
    list-style: none;
    font-weight: 600;
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    transition: all 0.3s ease;
  }

  li:hover {
    color: #378039;
    background-color: rgba(55, 128, 57, 0.1);
    cursor: pointer;
  }

  .close-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: #333;
  }

  .mobile-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    margin-top: 1rem;
  }

  .mobile-buttons button {
    padding: 0.8rem 1rem;
    width: 100%;
    height: 50px;
    font-size: 1rem;
  }

  .mobile-buttons button#cartbtn {
    width: 100%;
  }
`;

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarComponent>
      <div id="logo">
        <img src="/Assets/Icons/salad.png" alt="Logo" />
        <p>FreshBites Kitchen</p>
      </div>

      <div className="right">
        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>How It Works</li>
              <li>Nutrition Tips</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
            <div className="desktop-buttons">
              <button id="lsbtn">
                {loggedIn ? <VscAccount size={18} /> : "Login / Sign up"}
              </button>
              <button id="cartbtn">
                <FaShoppingCart size={16} />
              </button>
            </div>
          </>
        )}

        {/* Mobile Hamburger Icon */}
        {isMobile && (
          <div className="hamburger" onClick={toggleMenu}>
            <FiMenu />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <MobileMenu isOpen={menuOpen}>
          <div className="close-icon" onClick={toggleMenu}>
            <FiX />
          </div>
          <ul>
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>Menu</li>
            <li onClick={toggleMenu}>How It Works</li>
            <li onClick={toggleMenu}>Nutrition Tips</li>
            <li onClick={toggleMenu}>About Us</li>
            <li onClick={toggleMenu}>Contact Us</li>
          </ul>
          <div className="mobile-buttons">
            <button id="lsbtn" onClick={toggleMenu}>
              {loggedIn ? (
                <>
                  <VscAccount size={18} /> My Account
                </>
              ) : (
                "Login / Sign up"
              )}
            </button>
            <button id="cartbtn" onClick={toggleMenu}>
              <FaShoppingCart size={16} /> Cart
            </button>
          </div>
        </MobileMenu>
      )}
    </NavbarComponent>
  );
};

export default Navbar;
