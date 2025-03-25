import logo from "../assets/images/logo.svg";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";
import setTheme, { getTheme } from "../theme";
import { useState } from "react";

function Header() {
  const [theme, changeTheme] = useState(getTheme());
  function click() {
    setTheme(true);
    changeTheme(getTheme());
  }
  return (
    <div className="flex items-center justify-between w-full py-2 px-3 rounded-md dark:bg-neutral-600/70 bg-neutral-0">
      <img src={logo} className="h-7" />
      <button
        className="bg-neutral-400 p-2 rounded-xl cursor-pointer"
        onClick={click}
      >
        <img src={theme === "dark" ? sun : moon} className="w-full" />
      </button>
    </div>
  );
}

export default Header;
