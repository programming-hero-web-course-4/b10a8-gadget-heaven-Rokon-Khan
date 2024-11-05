import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import { addFavorite, getAllFavorites } from "../utils";
const cardDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  //   const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const singleData = data.find((product) => product.id == id);
    setProduct(singleData);
    // const favorites = getAllFavorites();
    // const isExist = favorites.find((item) => item.id == singleData.id);
    // if (isExist) {
    //   setIsFavorite(true);
    // }
  }, [data, id]);

  const {
    title,
    brand,
    image,
    description,
    specification,
    category,
    rating,
    price,
  } = product;

  //   Handle favorite btn click
  const handleFavorite = (product) => {
    addFavorite(product);
    setIsFavorite(true);
  };
  return (
    <div className="my-12">
      {/* Description */}
      <h1 className="text-2xl md:text-4xl font-thin mb-6">{description}</h1>
      {/* Image */}
      <div className="w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      {/* Title and Favorite Button */}
      <div className="flex justify-between items-center my-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-thin">{title}</h1>
          <p className="text-base">Brand: {brand}</p>
          <p className="text-base">Rating: {rating}</p>
        </div>
        <div>
          {/* <button
            disabled={isFavorite}
            onClick={() => handleFavorite(product)}
            className="btn btn-warning"
          >
            Add Favorite
          </button> */}
        </div>
      </div>
      {/* Making Process */}
      <div className="my-6">
        {/* <h2 className="text-2xl font-thin">Making Process:</h2> */}
        <p className="text-base ">{category}</p>
      </div>

      <div className="my-6 flex justify-between items-center">
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-2xl font-thin">Specification:</h1>
            <ul className="text-xl ml-12">
              {specification &&
                specification.map((item, i) => (
                  <li className="list-disc" key={i}>
                    {item}
                  </li>
                ))}
            </ul>
            <h1 className="text-2xl font-thin">Specification:</h1>
            {/* <ul className="text-xl ml-12">
              {specification &&
                Object.keys().map((n, i) => (
                  <li className="list-disc" key={i}>
                    {n}: {specification[n]}
                  </li>
                ))}
            </ul> */}
          </div>
        </div>
        <div className="flex-1">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default cardDetails;
