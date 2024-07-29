import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoimg from "./imges/Meubel House_Logos-05.png";
import icons_search from "./imges/akar-icons_search.png";
import shopping_cart from "./imges/ant-design_shopping-cart-outlined.png";
import mdi_account from "./imges/mdi_account-alert-outline.png";
import icons_heart from "./imges/akar-icons_heart.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab, toggleFavorite } from "../stores/cart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [FavtotalQuantity, setFavTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const favoriteItems = useSelector((store) => store.cart.favorites); // Correctly access favorites
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  useEffect(() => {
    setFavTotalQuantity(favoriteItems.length);
  }, [favoriteItems]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const handleToggleFavorite = (productId) => {
    dispatch(toggleFavorite(productId));
  };

  return (
    <>
    
      <nav className="navbar">
        <div className="navlogo">
          <img src={logoimg} alt="" />
          <div className="navbar-logo">Furniro</div>
        </div>
        <div
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={handleToggle}
        >
          {isMenuOpen ? "✕s" : "☰"}
        </div>
        <ul className={``}>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <div className="iconfristdiv">
            <li>
              <div className="icon-btns">
                <img src={mdi_account} alt="" className="img-cursor mt-2" />
                <img src={icons_search} alt="" className="img-cursor mt-2" />
                <div
                  className="w-10 h-10 rounded-full flex justify-center items-center relative img-cursor"
                  onClick={() => handleToggleFavorite("someProductId")}
                >
                  {/* Make sure to pass a valid productId */}
                  <img src={icons_heart} alt="" className="img-cursor" />
                  <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
                    {FavtotalQuantity}
                  </span>
                </div>
                <div
                  className="w-10 h-10  rounded-full flex justify-center items-center relative img-cursor"
                  onClick={handleOpenTabCart}
                >
                  <img src={shopping_cart} alt="" className="w-6 " />
                  <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
                    {totalQuantity}
                  </span>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;
