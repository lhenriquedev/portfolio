import React, { useState } from "react";

import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar handleToggle={handleToggle} />
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
    </>
  );
};

export default Header;
