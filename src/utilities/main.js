import toast from "react-hot-toast";
// get all cart product from local storage
const getAllCarts = () => {
  //   const all = localStorage.getItem("carts");
  const all = localStorage.getItem("carts");
  const carts = JSON.parse(all);
  //   console.log(carts);
  if (all) {
    const carts = JSON.parse(all);
    // console.log(carts);
    return carts;
  } else {
    // console.log([]);
    return [];
  }
};

//  Add Product to local Storage
const addTOCart = (product) => {
  const carts = getAllCarts();
  const isExist = carts.find((item) => item.id == product.id);
  if (isExist) return toast.error("This Product already Add To Cart!");
  carts.push(product);
  localStorage.setItem("carts", JSON.stringify(carts));
  toast.success("Add to CartSuccessfully added!");
};

// Remove product from local Storage

export { addTOCart, getAllCarts };
