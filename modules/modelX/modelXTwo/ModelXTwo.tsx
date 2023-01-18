import React from "react";
import Model3Five from "../../model3/model3Five/Model3Five";

const ModelXTwo = () => {
  const handleContent = () => {
    return (
      <div>
        With the most power and quickest acceleration of any SUV, Model X Plaid
        is the highest performing SUV ever built. Updated battery architecture
        enables both Long Range and Plaid configurations to complete
        back-to-back track runs without performance degradation.
        <a href="#">Chat with a Tesla Advisor</a> to learn more about Model X or
        <a href="#">schedule a demo drive</a> today.
      </div>
    );
  };
  return (
    <div className="modelX_two_wrapper">
      <Model3Five
        Content={handleContent}
        text="Plaid"
        heading="Beyond Ludicrous"
      />
    </div>
  );
};

export default ModelXTwo;
