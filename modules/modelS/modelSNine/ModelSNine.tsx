import React from "react";

const ModelSNine = () => {
//   const handleResize = () => {
//     if (window.innerWidth > 600) {
//       return (
//         <video style={{ width: "400px" }}>
//           <source
//             src="https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4"
//             type="video/mp4"
//           />
//         </video>
//       );
//     }
//   };

  return (
    <div className="modelS_nine_wrapper">
      <div className="modelS_nine_left">
        <video
          width="1170px"
          height="100%"
          autoPlay
          loop
          muted
        //   onResize={handleResize}
          className="video"
        >
          <source
            src="https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="modelS_nine_right">
        <div className="modelS_nine_text">Range</div>
        <div className="modelS_nine_heading">
          <div className="modelS_nine_heading_left">Go Anywhere</div>
          <div className="modelS_nine_heading_right">
            With up to 405 miles of estimated range and access to the world’s
            largest and most powerful fast charging network, you’ll spend less
            time plugged in and more time on the road.
            <a href="#">Chat with a Tesla Advisor</a> to learn more about Model
            S or <a href="#">schedule a demo drive</a> today.
          </div>
        </div>
        <div className="modelS_nine_btn_wrapper">
          <button className="buy_now_btn">Buy Now</button>
          <button className="order_btn">Find My Route</button>
        </div>
      </div>
    </div>
  );
};

export default ModelSNine;
