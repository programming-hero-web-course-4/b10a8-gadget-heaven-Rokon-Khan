import { Link, useLocation } from "react-router-dom";
const Card = ({ product, handleRemove }) => {
  const { pathname } = useLocation();
  const { id, title, brand, image, category, rating, price } = product || {};

  return (
    <div className="flex relative">
      <Link
        to={`/product/${id}`}
        className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className=" w-[282px] h-[300px] overflow-hidden">
          <img className="" src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>Price: ${price}</p>
          <button
            to={`/product/${id}`}
            className="btn text-lg text-purple-600 rounded-full border-2 border-purple-600"
          >
            View Details
          </button>
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
