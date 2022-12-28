import React from "react";
import Header from "./header/Header";

const Layout = ({ children }: any) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
