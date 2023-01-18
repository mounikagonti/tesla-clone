import Image from "next/legacy/image";
import React from "react";

const BestSellers = () => {
  return (
    <div className="best_seller_wrapper">
      <div className="best_seller_head_text">Best Sellers</div>
      <div className="best_seller_img_wrapper">
        <div className="best_seller_one">
          <div className="best_seller_img">
            <Image
              src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1449859-00-D_0_2000.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="best_seller_text">Model 3/Y Key Fob</div>
        </div>
        <div className="best_seller_one">
          <div className="best_seller_img">
            <Image
              src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/Gen3WC.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="best_seller_text">Wall Connector</div>
        </div>
        <div className="best_seller_one">
          <div className="best_seller_img">
            <Image
              src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_0_2000.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="best_seller_text">Model 3/Y Center Consol Trays</div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
