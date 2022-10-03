import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";


const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="h-container">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;
