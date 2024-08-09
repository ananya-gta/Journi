import React from "react";
import { Button } from "../ui/button.jsx";

function Header() {
  return (
    <div className="flex justify-between shadow-md p-3 ">
      <div className="flex space-x-2">
        <img src="/logo.svg" alt="" className="w-10 h-10" />
        <h1 className=" font-bold text-3xl">Journi</h1>
      </div>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
