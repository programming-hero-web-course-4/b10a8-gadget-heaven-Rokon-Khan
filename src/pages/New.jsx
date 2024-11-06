import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";

const New = () => {
  const data = useLoaderData();
  const [productImage, setProductImage] = useState([]);
  useEffect(() => {
    setProductImage(data);
  }, []);

  return (
    <div>
      <Helmet>
        <title>New Collection | Gadget Heaven</title>
      </Helmet>
      <div>
        <div className="w-full h-[250px] bg-[#9538E2] text-center text-white space-y-3  py-6">
          <h2 className="text-3xl font-bold">New Collections</h2>
          <p className=" max-w-[796px] mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12 max-w-[1320px] mx-auto">
        {productImage.map((product) => (
          <Item key={product.id} product={product}></Item>
        ))}
      </div>
    </div>
  );
};

export default New;
