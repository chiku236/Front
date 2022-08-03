import React, { useState } from "react";
import Avatar from "react-avatar";
import {
  BiCalendar,
  BiCaretDown,
  BiCaretUp,
  BiChevronDown,
  BiFilter,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import Icon1 from "../../../assets/o1.svg";
import Icon2 from "../../../assets/o2.svg";
import Icon3 from "../../../assets/o3.svg";
import Icon4 from "../../../assets/o4.svg";
import NoOrder from "../../../assets/no-order.svg";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const Order = () => {
  const [dropDownOpened, setDropDownOpened] = useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [isCalenderShow, setCalenderShow] = useState(false);

  const openDropDown = () => setDropDownOpened(!dropDownOpened);

  const orders = [
    {
      key: "Kunal",
    },
  ];

  const data = React.useMemo(
    () => [
      {
        col1: "001",
        col2: "ORD001",
        col3: "12 Apr 2022",
        col4: "Mahima Jain",
        col5: "£25.00",
        col6: "",
        col7: "Walk in",
        col8: "Cash",
      },
      {
        col1: "002",
        col2: "ORD002",
        col3: "12 Apr 2022",
        col4: "Tarak Gada",
        col5: "£20.00",
        col6: "",
        col7: "Walk in",
        col8: "Cash / Bank",
      },
      {
        col1: "003",
        col2: "ORD003",
        col3: "12 Apr 2022",
        col4: "Sonali Sharma",
        col5: "£25.00",
        col6: "",
        col7: "Walk in",
        col8: "Cash",
      },
      {
        col1: "004",
        col2: "ORD004",
        col3: "12 Apr 2022",
        col4: "Harshal Modi",
        col5: "£25.00",
        col6: "",
        col7: "Walk in",
        col8: "Cash",
      },
      {
        col1: "005",
        col2: "ORD005",
        col3: "12 Apr 2022",
        col4: "Gopal Patel",
        col5: "£25.00",
        col6: "",
        col7: "Walk in",
        col8: "Cash",
      },
      {
        col1: "006",
        col2: "ORD006",
        col3: "12 Apr 2022",
        col4: "Ashik Mahommad",
        col5: "£25.00",
        col6: "",
        col7: "Walk in",
        col8: "Cash",
      },
      {
        col1: "007",
        col2: "ORD001",
        col3: "12 Apr 2022",
        col4: "John Doe",
        col5: "£25.00",
        col6: "",
        col7: "Walk in",
        col8: "Cash",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "#No",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Invoice No",
        accessor: "col2",
      },
      {
        Header: "Date",
        accessor: "col3",
      },
      {
        Header: "Customer Name",
        accessor: "col4",
      },
      {
        Header: "Total Amount",
        accessor: "col5",
      },
      {
        Header: "Due Amount",
        accessor: "col6",
      },
      {
        Header: "Order type",
        accessor: "col7",
      },
      {
        Header: "Payment mode",
        accessor: "col8",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  return (
    <div className="flex flex-row h-screen">
      <div className="w-full overflow-y-auto flex flex-col">
        <div className="flex flex-row justify-between items-center h-14 px-6 py-2">
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-bold text-xl">Orders</h1>
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
            <></>
          )}
        </div>
        <div className="bg-[#F8F8F8] h-screen">
          <div className="grid grid-cols-4 gap-4 m-6">
            <div className="bg-white flex flex-row px-6 py-8 space-x-4">
              <img src={Icon1} alt="total_order" />
              <div>
                <h1 className="font-bold">00</h1>
                <p className="text-sm text-gray-500">Total Order</p>
              </div>
            </div>
            <div className="bg-white flex flex-row px-6 py-8 space-x-4">
              <img src={Icon2} alt="total_amount" />
              <div>
                <h1 className="font-bold">00</h1>
                <p className="text-sm text-gray-500">Total Amount</p>
              </div>
            </div>
            <div className="bg-white flex flex-row px-6 py-8 space-x-4">
              <img src={Icon3} alt="due_amount" />
              <div>
                <h1 className="font-bold">00</h1>
                <p className="text-sm text-gray-500">Due Amount</p>
              </div>
            </div>
            <div className="bg-white flex flex-row px-6 py-8 space-x-4">
              <img src={Icon4} alt="walk_in_customer" />
              <div>
                <h1 className="font-bold">00</h1>
                <p className="text-sm text-gray-500">Walk In Customer</p>
              </div>
            </div>
          </div>

          <div className="mx-6">
            {orders.length > 0 ? (
              <div className="flex flex-col  shadow-lg shadow-[#3C81FC]/20">
                <div className="rounded-t-lg flex justify-between items-center h-14 bg-[#EAEFF8] py-4 px-6">
                  <div className="flex flex-row justify-center items-center gap-2">
                    <BiFilter className="h-6 w-6 text-gray-500" />{" "}
                    <p className="text-gray-500 text-sm">Filter</p>
                  </div>
                  <div>
                    <button
                      className="inline-flex items-center gap-4 bg-[#3C81FC] text-white py-2 px-4 rounded-md"
                      onClick={() => setCalenderShow(!isCalenderShow)}
                    >
                      {moment(dateState).format("YYYY-MM-DD")} <BiCalendar />
                    </button>
                    {isCalenderShow && (
                      <Calendar
                        className="rounded-lg absolute right-12 top-[17rem] text-xs !border-gray-200"
                        value={dateState}
                        onChange={setDateState}
                      />
                    )}
                  </div>
                </div>
                <table
                  {...getTableProps()}
                  className="w-full bg-white border"
                >
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                            className="px-6 py-3 text-sm border-b border-gray-300"
                          >
                            {/* {column.render("Header")} */}
                            <div className="flex flex-row justify-start items-center space-x-4">
                              <span>{column.render("Header")}</span>
                              <span>
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <BiCaretDown />
                                  ) : (
                                    <BiCaretUp />
                                  )
                                ) : (
                                  ""
                                )}
                              </span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                      prepareRow(row);
                      return (
                        <tr
                          className="bg-white border-b"
                          {...row.getRowProps()}
                        >
                          {row.cells.map((cell) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                className="px-6 py-3 text-sm border-b  border-gray-200 whitespace-nowrap"
                              >
                                {cell.render("Cell")}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="flex items-center justify-between border-l border-r px-6 py-3 bg-white rounded-b-lg">
                  <div className="flex justify-between items-center flex-1">
                    <p
                      onClick={() => previousPage()}
                      className={`${
                        !canPreviousPage
                          ? "disabled text-gray-400 cursor-not-allowed"
                          : ""
                      } relative inline-flex items-center text-sm font-medium text-gray-700"`}
                    >
                      Previous
                    </p>
                    <p
                      onClick={() => nextPage()}
                      className={`${
                        !canNextPage
                          ? "disabled text-gray-400 cursor-not-allowed"
                          : ""
                      } relative inline-flex items-center text-sm font-medium text-gray-700 `}
                    >
                      Next
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center mt-20">
                <img src={NoOrder} alt="no-order" />
                <p className="font-bold">No orders available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
