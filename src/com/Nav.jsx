import { useState } from "react";

function Button({ isActive, dataValue, onClick, text }) {
  const dark = "dark:bg-neutral-500 hover:dark:bg-neutral-400";
  const active = "bg-red-500 hover:bg-red-400";
  const light = "bg-neutral-50 hover:bg-neutral-100";
  return (
    <section
      onClick={onClick}
      data-value={dataValue}
      className={`border border-neutral-300 mx-2 rounded-4xl text-center capitalize px-3 cursor-pointer ${
        isActive ? active : light + " " + dark
      }`}
    >
      {text}
    </section>
  );
}

function Nav({ activeButton, setActiveButton }) {
  function buttonClick(e) {
    const value = e.target.getAttribute("data-value");
    setActiveButton(value);
  }
  return (
    <div className="mt-5 h-[50px] rounded-xl px-4 flex items-center duration-300 justify-between max-[580px]:flex-col max-[580px]:h-max max-[580px]:mb-3">
      <h1 className="text-3xl font-bold capitalize">extensions list</h1>
      <div className="flex items-center h-full max-[580px]:mt-3">
        <Button
          dataValue="all"
          isActive={activeButton === "all"}
          onClick={buttonClick}
          text="all"
        />
        <Button
          onClick={buttonClick}
          isActive={activeButton === "active"}
          dataValue="active"
          text={"active"}
        />
        <Button
          onClick={buttonClick}
          isActive={activeButton === "inactive"}
          dataValue="inactive"
          text={"inactive"}
        />
      </div>
    </div>
  );
}

export default Nav;
