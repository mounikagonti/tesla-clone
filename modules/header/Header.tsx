import React, { useRef } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const Header = () => {
  const middleRef = useRef<any>();
  const closeRef = useRef<any>();
  const shopRef = useRef<any>();
  const router = useRouter();

  const handleOnMenuClick = () => {
    middleRef.current.classList.toggle("middle");
    shopRef.current.classList.add("shop");
    closeRef.current.style.display = "block";
  };
  const handleOnCloseClick = () => {
    middleRef.current.classList.toggle("middle");
    shopRef.current.classList.remove("shop");
    closeRef.current.style.display = "none";
    // middleRef.current.classList.remove("middle");
  };

  return (
    <div
      className={
        router?.pathname !== "/"
          ? "header_wrapper header_none"
          : "header_wrapper"
      }
    >
      <Link className="header_left" href="/">
        <Image
          src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
          layout="fill"
          objectFit="contain"
        />
      </Link>
      <div ref={middleRef} className="header_middle">
        <Link href="/models" className="link">
          Model S
        </Link>
        <Link href="#" className="link">
          Model X
        </Link>
        <Link href="#" className="link">
          Model Y
        </Link>
        <Link href="#" className="link">
          Model 3
        </Link>
        <Link href="#" className="link">
          Solar Roof
        </Link>
        <Link href="#" className="link">
          Solar Panels
        </Link>
      </div>
      <div className="header_right">
        <div ref={shopRef} className="header_right_left">
          <Link href="#" className="link">
            Shop
          </Link>
          <Link href="#" className="link">
            Account
          </Link>
        </div>
        <Link href="#" className="menu" onClick={handleOnMenuClick}>
          Menu
        </Link>
      </div>
      <div ref={closeRef} className="close" onClick={handleOnCloseClick}>
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Header;
