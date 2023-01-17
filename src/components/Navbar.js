import React, { useState, useEffect, useLayoutEffect } from "react";
import { Icon } from "@iconify/react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../darkmode.css";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

const Navbar = () => {
  const [mode, setMode] = useState(localStorage.getItem("darkMode") || "dark");

  useEffect(() => {
    localStorage.setItem("darkMode", mode);
    toggleDarkMode(mode);
  });
  /**
   * Original code:
useEffect(() => {
    localStorage.setItem("darkMode", mode);
    toggleDarkMode(mode);
  }, [mode]);
   * Removing the array fixed it, but this is not a permanent solution,
   * it now re-renders 16 times.
   */

  const toggleDarkMode = (props) => {
    if (props === "dark") {
      document.body.classList.add("dark-mode");

      const textElements = document.querySelectorAll(".text");
      textElements.forEach(function (element) {
        element.style.color = "#d6dade";
      });

      const ring_bg = document.querySelectorAll(".progress-ring-bg");

      ring_bg.forEach((element) => {
        element.classList.add("dark-mode-progress-ring-bg");
      });

      const logos = document.querySelectorAll(".logo");

      logos.forEach((element) => {
        element.classList.add("dark-mode-logo");
        console.log("og");
      });
    } else {
      document.body.classList.remove("dark-mode");

      const textElements = document.querySelectorAll(".text");
      textElements.forEach(function (element) {
        element.style.color = "#26272a";
      });

      const elements = document.querySelectorAll(".progress-ring-bg");

      elements.forEach((element) => {
        element.classList.remove("dark-mode-progress-ring-bg");
      });

      const logos = document.querySelectorAll(".logo");

      logos.forEach((element) => {
        element.classList.remove("dark-mode-logo");
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
