import React from "react";

const ModelSFive = ({ Content, text, heading, btnOne, btnTwo }: any) => {
  return (
    <div className="modelS_five_wrapper">
      <div className="modelS_five_left">
        <div className="modelS_five_text">{text}</div>
        <div className="modelS_five_heading">
          <div className="modelS_heading_left">{heading}</div>
          <div className="modelS_heading_right">
            <Content />
          </div>
        </div>
        <div className="modelS_five_btn_wrapper">
          <button className={btnOne ? "buy_now_btn_one" : "buy_now_btn"}>
            Order Now
          </button>
          <button className={btnTwo ? "order_btn_one" : "order_btn"}>
            View Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelSFive;

// import React from "react";

// const ModelSFive = ({
//   Content,
//   text,
//   heading,
//   btnOne,
//   btnTwo,
// }: // textOne,
// // headingOne,
// any) => {
//   return (
//     <div className="modelS_five_wrapper">
//       <div className="modelS_five_left">
//         <div className="modelS_five_text">{text}</div>
//         <div className="modelS_five_heading">
//           <div className="modelS_heading_left">{heading}</div>
//           <div className="modelS_heading_right">
//             <Content />
//           </div>
//         </div>
//         <div className="modelS_five_btn_wrapper">
//           <button className={btnOne ? "buy_now_btn_one" : "buy_now_btn"}>
//             Order Now
//           </button>
//           <button className={btnTwo ? "order_btn_one" : "order_btn"}>
//             View Inventory
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModelSFive;
