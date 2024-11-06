const Item = ({ product }) => {
  console.log(product);
  const { image, title } = product;
  return (
    <div>
      <div className=" max-w-[200px] h-[300px] shadow-xl rounded-xl px-6 py-5 text-center">
        <img src={image} alt="" />
        <h3 className="text-2xl font-bold">{title}</h3>
        <h2></h2>
      </div>
    </div>
  );
};

export default Item;
