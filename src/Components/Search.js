import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userchat">
  <img
            id="nav-img"
            alt=""
            src="https://images.pexels.com/photos/8601231/pexels-photo-8601231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        <div className="userchatinfo">
          <span> Name</span>
        </div>
      </div>
 
    </div>
  );
};

export default Search;
