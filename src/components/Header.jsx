import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <div className="flex flex-col gap-y-15">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold ">you love lamp©</h1>
        <div className="flex gap-x-2 text-gray-600">
          <Link to="path">follow</Link>
          <Link to="path">course</Link>
        </div>
      </div>
      <p>lamps for all occasions and every day use.</p>
    </div>
  );
}

export default Header;
