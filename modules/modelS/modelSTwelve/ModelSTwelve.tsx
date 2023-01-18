import React from "react";

const ModelSTwelve = () => {
  return (
    <div className="modelS_twelve_wrapper">
      <div className="feature_text_wrapper">
        <div className="feature_head">Features</div>
        <div className="feature_text">
          Enhanced Autopilot and Full Self-Driving capability introduce
          additional features and improve existing functionality to make your
          car more capable over time, including:
        </div>
      </div>
      <div className="feature_video_container">
        <video autoPlay loop muted className="video_one">
          <source
            src="https://tesla-cdn.thron.com/delivery/public/video/tesla/74b8f01e-5020-438b-be44-446e5975c54c/bvlatuR/WEBHD/Model_S_Navigate_0"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="feature_bottom_text">
        <div className="feature_bottom_text_one">
          <div className="top_line"></div>
          <div className="feature_bottom_model_text">Navigate on Autopilot</div>
          <div className="feature_bottom_model_normal_text">
            Active guidance from on-ramp to off-ramp
          </div>
        </div>
        <div className="feature_bottom_text_one">
          <div className="top_line"></div>
          <div className="feature_bottom_model_text">Auto Lane Change</div>
          <div className="feature_bottom_model_normal_text">
            Automatically change lanes while driving on the highway
          </div>
        </div>
        <div className="feature_bottom_text_one">
          <div className="top_line"></div>
          <div className="feature_bottom_model_text">Summon</div>
          <div className="feature_bottom_model_normal_text">
            Automatically retrieve your car
          </div>
        </div>
        <div className="feature_bottom_text_one">
          <div className="top_line"></div>
          <div className="feature_bottom_model_text">Autopark</div>
          <div className="feature_bottom_model_normal_text">
            Parallel and perpendicular parking with single touch
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSTwelve;
