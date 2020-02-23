import React from "react";
import logoHorizontal from "./svgs/logo-horizontal.svg";
import userIcon from "./svgs/user-icon.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <img src={logoHorizontal} alt="logo" />
        <img src={userIcon} alt="user" />
        Jane Smith
      </div>
      <div>
        Location <button>Change location</button>
      </div>
      <div>
        301 restaurants <div>restaurants</div>
      </div>
    </div>
  );
}

export default App;
