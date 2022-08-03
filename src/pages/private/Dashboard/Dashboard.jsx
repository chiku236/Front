import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { BiQrScan, BiReset } from "react-icons/bi";
import {
  BillingContainer,
  CategoryCard,
  ProductCard,
} from "../../../components";
import { randomColor } from "../../../components/Utils/utils";

const Dashboard = () => {
  const categoryList = [
    {
      id: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0389/1006/6733/products/Indian_Farm_Box_2_1600x_183d6b52-50e1-4744-922f-6d9d5aeb505d_1602x.png",
      category: "Indian Veg",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/photos/groceries-picture-id171302954?k=20&m=171302954&s=612x612&w=0&h=kDpFXA8IoG22Uxog3YUmWvzBRzwyibd6r4S2v5z-Mno=",
      category: "Grocery",
    },
    {
      id: 3,
      image:
        "https://cdn.shopify.com/s/files/1/0389/1006/6733/products/Indian_Farm_Box_2_1600x_183d6b52-50e1-4744-922f-6d9d5aeb505d_1602x.png",
      category: "Ice cream",
    },
    {
      id: 4,
      image:
        "https://cdn.shopify.com/s/files/1/0389/1006/6733/products/Indian_Farm_Box_2_1600x_183d6b52-50e1-4744-922f-6d9d5aeb505d_1602x.png",
      category: "Eng Veg",
    },
    {
      id: 5,
      image:
        "https://cdn.shopify.com/s/files/1/0389/1006/6733/products/Indian_Farm_Box_2_1600x_183d6b52-50e1-4744-922f-6d9d5aeb505d_1602x.png",
      category: "Ghee & Oil",
    },
    {
      id: 6,
      image:
        "https://cdn.shopify.com/s/files/1/0389/1006/6733/products/Indian_Farm_Box_2_1600x_183d6b52-50e1-4744-922f-6d9d5aeb505d_1602x.png",
      category: "Bakery",
    },
    {
      id: 7,
      image:
        "https://cdn.shopify.com/s/files/1/0389/1006/6733/products/Indian_Farm_Box_2_1600x_183d6b52-50e1-4744-922f-6d9d5aeb505d_1602x.png",
      category: "Indian Veg",
    },
    {
      id: 8,
      image:
        "https://cdn.shopify.com/s/files/1/0389/1006/6733/products/Indian_Farm_Box_2_1600x_183d6b52-50e1-4744-922f-6d9d5aeb505d_1602x.png",
      category: "Indian Veg",
    },
    {
      id: 9,
      image:
        "https://cdn.shopify.com/s/files/1/0389/1006/6733/products/Indian_Farm_Box_2_1600x_183d6b52-50e1-4744-922f-6d9d5aeb505d_1602x.png",
      category: "Indian Veg",
    },
    {
      id: 10,
      image:
        "https://cdn.shopify.com/s/files/1/0389/1006/6733/products/Indian_Farm_Box_2_1600x_183d6b52-50e1-4744-922f-6d9d5aeb505d_1602x.png",
      category: "Indian Veg",
    },
  ];

  const productList = [
    {
      id: "1",
      image:
        "https://assets.epicurious.com/photos/58d3fed8e2c8295cfbf4a52f/5:4/w_1665,h_1332,c_limit/ginger_root_pile_23032017.jpg",
      product_name: "Ginger",
      mrp: "£5.00 / 1kg",
      avail_qnt: "50 Kg",
    },
    {
      id: "2",
      image: "https://static.toiimg.com/photo/69928440.cms",
      product_name: "Drumstick",
      mrp: "£5.00 / 1kg",
      avail_qnt: "50 Kg",
    },
    {
      id: "3",
      image:
        "https://jariboti.pk/wp-content/uploads/2020/03/Turmeric-Haldi-rohanishop.png",
      product_name: "Haldi",
      mrp: "£5.00 / 1kg",
      avail_qnt: "50 Kg",
    },
    {
      id: "4",
      image:
        "https://cdn.shopify.com/s/files/1/0253/9824/7501/products/AmulTriconeBlackCurrentIceCreamRealMilkRealIceCream750ml_750mlFree_1_580x.jpg",
      product_name: "Amul Ice cream",
      mrp: "£5.00 / 1kg",
      avail_qnt: "50 Kg",
    },
    {
      id: "5",
      image: "https://5.imimg.com/data5/IP/LB/MY-7778582/amul-ghee-500x500.jpg",
      product_name: "Amul Ghee",
      mrp: "£5.00 / 1kg",
      avail_qnt: "50 Kg",
    },
    {
      id: "6",
      image:
        "https://rukminim1.flixcart.com/image/416/416/jv5k2a80/hair-oil/p/g/r/120-kesh-kanti-hair-oil-120ml-pack-of-1-patanjali-original-imafdrtkpqngr8df.jpeg?q=70",
      product_name: "Patanjali Kesh kanti",
      mrp: "£5.00 / 1kg",
      avail_qnt: "50 Kg",
    },
    {
      id: "7",
      image: "https://img.tradeford.com/pimages/l/9/962249.jpg",
      product_name: "Penut bar",
      mrp: "£5.00 / 1kg",
      avail_qnt: "50 Kg",
    },
    {
      id: "8",
      image:
        "https://assets.epicurious.com/photos/58d3fed8e2c8295cfbf4a52f/5:4/w_1665,h_1332,c_limit/ginger_root_pile_23032017.jpg",
      product_name: "Penut bar",
      mrp: "£5.00 / 1kg",
      avail_qnt: "50 Kg",
    },
    {
      id: "9",
      image:
        "https://assets.epicurious.com/photos/58d3fed8e2c8295cfbf4a52f/5:4/w_1665,h_1332,c_limit/ginger_root_pile_23032017.jpg",
      product_name: "Penut bar",
      mrp: "£5.00 / 1kg",
      avail_qnt: "50 Kg",
    },
  ];

  const searchRef = useRef();
  const [searchOption, setSearchOption] = useState(false);

  const handleClickOutside = (e) => {
    if (!searchRef.current.contains(e.target)) {
      setSearchOption(false);
    }
  };

  useEffect(() => {
    document.body.requestFullscreen()
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="flex flex-row">
      <div className="w-2/3 px-6 h-screen overflow-y-auto">
        <div className="flex flex-row justify-between items-center py-2 mb-4">
          <h1 className="font-bold text-xl">Choose Department</h1>
          <div className="relative w-1/2 shadow-sm">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <BiQrScan className="w-5 h-5 text-[#3C81FC]" />
            </div>
            <input
              ref={searchRef}
              type="text"
              id="simple-search"
              className="border border-[#EAEFF8] text-gray-900 text-sm rounded-md block w-full pl-10 p-2.5 shadow-lg shadow-[#3C81FC]/10 focus:outline-none focus:border-[#142243] focus:ring-[#142243]"
              placeholder="Scan barcode or Enter product number"
              onFocus={() => setSearchOption(!searchOption)}
            />
            {searchOption ? (
              <div className="absolute right-0 p-4 mt-2 w-full bg-white rounded-md shadow-lg shadow-[#3C81FC]/20 z-20">
                <h1 className="text-md font-bold">Recent search</h1>
                <div className="flex flex-row gap-2 items-center mt-4">
                  <BiReset /> <p>Haldi</p>
                </div>
                <div className="flex flex-row gap-2 items-center mt-4">
                  <BiReset /> <p>Amul Ice cream</p>
                </div>
                <div className="flex flex-row gap-2 items-center mt-4">
                  <BiReset /> <p>Alovera Juice</p>
                </div>
                <div className="flex flex-row gap-2 items-center mt-4">
                  <BiReset /> <p>Penut bar</p>
                </div>
                <div className="flex flex-row gap-2 items-center mt-4">
                  <BiReset /> <p>Papdi</p>
                </div>
                <div className="flex flex-row gap-2 items-center mt-4">
                  <BiReset /> <p>Ghee & Oil</p>
                </div>
                {/* <Link
                  to=""
                  className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                  Sign Out
                </Link> */}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* Categories */}
        <div className="overflow-x-scroll flex flex-row">
          {categoryList.map((category) => (
            <CategoryCard
              key={category.id}
              image={category.image}
              name={category.category}
              borderColor={randomColor()}
            />
          ))}
        </div>

        {/* Product listing */}
        <div className="flex flex-row justify-between items-center py-3">
          <h1 className="font-bold text-lg">All Products</h1>
          <span className="text-sm">580 Products</span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              product_name={product.product_name}
              mrp={product.mrp}
              avail_qnt={product.avail_qnt}
            />
          ))}
        </div>
      </div>
      <BillingContainer />
    </div>
  );
};

export default Dashboard;
