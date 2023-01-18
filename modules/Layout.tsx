import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const { pathname } = useRouter();
  const [isBgColorEnable, setIsBgColorEnable] = useState(false);
  useEffect(() => {
    if (pathname === "/solarroof" || pathname === "/solarpanel") {
      setIsBgColorEnable(true);
    } else {
      setIsBgColorEnable(false);
    }
  }, [pathname]);
  return (
    <main>
      <Header />
      {children}
      <Footer
        bgColor={isBgColorEnable}
        isHomePage={pathname === "/" ? true : false}
      />
    </main>
  );
};

export default Layout;
