import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageinfo">
        <img
          src="https://images.pexels.com/photos/8601231/pexels-photo-8601231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messagecontent">
        <p> Hello</p>
        <img
          src="https://images.pexels.com/photos/8601231/pexels-photo-8601231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
