import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import {
  BiArchiveIn,
  BiChevronDown,
  BiDotsVerticalRounded,
  BiMinus,
  BiPauseCircle,
  BiPlus,
  BiTrashAlt,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  Label,
  TextPassword,
  TextInput,
} from "./../../components";
import { useLocation } from "react-router-dom";

import * as Yup from "yup";

const BillingContainer = () => {
  const location = useLocation();

  const PasswordSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
  });

  const [dropDownOpened, setDropDownOpened] = useState(false);
  const openDroopDown = () => setDropDownOpened(!dropDownOpened);

  const [cartItems, setCartItems] = useState([]);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [isChargesModalOpen, setIsChargesModalOpen] = useState(false);

  useEffect(() => {
    const items = [
      {
        id: 1,
        image: "https://static.toiimg.com/photo/69928440.cms",
        product_name: "Ginger",
        mrp: "£5.00 / 1kg",
        qnt: "01",
      },
      {
        id: 2,
        image:
          "https://assets.epicurious.com/photos/58d3fed8e2c8295cfbf4a52f/5:4/w_1665,h_1332,c_limit/ginger_root_pile_23032017.jpg",
        product_name: "Drumstick",
        mrp: "£2.00 / 1kg",
        qnt: "05",
      },
      {
        id: 3,
        image:
          "https://assets.epicurious.com/photos/58d3fed8e2c8295cfbf4a52f/5:4/w_1665,h_1332,c_limit/ginger_root_pile_23032017.jpg",
        product_name: "Drumstick",
        mrp: "£2.00 / 1kg",
        qnt: "05",
      },
      {
        id: 4,
        image:
          "https://assets.epicurious.com/photos/58d3fed8e2c8295cfbf4a52f/5:4/w_1665,h_1332,c_limit/ginger_root_pile_23032017.jpg",
        product_name: "Drumstick",
        mrp: "£2.00 / 1kg",
        qnt: "05",
      },
      {
        id: 5,
        image:
          "https://assets.epicurious.com/photos/58d3fed8e2c8295cfbf4a52f/5:4/w_1665,h_1332,c_limit/ginger_root_pile_23032017.jpg",
        product_name: "Drumstick",
        mrp: "£2.00 / 1kg",
        qnt: "05",
      },
      {
        id: 6,
        image: "https://static.toiimg.com/photo/69928440.cms",
        product_name: "Ginger",
        mrp: "£5.00 / 1kg",
        qnt: "01",
      },
    ];
    setCartItems(items);
  }, []);

  return (
    <div className="h-screen overflow-y-auto border w-1/2">
      {/* Navbar with dropdown */}
      <div
        className="flex justify-end items-center space-x-2 py-2 cursor-pointer px-6"
        onClick={openDroopDown}
      >
        <Avatar name="Kunal" round={true} size="40" className="text-xs" />
        <span>Kunal Dholiya</span>
        <button className="relative z-[-10] block rounded-md bg-white p-2 focus:outline-none">
          <BiChevronDown className="h-6 w-6 text-gray-800" />
        </button>
      </div>
      {dropDownOpened ? (
        <div className="absolute right-0 -mt-2 mr-10 py-4 w-48 bg-white rounded-md shadow-xl z-20">
          <Link
            to=""
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Sign Out
          </Link>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-row justify-between items-center py-3 px-6">
        <h1 className="font-bold text-xl">Bills</h1>
        <div className="flex space-x-4">
          <div>
            <BiTrashAlt className="h-7 w-7 text-[#3C81FC]" />
          </div>
          <div>
            <BiPauseCircle className="h-7 w-7 text-[#3C81FC]" />
          </div>
          <div>
            <BiArchiveIn className="h-7 w-7 text-[#3C81FC]" />
          </div>
        </div>
      </div>

      <div
        className={`px-6 ${
          location.pathname === "/dashboard" ? "h-[365px]" : null
        } overflow-y-auto mt-5`}
      >
        {cartItems.map((ci) => (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-row items-center space-x-2">
              <img
                src={ci.image}
                alt={ci.product_name}
                className="w-16 rounded-lg"
              />
              <div className="flex flex-col gap-y-1">
                <h1 className="font-bold">{ci.product_name}</h1>
                <p className="text-sm text-gray-600">MRP: {ci.mrp}</p>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2">
              <div className="p-2 border rounded-full">
                <BiPlus className="h-4 w-4 text-[#3C81FC]" />
              </div>
              <div>
                <p>01</p>
              </div>
              <div className="p-2 border rounded-full">
                <BiMinus className="h-4 w-4 text-[#3C81FC]" />
              </div>
              <div className="">
                <BiDotsVerticalRounded className="h-4 w-4 text-[#3C81FC]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {location.pathname === "/dashboard" && (
        <div className="bg-[#DBE4F2] py-3 px-6">
          <div className="flex flex-row justify-between items-center mb-3 text-sm">
            <div>Subtotal</div>
            <div>£20.00</div>
          </div>
          <div className="flex flex-row justify-between items-center mb-3 text-sm">
            <div>Discount</div>
            <div
              className="flex flex-row items-center space-x-2 text-[#3C81FC]"
              onClick={() => setIsDiscountModalOpen(true)}
            >
              <BiPlus /> <span> Add Discount</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mb-3 text-sm">
            <div>Charges</div>
            <div
              className="flex flex-row items-center space-x-2 text-[#3C81FC]"
              onClick={() => setIsChargesModalOpen(true)}
            >
              <BiPlus /> <span> Add Charges</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mb-4 text-sm">
            <div>Taxes (20%)</div>
            <div>£4.00</div>
          </div>
          <Button text="Pay - £24.00" isEnabled={true} />
        </div>
      )}

      {isDiscountModalOpen && (
        <Modal setIsOpen={setIsDiscountModalOpen}>
          <div className="w-96 h-auto p-8">
            <h1 className="text-[#142243] font-bold text-xl">Add Discount</h1>
            <p className="text-[#525D68] text-sm">Please enter your password</p>

            <div className="mt-6">
              <Formik
                initialValues={{
                  user_id: "",
                  password: "",
                }}
                validationSchema={PasswordSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    {/* First check password */}
                    <div className="mb-6">
                      <Label text="Password" isRequired={true} />
                      <TextPassword
                        placeholder="**********"
                        name="password"
                        isError={errors.password && touched.password}
                      />
                      {errors.password && touched.password ? (
                        <span className="text-xs text-red-500">
                          {errors.password}
                        </span>
                      ) : null}
                    </div>
                    {/* If it is valid then below UI */}
                    <div>
                      <p className="text-[#142243] text-sm mb-2">
                        Choose discount method
                      </p>
                      <div className="flex flex-row gap-4 items-center mb-5">
                        <div className="flex items-center">
                          <input
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-[#3C81FC] h-4 w-4 text-[#3C81FC] border-gray-300"
                          />
                          <label className="ml-3 block text-md font-medium text-[#142243]">
                            Percentage
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-[#3C81FC] h-4 w-4 text-[#3C81FC] border-gray-300"
                          />
                          <label className="ml-3 block text-md font-medium text-[#142243]">
                            Amount
                          </label>
                        </div>
                      </div>

                      <div className="mb-6">
                        <Label text="Discount" isRequired={true} />
                        <TextInput
                          placeholder="Enter discount amount"
                          name="Discount"
                        />
                      </div>
                    </div>
                    <div className="">
                      <Button text="Submit" isEnabled="true" type="submit" />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Modal>
      )}

      {isChargesModalOpen && (
        <Modal setIsOpen={setIsChargesModalOpen}>
          <div className="w-96 h-auto p-8">
            <h1 className="text-[#142243] font-bold text-xl">
              Add Additional charge
            </h1>

            <div className="mt-6">
              <Formik
                initialValues={{
                  user_id: "",
                  password: "",
                }}
                validationSchema={PasswordSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => <Form></Form>}
              </Formik>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BillingContainer;
