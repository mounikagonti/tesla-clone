import Image from "next/legacy/image";
import React from "react";

const ModelYOne = () => {
  return (
    <div className="modelY_one_wrapper">
      <div className="modelY_imgOne_wrapper">
        <div className="modelY_imgOne">
          <Image
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/6155883c-d851-449c-b9d9-1076f4ff4de3/bvlatuR/std/1920x1080/Model-Y-Utility-Hero-Desktop-LHD?quality=auto-medium&amp;format=auto.svg"
            layout="fill"
            objectFit="contain"
            style={{ borderRadius: "15px" }}
          />
        </div>
        <div className="imgOne_text">
          Versatile seating and storage for cargo and passengers
        </div>
      </div>
      <div className="modelY_imgTwo_wrapper">
        <div className="modelY_imgTwo">
          <Image
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/bdc14e4a-2d66-4af4-ab77-6d28cd92a8c0/bvlatuR/std/1920x1080/Model-Y-Utility-B-Desktop-LHD-NA?quality=auto-medium&amp;format=auto.svg"
            layout="fill"
            objectFit="contain"
            style={{ borderRadius: "15px", overflow: "hidden" }}
          />
        </div>
        <div className="imgTwo_text">
          Room for up to seven with optional third row
        </div>
      </div>
    </div>
  );
};

export default ModelYOne;
