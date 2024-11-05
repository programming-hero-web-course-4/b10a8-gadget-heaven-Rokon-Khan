const Cart = ({ product }) => {
  const { id, title, image, description, price } = product;
  return (
    <div className="mb-6">
      <div className="flex gap-6 items-center border border-zinc-200 bg-white rounded-lg">
        <div>
          <img className="w-[200px] h-[150px] rounded-lg" src={image} alt="" />
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p>{description}</p>
          <h4 className="text-lg font-bold">Price: ${price}</h4>
        </div>
        <div className=" relative -right-[300px] -top-10">
          <button className="btn">
            <img
              className="w-[30px]"
              src="https://img.icons8.com/?size=100&id=nTkpTS1GZpkb&format=png&color=000000"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
