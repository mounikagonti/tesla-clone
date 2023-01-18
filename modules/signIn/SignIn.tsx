import React from "react";

const SignIn = () => {
  return (
    <div className="signIn_wrapper">
      <div className="signIn_head_text">Sign In</div>
      <label htmlFor="">Email</label>
      <input type="text"></input>
      <button className="next_btn">Next</button>
      <a href="#" className="trouble_signing">
        Trouble Signing In?
      </a>
      <div className="or">Or</div>
      <button className="create_btn">Create Account</button>
    </div>
  );
};

export default SignIn;
