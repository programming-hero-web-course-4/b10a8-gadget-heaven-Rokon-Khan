/* eslint-disable react/prop-types */
const Wishlist = ({product}) => {
  const {  title, image, description, price } = product;
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-5">Wislist</h3>
      <div className="flex gap-6 items-center border border-zinc-200 bg-white rounded-lg p-6">
        <div>
          <img className="w-[200px] h-[150px] rounded-lg" src={image} alt="" />
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p>{description}</p>
          <h4 className="text-lg font-bold">Price: ${price}</h4>
          <button className="btn bg-[#9538E2] text-white hover:text-[#9538E2] hover:bg-white text-xl">Add to Cart</button>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
