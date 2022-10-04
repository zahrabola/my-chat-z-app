import React from "react";
import Img from "../Images/img.png";
import {  FaPaperclip} from "react-icons/fa";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." id="in-in" />
      <div className="send">
        <FaPaperclip id="r-icon" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" id="in-img"/>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
