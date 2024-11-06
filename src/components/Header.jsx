import { useEffect, useState } from 'react';
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { getAllCarts, getAllWishlists } from '../utilities/main';
const Header = () => {
	const [cart, setCart] = useState(0);
	const [wishlist, setWishlist] = useState(0);

	useEffect(() => {
		const carts = getAllCarts();
		const wishlists = getAllWishlists();
		setCart(carts.length);
		setWishlist(wishlists.length);
	}, []);
	console.log(cart, wishlist);
	return (
		<div>
			<div className="bg-[#9538E2] max-w-[1540px] min-h-[694px] flex flex-col items-center rounded-2xl p-6 mx-auto">
				{/* Navbar  */}
				<div className="navbar ">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 text-lg font-bold text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
							>
								<NavLink
									className={({ isActive }) =>
										`font-bold ${
											isActive
												? 'text-[#9538E2]'
												: 'hover:text-[#9538E2]'
										}`
									}
									to="/"
								>
									Home
								</NavLink>
								<NavLink
									className={({ isActive }) =>
										`font-bold ${
											isActive
												? 'text-[#9538E2]'
												: 'hover:text-[#9538E2]'
										}`
									}
									to="/Statistics"
								>
									Statistics
								</NavLink>
								<NavLink
									className={({ isActive }) =>
										`font-bold ${
											isActive
												? 'text-[#9538E2]'
												: 'hover:text-[#9538E2]'
										}`
									}
									to="/Dashboard"
								>
									Dasboard
								</NavLink>
							</ul>
						</div>
						<a className="btn btn-ghost text-xl text-white font-bold">
							Gadget Heaven
						</a>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal text-lg text-white px-1 gap-6">
							<NavLink
								className={({ isActive }) =>
									`font-bold ${
										isActive
											? 'bg-[#1a2070] p-2  rounded-xl'
											: 'hover:bg-[#1a2070] p-2  rounded-xl'
									}`
								}
								to="/"
							>
								Home
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`font-bold ${
										isActive
											? 'bg-[#1a2070] p-2 rounded-xl'
											: 'hover:bg-[#1a2070] p-2  rounded-xl'
									}`
								}
								to="/Statistics"
							>
								Statistics
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`font-bold ${
										isActive
											? 'bg-[#1a2070] p-2  rounded-xl'
											: 'hover:bg-[#1a2070] p-2  rounded-xl'
									}`
								}
								to="/Dashboard"
							>
								Dasboard
							</NavLink>
						</ul>
					</div>
					<div className="navbar-end gap-5">
					<div><IoCartOutline  className="text-5xl bg-zinc-200 p-2 rounded-full"></IoCartOutline><span className="relative -top-12 -right-10 bg-white text-lg font-bold p-2 rounded-full">{cart}</span></div>
					<div><FiHeart className="text-5xl bg-zinc-200 p-2 rounded-full"> </FiHeart><span className="relative -top-12 -right-10 bg-white text-lg font-bold p-2 rounded-full" >{wishlist}</span></div>
					</div>
				</div>

				<div className="hero-content  text-white">
					<div className="text-center">
						<h1 className="text-[56px] font-bold max-w-[1120px]">
							Upgrade Your Tech Accessorize with Gadget Heaven
							Accessories
						</h1>
						<p className="py-6 max-w-[796px] text-center mx-auto text-base">
							Explore the latest gadgets that will take your
							experience to the next level. From smart devices to
							the coolest accessories, we have it all!
						</p>
						<button className="btn bg-white rounded-full text-[#9538E2]">
							Shop Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
