import React from 'react';

// ProductCard component definition
const ProductCard = ({ name, price, status, image }) => {
  const statusStyles = status === "In Stock" 
    ? "bg-teal-100 text-teal-700" 
    : "bg-rose-100 text-rose-700";

  return (
    <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 flex flex-col items-start w-full transition-transform duration-200 hover:-translate-y-1">
      <div className="bg-white border border-amber-200 rounded-xl w-full aspect-square flex items-center justify-center mb-5">
        <span className="text-3xl">{image || "📦"}</span>
      </div>

      <h3 className="text-xl font-semibold text-slate-800 mb-1">{name}</h3>
      <p className="text-lg font-bold text-slate-700 mb-4">${price}</p>

      <div className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles}`}>
        {status}
      </div>
    </div>
  );
};

export default ProductCard;