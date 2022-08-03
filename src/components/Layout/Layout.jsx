import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
