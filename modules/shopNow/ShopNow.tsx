import React from "react";
import ShopNowBanner from "./shopNowBanner/ShopNowBanner";
import BestSellers from "./bestSellers/BestSellers";
import BestSellerOne from "./bestSellerOne/BestSellerOne";

const ShopNow = () => {
  return (
    <div className="shop_now_wrapper">
      <div className="shop_now_banner">
        <ShopNowBanner />
      </div>
      <div className="shop_now_best_seller">
        <BestSellers />
      </div>
      <div className="shop_now_modelS">
        <div className="modelS_text">Model S Accessories</div>
        <div className="shop_now_btn">Shop Now</div>
      </div>
      <div className="shop_now_model3">
        <div className="modelS_text">Model 3 Accessories</div>
        <div className="shop_now_btn">Shop Now</div>
      </div>
      <div className="shop_now_modelX">
        <div className="modelS_text">Model X Accessories</div>
        <div className="shop_now_btn">Shop Now</div>
      </div>
      <div className="shop_now_modelY">
        <div className="modelS_text">Model Y Accessories</div>
        <div className="shop_now_btn">Shop Now</div>
      </div>
      <div className="shop_now_charging">
        <div className="modelS_text">Charging</div>
        <div className="shop_now_btn">Shop Now</div>
      </div>
      <div className="show_now_best_seller_one">
        <BestSellerOne />
      </div>
      <div className="shop_now_lifeStyle">
        <div className="modelS_text">Lifestyle</div>
        <div className="shop_now_btn">Shop Now</div>
      </div>
    </div>
  );
};

export default ShopNow;
