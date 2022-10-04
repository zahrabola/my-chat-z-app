import React from "react";
import Messages from "../Components/Messages";
import  Input from "../Components/Input";
import More from "../Images/more.png";
import { FaPlusCircle,  FaVideoSlash } from "react-icons/fa";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatinfo">
        <span> Bola</span>
        <div className="chaticons">
            <FaVideoSlash id="r-icon"/>
          <FaPlusCircle id="r-icon"/>
          <img src={More} alt="" id="ci-img" />
        </div>
      </div>
      <Messages />
      <Input />
    
    </div>
  );
};

export default Chat;
