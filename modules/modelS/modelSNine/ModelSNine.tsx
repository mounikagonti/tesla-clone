import React from "react";

const ModelSNine = ({ vid }: any) => {
  return (
    <div className="modelS_nine_wrapper">
      <div className="modelS_nine_left">
        <video autoPlay loop muted className="video">
          <source src={vid} type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="modelS_video_text">
            <div className="modelS_video_text_speed">
              <div className="modelS_video_range_number"> 405 mi</div>
              <div className="modelS_video_range_text">Range (EPA est.)</div>
            </div>
            <div className="modelS_video_text_speed">
              <div className="modelS_video_range_number">15 min</div>
              <div className="modelS_video_range_text">
                Recharge up to 200 mi
              </div>
            </div>
            <div className="modelS_video_text_speed">
              <div className="modelS_video_range_number">40,000 +</div>
              <div className="modelS_video_range_text">
                Global Superchargers
              </div>
            </div>
          </div>
        </div>
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
