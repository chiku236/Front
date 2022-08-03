import React from "react";

const ProductCard = ({ image, product_name, mrp, avail_qnt }) => {
  return (
    <div className="h-48 flex flex-col justify-between  shadow-lg shadow-gray-300/50 border border-gray-100 px-2 pt-2 pb-4 rounded-lg mb-4">
      <img
        src={image}
        alt={product_name}
        className="w-full h-24 object-cover rounded-md mb-3"
      />
      <p className="text-slate-900 text-sm font-bold mb-2">{product_name}</p>
      <span className="text-[#525D68] text-xs">MRP: {mrp}</span>
    </div>
  );
};

export default ProductCard;
