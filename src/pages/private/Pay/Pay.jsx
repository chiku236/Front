import { Form, Formik } from "formik";
import React, { useState } from "react";
import { BiArrowBack, BiMinus, BiPlus, BiQrScan } from "react-icons/bi";
import {
  BillingContainer,
  Button,
  Label,
  Modal,
  TextInput,
  TextPassword,
} from "../../../components";
import * as Yup from "yup";

const Pay = () => {
  const PasswordSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
  });

  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [isChargesModalOpen, setIsChargesModalOpen] = useState(false);
  const [isCashPayModal, setCashPayModalOpen] = useState(false);

  return (
    <div className="flex flex-row">
      <div className="w-2/3 h-screen overflow-y-auto flex flex-col">
        <div className="flex flex-row justify-between items-center px-6 py-2 mb-5">
          <div className="flex flex-row items-center gap-3">
            <BiArrowBack className="text-[#3C81FC] h-8 w-8" />
            <h1 className="font-bold text-xl">Pay </h1>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex items-center">
              <input
                name="push-notifications"
                type="radio"
                className="focus:ring-[#3C81FC] h-4 w-4 text-[#3C81FC] border-gray-300"
              />
              <label className="ml-3 block text-md font-medium text-[#142243]">
                Walk in
              </label>
            </div>
            <div className="flex items-center">
              <input
                name="push-notifications"
                type="radio"
                className="focus:ring-[#3C81FC] h-4 w-4 text-[#3C81FC] border-gray-300"
              />
              <label className="ml-3 block text-md font-medium text-[#142243]">
                Delivery
              </label>
            </div>
          </div>
        </div>
        <div className="relative w-full shadow-xs px-6">
          <div className="flex absolute inset-y-0 left-0 items-center pl-8 pointer-events-none">
            <BiQrScan className="w-5 h-5 text-[#3C81FC]" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="border border-[#EAEFF8] text-gray-900 text-sm rounded-md block w-full pl-10 p-2.5 shadow-lg shadow-[#3C81FC]/10 focus:outline-none focus:border-[#142243] focus:ring-[#142243]"
            placeholder="Scan loyalty customer card or Enter Number"
          />
        </div>
        <div className="h-80 px-6"></div>
        <div className="items-end h-[22rem] border-t border-solid p-6">
          <div className="flex h-full">
            <div className="flex-1 bg-[#F2F5FB] p-6 rounded-lg shadow-md">
              <div className="flex flex-row justify-between items-center mb-4 text-sm">
                <div>Subtotal</div>
                <div>£20.00</div>
              </div>
              <div className="flex flex-row justify-between items-center mb-4 text-sm">
                <div>Discount</div>
                <div
                  className="flex flex-row items-center space-x-2 text-[#3C81FC]"
                  onClick={() => setIsDiscountModalOpen(true)}
                >
                  <BiPlus /> <span> Add Discount</span>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mb-4 text-sm">
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
              <hr className="mb-4" />
              <div className="flex flex-row justify-between items-center mt-4 text-sm">
                <div className="font-bold text-xl">Total</div>
                <div className="font-bold text-xl">£4.00</div>
              </div>
              <div className="flex flex-row justify-between items-center mt-4 text-sm">
                <div className="font-bold text-red-600 text-sm">Yet to Pay</div>
                <div className="font-bold text-red-600 text-sm">£4.00</div>
              </div>
            </div>
            <div className="flex-1 space-y-4 p-4">
              <button
                className={`bg-[#1267FF] py-3 text-white rounded-full w-full`}
                onClick={() => setCashPayModalOpen(true)}
              >
                Pay by cash
              </button>

              <Button text="Pay by card" isEnabled={true} />
              <Button text="Pay by bank" isEnabled={true} />
              <button
                className={`py-3 text-[#3C81FC] border border-[#3C81FC] rounded-full w-full`}
              >
                Pay later
              </button>
            </div>
          </div>
        </div>
        {isDiscountModalOpen && (
          <Modal setIsOpen={setIsDiscountModalOpen}>
            <div className="w-96 h-auto p-8">
              <h1 className="text-[#142243] font-bold text-xl">Add Discount</h1>
              <p className="text-[#525D68] text-sm">
                Please enter your password
              </p>

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

        {isCashPayModal && (
          <Modal setIsOpen={setCashPayModalOpen}>
            <div className="w-[40rem] h-auto p-8">
              <h1 className="text-[#142243] font-bold text-xl">Cash payment</h1>

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
                    <Form className="w-full">
                      <div className="flex justify-between items-center">
                        <div className="mb-6 w-[60%]">
                          <Label text="Amount" isRequired={true} />
                          <TextInput
                            placeholder="Enter discount amount"
                            name="Discount"
                          />
                        </div>
                        <div className="mb-6 mt-8 w-[30%]">
                          <Button
                            text="Pay Now"
                            isEnabled="true"
                            type="submit"
                          />
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="rounded-md shadow-lg shadow-[#3C81FC]/15 p-4">
                  <div className="mb-6 w-[40%] relative">
                    <label className={`text-sm mb-2`}>Change Amount</label>
                    <div>
                      <input
                        type="text"
                        className={`bg-[#EAEFF8] border border-[#DBE4F2] mt-2 p-2 h-10 rounded text-sm focus:outline-none focus:border-[#142243] focus:ring-[#142243] block w-1/2 sm:text-sm focus:ring-1`}
                        name="change_amount"
                        autoComplete="off"
                        value="6.00"
                      />
                      <p className="absolute top-10 left-[5.5rem]">£</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-row items-center space-x-4">
                      <div>
                        <p className="text-sm">1 Pence</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                      <div>
                        <p className="text-sm">2 Pence</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                      <div>
                        <p className="text-sm">5 Pence</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row items-center space-x-2">
                      <div>
                        <p className="text-sm">10 Pence</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <div>
                        <p className="text-sm">20 Pence</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <div>
                        <p className="text-sm">50 Pence</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row items-center space-x-4">
                      <div>
                        <p className="text-sm">1 Pound</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                      <div>
                        <p className="text-sm">2 Pound</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                      <div>
                        <p className="text-sm">5 Pound</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row items-center space-x-2">
                      <div>
                        <p className="text-sm">10 Pound</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <div>
                        <p className="text-sm">20 Pound</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <div>
                        <p className="text-sm">50 Pound</p>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="p-1 border rounded-full">
                          <BiPlus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                        <div className="mx-2">
                          <p className="text-sm">01</p>
                        </div>
                        <div className="p-1 border rounded-full">
                          <BiMinus className="h-4 w-4 text-[#3C81FC]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
      <BillingContainer />
    </div>
  );
};

export default Pay;
