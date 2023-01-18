import React, { useEffect, useRef } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const Header = ({ headerColor }: any) => {
  const headerRef = useRef<any>();
  const middleRef = useRef<any>();
  const closeRef = useRef<any>();
  const shopRef = useRef<any>();
  const router = useRouter();

  const handleOnMenuClick = () => {
    middleRef.current.classList.toggle("middle");
    shopRef.current.classList.add("shop");
    closeRef.current.style.display = "block";
    if (router.pathname === "/solarroof" || router.pathname === "/shop") {
      headerRef.current.classList.toggle("header__menu");
    }
  };
  const handleOnCloseClick = () => {
    middleRef.current.classList.toggle("middle");
    shopRef.current.classList.remove("shop");
    closeRef.current.style.display = "none";
    // middleRef.current.classList.remove("middle");
    if (router.pathname === "/solarroof" || router.pathname === "/shop") {
      headerRef.current.classList.toggle("header__menu");
    }
  };

  const closeSidebar = (e: any) => {
    if (headerRef.current && !headerRef.current.contains(e.target)) {
      middleRef.current.classList.remove("middle");
      shopRef.current.classList.remove("shop");
      closeRef.current.style.display = "none";
      if (router.pathname === "/solarroof" || router.pathname === "/shop") {
        headerRef.current.classList.remove("header__menu");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeSidebar);
    return () => {
      document.removeEventListener("mousedown", closeSidebar);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={
        router?.pathname !== "/" &&
        router.pathname !== "/solarroof" &&
        router.pathname !== "/shop"
          ? "header_wrapper header_none"
          : router.pathname === "/solarroof"
          ? "header_wrapper header_none header_wrapperOne header_right__menu"
          : router.pathname === "/shop"
          ? "header_wrapper header_none header_wrapperOne"
          : "header_wrapper"
      }
    >
      <Link className="header_left" href="/">
        <Image
          src={
            router?.pathname !== "/" &&
            router.pathname !== "/solarroof" &&
            router.pathname !== "/shop"
              ? "https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
              : router.pathname === "/solarroof"
              ? "https://cdn.freebiesupply.com/logos/large/2x/tesla-9-logo-black-and-white.png"
              : router.pathname === "/shop"
              ? "https://cdn.freebiesupply.com/logos/large/2x/tesla-9-logo-black-and-white.png"
              : "https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
          }
          layout="fill"
          objectFit="contain"
        />
      </Link>
      <div ref={middleRef} className="header_middle">
        <Link href="/models" className="link">
          Model S
        </Link>
        <Link href="/model3" className="link">
          Model 3
        </Link>
        <Link href="/modelx" className="link">
          Model X
        </Link>
        <Link href="/modely" className="link">
          Model Y
        </Link>
        <Link href="/solarroof" className="link">
          Solar Roof
        </Link>
        <Link href="/solarpanel" className="link">
          Solar Panels
        </Link>
      </div>
      <div className="header_right">
        <div ref={shopRef} className="header_right_left">
          <Link href="/shop" className="link">
            Shop
          </Link>
          <Link href="/signin" className="link">
            Account
          </Link>
        </div>
        <a className="menu" onClick={handleOnMenuClick}>
          Menu
        </a>
      </div>
      <div ref={closeRef} className="close" onClick={handleOnCloseClick}>
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Header;
