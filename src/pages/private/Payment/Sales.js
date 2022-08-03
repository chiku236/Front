import React, { useState } from "react";
import Avatar from "react-avatar";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sales = () => {
  const [dropDownOpened, setDropDownOpened] = useState(false);
  const openDropDown = () => setDropDownOpened(!dropDownOpened);

  return (
    <div className="flex flex-row h-screen">
      <div className="w-full overflow-y-auto flex flex-col">
        <div className="flex flex-row justify-between items-center h-14 px-6 py-2">
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-bold text-xl">Payment</h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div
              className="flex justify-end items-center space-x-2 py-2 cursor-pointer"
              onClick={openDropDown}
            >
              <Avatar name="Kunal" round={true} size="40" className="text-xs" />
              <span>Kunal Dholiya</span>
              <button className="relative z-[-10] block rounded-md bg-white p-2 focus:outline-none">
                <BiChevronDown className="h-6 w-6 text-gray-800" />
              </button>
            </div>
          </div>
          {dropDownOpened ? (
            <div className="absolute right-0 mt-28 mr-8 py-4 w-48 bg-white rounded-md shadow-xl z-20">
              <Link
                to=""
                className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
              >
                Sign Out
              </Link>
            </div>
          ) : (
            <>

            </>
          )}
        </div>
        <div>
          <div className="block">
            <h6 className="customer-type">Select customer type</h6>
            <br></br>
            <br></br>
            <div className="buttons">
              <button className="sales">Sales</button>
              <button className="purchase">Purchase</button>
              <button className="expense">Expense</button>
              <button className="cash">Cash in hand</button>
            </div>
          </div>
          <br></br>
          <div>
            <h6 className="payment-type">Select payment type</h6>
            <br></br>
            <br></br>
            <div className="button1">
              <button className="advance">Advance payment</button>
              <button className="against">Against bill</button>
            </div>

          </div>
          <br></br>
          <div className="choose">
            <label className="Customers">Customer*</label>
            <br></br>
            <select id="customers" name="Customers">
              <option >Select Customer</option>
              <option >Customer 1</option>
              <option >Customer 2</option>
              <option >Customer 3</option>
              <option >Customer 4</option>
              <option >Customer 5</option>
            </select>

            <label className="method">Payment mode*</label>
            <br></br>
            <select id="method" name="method">
              <option >Select payment mode</option>

            </select>

            <label className="enter">Amount*</label>
            <br></br>
            <input type="number" id="amount" placeholder="Enter amount" />

          </div>

          <br></br>

          <label id="remark">Remark*</label>
          <input className="desc" placeholder="Add description" required />

          <br></br>
          <br></br>

          <div className="saca">
            <button className="save">Save</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sales;
