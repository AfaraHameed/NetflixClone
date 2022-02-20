import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navbar">
      <a
        href="https://www.freepnglogos.com/pics/netflix-logo-png"
        title="Image from freepnglogos.com"
      >
        <img
          className="logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          width="200"
          alt="netflix logo"
        />
      </a>
      <a
        title="Shadowak47, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Netflix-avatar.png"
      >
        <img
          className="avatar"
          width="256"
          alt="Netflix-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </a>
    </div>
  );
}

export default NavBar;
