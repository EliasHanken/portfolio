import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../darkmode.css";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

const Navbar = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    toggleDarkMode(mode);
  }, []);

  const toggleDarkMode = (props) => {
    if (props === "dark") {
      document.body.classList.add("dark-mode");
      const textElements = document.querySelectorAll(".text");
      textElements.forEach(function (element) {
        element.style.color = "#d6dade";
      });
    } else {
      document.body.classList.remove("dark-mode");
      const textElements = document.querySelectorAll(".text");
      textElements.forEach(function (element) {
        element.style.color = "#26272a";
      });
    }
  };

  return (
    <div style={{ position: "fixed", top: "10px", right: "0", zIndex: "1" }}>
      <DarkModeToggle
        mode={mode}
        dark="Dark"
        light="Light"
        size="sm"
        onChange={(mode) => {
          toggleDarkMode(mode);
          setMode(mode);
        }}
      />
    </div>
  );
};

export default Navbar;
