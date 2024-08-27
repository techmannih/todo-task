import React from "react";
import Image from "next/image";
import logo from "../../../assets/Union.png"; // Ensure the path is correct
import logo1 from "../../../assets/Union1.png"; // Ensure the path is correct

const Navbar = () => {
  return (
    <nav className="bg-white p-4 ">
      <div className="flex items-center max-w-7xl  mx-auto">
      <div className="relative flex items-center">
          <Image src={logo1} alt="Secondary logo" width={15} height={15} />
          <Image
            src={logo}
            alt="Main logo"
            width={15}
            height={15}
            className="absolute left-1 top-0"
          />
        </div>

        <div className="mx-2">
          <p className="text-2xl font-bold">TODO</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
