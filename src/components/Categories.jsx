import { NavLink } from "react-router-dom";
const Categories = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 gap-5 p-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-bold ${
            isActive
              ? "text-white bg-[#9538E2] btn rounded-full"
              : " btn rounded-full hover:text-[#9538E2]"
          }`
        }
      >
        All
      </NavLink>
      {categories.map((category) => (
        // <Link
        //   key={category.category}
        //   to={`/category/${category.category}`}
        //   className="btn rounded-full"
        // >
        //   {category.category}
        // </Link>
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          className={({ isActive }) =>
            `font-bold ${
              isActive
                ? "text-white bg-[#9538E2] btn rounded-full"
                : " btn rounded-full hover:text-[#9538E2]"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
