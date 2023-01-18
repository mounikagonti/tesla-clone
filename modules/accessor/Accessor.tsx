import Image from "next/legacy/image";
import React from "react";

const Accessor = () => {
  return (
    <div className="accessor_wrapper">
      <div className="accessor_text">Accessories</div>
      <div className="accessorImg">
        <Image
          src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_2_2000.jpg"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="shop_now_btn">Shop Now</div>
    </div>
  );
};

export default Accessor;
