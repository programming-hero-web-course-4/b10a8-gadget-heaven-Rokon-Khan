import { Link } from "react-router-dom";
const Categories = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 gap-5 p-6">
      {categories.map((category) => (
        <Link
          key={category.category}
          to={`/category/${category.category}`}
          className="btn"
        >
          {category.category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
