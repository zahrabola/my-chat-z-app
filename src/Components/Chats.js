import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userchat">
        <img
          id="chats-img"
          alt=""
          src="https://images.pexels.com/photos/8601231/pexels-photo-8601231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="userchatinfo">
          <span>chat</span>
          <p className="c-p"> sms Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
