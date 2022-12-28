import Link from "next/link";
import React from "react";

const Banner = ({ model, test, btnOne, btnTwo }: any) => {
  return (
    <div className="banner_wrapper">
      <div className="banner_top">
        <div className="model">{model}</div>
        <Link href="#">{test}</Link>
      </div>
      <div className="banner_bottom">
        <Link href="#" className="btn">
          {btnOne}
        </Link>
        <Link href="#" className="btn">
          {btnTwo}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
