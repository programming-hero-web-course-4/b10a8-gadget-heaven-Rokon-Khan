/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { addTOCart, addTOWishList } from '../utilities/main';
// import { addFavorite, getAllFavorites } from "../utils";
const cardDetails = () => {
	const data = useLoaderData();
	// console.log(data);
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
	const handleAddToCart = (product) => {
		// addFavorite(product);
		// setIsFavorite(true);
		addTOCart(product);
		// getAllCarts();
	};
	const handleAddToWishlist = (product) => {
		addTOWishList(product);
	};
	return (
		<div>
			{/* React Helmet */}
			<Helmet>
				<title>Card Details - Gadget Heaven</title>
			</Helmet>
			{/* React Helmet */}
			<Navbar></Navbar>
			<div className="w-full h-[463px] bg-[#9538E2] text-center text-white space-y-3  py-10">
				<h2 className="text-3xl font-bold">Product Details</h2>
				<p className=" max-w-[796px] mx-auto">
					Explore the latest gadgets that will take your experience to
					the next level. From smart devices to the coolest
					accessories, we have it all!
				</p>
			</div>

			<div className="hero max-w-[1020px] bg-base-200 mx-auto rounded-xl relative -top-[200px]">
				<div className="hero-content flex-col lg:flex-row gap-6">
					<img
						className="max-w-[424px] max-h-[503px] rounded-2xl"
						src={image}
					/>
					<div className="space-y-3">
						<h3 className="text-3xl semi-bold">{title}</h3>
						<p className="text-lg text-gray-600 font-regular">
							Price: ${price}
						</p>
						<span className="badge bg-[rgba(47,156,8,0.1)] p-3 font-bold">
							In Stock
						</span>
						<h1 className="text-2xl md:text-lg">{description}</h1>
						<div className="flex flex-col justify-center gap-6">
							<h1 className="text-2xl font-bold">
								Specification:
							</h1>
							<ul className="text-xl ml-12">
								{specification &&
									specification.map((item, i) => (
										<li className="list-disc" key={i}>
											{item}
										</li>
									))}
							</ul>
						</div>
						<h4 className="text-xl font-bold">
							Rating{' '}
							<i className="text-yellow-300 fa-solid fa-star"></i>
						</h4>
						<div>
							<i className="text-yellow-300 fa-solid fa-star"></i>
							<i className="text-yellow-300 fa-solid fa-star"></i>
							<i className="text-yellow-300 fa-solid fa-star"></i>
							<i className="text-yellow-300 fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
							{rating}
						</div>
						<button
							to="/dashboard"
							onClick={() => handleAddToCart(product)}
							className="btn bg-[#9538E2] text-white"
						>
							Add To Cart
							<i className="fa-solid fa-cart-shopping text-2xl "></i>
						</button>
						<button
							to="/dashboard"
							onClick={() => handleAddToWishlist(product)}
							className="btn"
						>
							<i className="fa-regular fa-heart text-2xl bg-white p-3 rounded-full"></i>
						</button>
						<Toaster></Toaster>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default cardDetails;
