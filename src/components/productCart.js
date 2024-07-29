import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorites, removeFromFavorites } from "../stores/cart";
import Heart from "./imges/Heart.png";
import share from "./imges/Vector (6).png";
import compar from "./imges/Vector (7).png";

const ProductCart = (props) => {
  const { id, off, producttype, ProductNewPrice, name, price, image, slug } = props.data;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart.favorites);
  const isFavorite = favorites.includes(id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ productId: id }));
    } else {
      dispatch(addToFavorites({ productId: id }));
    }
  };

  return (
    <>
      <div className="product-list">
        <div className="productlist-1 relative">
          <div className="relative group">
            <img src={image} alt="" className="w-full h-auto" />
            <h4 id="tsst" className="absolute top-0 right-0 off">
              {off}%
            </h4>

            <div
              className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center 
            justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <button
                className="bg-white text-orange-400 hover:text-orange-400 font-bold py-3 px-6 mb-5 rounded hover:bg-gray-100 transition"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              <div className="flex gap-4 text-white font-bold ">
                <div className="flex text-white btnimgshare">
                  <button className="">Share</button>
                  <img src={share} alt="" className="text-black" />
                </div>
                <Link to="/comparison">
                  <div className="flex text-white btnimgshare">
                    <button className="btnimgshare">Compare</button>
                    <i className="fas fa-exchange-alt" />
                    <img src={compar} alt="" className="" />
                  </div>
                </Link>
                <div
                  className={`flex text-white btnimgshare`}
                  onClick={toggleFavorite}
                >
                  <button className="btnimgshare">{isFavorite ? "Unlike" : "Like"}</button>
                  <img src={Heart} alt="" className={``} />
                </div>
              </div>
            </div>
          </div>
          <Link to={`/product/${slug}`} className="block product mt-4">
            <h3 className="text-2xl font-bold ">{name}</h3>
            <h6 className="text-gray-500 font-medium py-2.5 font-poppins">
              {producttype}
            </h6>
            <p className="flex justify-between gap-2">
              <span id="new" className="text-xl font-medium">
                ${price}
              </span>
              <span id="old" className="line-through text-gray-500">
                ${ProductNewPrice}
              </span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
