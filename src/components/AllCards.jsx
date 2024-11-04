import React from "react";

const AllCards = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-clos-2 gap-10">
        <div className="card shadow-xl gap-6">
          <button className="btn">All</button>
          <button className="btn">Laptops</button>
          <button className="btn">Accesories</button>
          <button className="btn">Phones</button>
          <button className="btn">Smart Watch</button>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
