import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Cart from '../components/Cart';
import Wishlist from '../components/Wishlist';
import {
	getAllCarts,
	getAllWishlists,
	removeAddToCart,
} from '../utilities/main';

const Dashboard = () => {
	const [products, setProducts] = useState([]);
	const [wishlists, setWishlists] = useState([]);
	const [open, setOpen] = useState(true);
	const [change, setChange] = useState(true);
	const [price, setPrice] = useState(0);

	const [cart, setCart] = useState(products.length);
	const [wishlist, setWishlist] = useState(wishlists.length);

	useEffect(() => {
		const load = async () => {
			const carts = await getAllCarts();
			const wishlists = await getAllWishlists();
			setProducts(carts);
			setWishlists(wishlists);
			setCart(carts.length);
			setWishlist(wishlists.length);

			const total = carts.reduce(
				(acc, product) => acc + product.price,
				0
			);
			setPrice(total);
		};
		load();
	}, [change]);
	console.log(cart, wishlist);
	const handleRemove = (product) => {
		removeAddToCart(product.id);
		const carts = getAllCarts();
		const total = carts.reduce((acc, product) => acc + product.price, 0);
		setPrice(total);
		setProducts(carts);
	};
	const handleSort = () => {
		// Sort products by price in Descending Order
		const newProducts = [...products];
		newProducts.sort((a, b) => b.price - a.price);
		setProducts(newProducts);
	};

	return (
		<div>
			<div className="w-full h-[250px] bg-[#9538E2] text-center text-white space-y-3  py-6">
				<h2 className="text-3xl font-bold">Dashboard</h2>
				<p className=" max-w-[796px] mx-auto">
					Explore the latest gadgets that will take your experience to
					the next level. From smart devices to the coolest
					accessories, we have it all!
				</p>
				<div className="">
					<button
						className={`btn mr-6 text-lg font-bold rounded-full  ${
							open ? 'text-white bg-[#9538E2]' : ''
						}`}
						onClick={() => setOpen(true)}
					>
						Cart
					</button>
					<button
						className={`btn mr-6 text-lg font-bold rounded-full  ${
							!open ? 'text-white bg-[#9538E2]' : ''
						}`}
						onClick={() => setOpen(false)}
					>
						Wishlish
					</button>
					{/* <NavLink
            className={({ isActive }) =>
              `font-bold ${
                isActive ? "text-[#9538E2]" : "hover:text-[#9538E2]"
              }`
            }
            to="/dashboard/cart"
          >
            Cart
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${
                isActive ? "text-[#9538E2]" : "hover:text-[#9538E2]"
              }`
            }
            to="/dashboard/wishlist"
          >
            Wishlist
          </NavLink> */}
				</div>
			</div>
			{/* For Cart Components */}
			{open && (
				<div className={`max-w-[1024px] py-4 rounded-xl mx-auto`}>
					
					<div className="flex justify-between items-center mb-6">
					<h3 className="text-2xl font-bold mb-5">Carts</h3>
						{/* <h3 className="text-2xl font-bold mb-5">Cart</h3> */}
						<div className="flex justify-between items-center gap-6">
							<h3 className="text-xl font-bold">
								Total Cost:{price}
							</h3>
							<button className="btn" onClick={handleSort}>
								Sort By Price
							</button>
							<button className="btn">Purchase</button>
						</div>
					</div>
					{products.length > 0 &&
						products.map((product) => (
							<Cart
								handleRemove={handleRemove}
								key={product.id}
								product={product}
								handleSort={handleSort}
							></Cart>
						))}
				</div>
			)}
			{/* For Wishlist Component */}
			{!open && (
				<div className="max-w-[1024px] py-4 rounded-xl mx-auto">
					<h3 className="text-2xl font-bold mb-5">Wislist</h3>

					{wishlists.length > 0 &&
						wishlists.map((product) => (
							<Wishlist
								change={change}
								setChange={setChange}
								key={product.id}
								product={product}
							></Wishlist>
						))}
				</div>
			)}
			<Outlet></Outlet>
		</div>
	);
};

export default Dashboard;
