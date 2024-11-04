import { Link, useLocation } from "react-router-dom";
const Card = ({ product, handleRemove }) => {
  const { pathname } = useLocation();
  const { id, title, brand, image, category, rating } = product || {};

  return (
    <div className="flex relative">
      <Link
        to={`/product/${id}`}
        className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img className="" src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name: {title}</h1>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
          <p>Rating: {rating}</p>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5"
        ></div>
      )}
    </div>
  );
};

export default Card;
