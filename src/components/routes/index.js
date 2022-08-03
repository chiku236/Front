import { Login } from "../../pages/public";
import {
  CashInHand,
  Dashboard,
  Expense,
  Order,
  Pay,
  Purchase,
  Sales,
} from "../../pages/private";
const publicRoutes = [
  {
    path: "",
    component: <Login />,
    exact: true,
    key: "login",
  },
  {
    path: "/login",
    component: <Login />,
    exact: false,
    key: "login",
  },
];

const privateRoutes = [
  {
    path: "/dashboard",
    component: <Dashboard />,
    exact: false,
    key: "dashboard",
    withNav: true,
  },
  {
    path: "/pay",
    component: <Pay />,
    exact: false,
    key: "pay",
    withNav: true,
  },
  {
    path: "/order",
    component: <Order />,
    exact: false,
    key: "pay",
    withNav: true,
  },
  {
    path: "/payment/sales",
    component: <Sales />,
    exact: false,
    key: "sales",
    withNav: true,
  },
  {
    path: "/payment/purchase",
    component: <Purchase />,
    exact: false,
    key: "sales",
    withNav: true,
  },
  {
    path: "/payment/expense",
    component: <Expense />,
    exact: false,
    key: "sales",
    withNav: true,
  },
  {
    path: "/payment/cash-in-hand",
    component: <CashInHand />,
    exact: false,
    key: "sales",
    withNav: true,
  },
];

export { publicRoutes, privateRoutes };
