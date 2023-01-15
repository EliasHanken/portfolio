import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { FaPython, FaJava } from "react-icons/fa";
import { VscTerminalLinux, VscGithubInverted } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";
import { Fade } from "react-reveal";
import { Flip } from "react-reveal/Flip";
import Scrollbars from "react-custom-scrollbars";

function App() {
  const [python, setPython] = useState(55);
  const [javaScript, setJS] = useState(60);
  const [java, setJava] = useState(90);
  const [linux, setLinux] = useState(80);
  const [github, setGitHub] = useState(85);
  const [cpp, setCpp] = useState(50);
  const [csharp, setCSharp] = useState(60);

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        threshold: 0.8,
        //rootMargin: "100px 0px",
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref]);

  return (
    <div className="home-page">
      <div className="type-animation-div" style={{ height: height }}>
        <TypeAnimation
          className="type-animation"
          speed={50}
          sequence={[
            "Hello, my name is Elias and I am a full-stack developer.", // Types 'One'
            4000, // Waits 1s
            "Check out my portfolio to see some of my work/skills.", // Deletes 'One' and types 'Two'
            4000, // Waits 2s
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "2em",
          }}
        />
      </div>

      {/*<Spacer size={1000}></Spacer>*/}

      {/*isVisible && (
        <div>
          This div will appear and disappear based on the user's scroll position
        </div>
      )*/}
      <div
        style={{ overflow: "auto", boxShadow: "0px 3px 15px rgba(0,0,0,0.3)" }}
      >
        <div ref={ref} style={{ overflowX: "hidden" }}>
          <Fade left opposite when={isVisible}>
            <div className="logos-container">
              <div className="logo-container">
                <FaPython className="logo" />
                <CircularProgressBar
                  value={python}
                  onChange={(value) => setPython(value)}
                />
              </div>
              <div className="logo-container">
                <SiJavascript className="logo" />
                <CircularProgressBar
                  value={javaScript}
                  onChange={(value) => setJS(value)}
                />
              </div>
              <div className="logo-container">
                <FaJava className="logo" />
                <CircularProgressBar
                  value={java}
                  onChange={(value) => setJava(value)}
                />
              </div>
              <div className="logo-container">
                <VscTerminalLinux className="logo" />
                <CircularProgressBar
                  value={linux}
                  onChange={(value) => setLinux(value)}
                />
              </div>
              <div className="logo-container">
                <VscGithubInverted className="logo" />
                <CircularProgressBar
                  value={github}
                  onChange={(value) => setGitHub(value)}
                />
              </div>
              <div className="logo-container">
                <Icon className="logo" icon="mdi:language-cpp" />
                <CircularProgressBar
                  value={cpp}
                  onChange={(value) => setCpp(value)}
                />
              </div>
              <div className="logo-container">
                <Icon className="logo" icon="mdi:language-csharp" />
                <CircularProgressBar
                  value={csharp}
                  onChange={(value) => setCSharp(value)}
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <CustomScrollbar />
    </div>
  );
}

const Spacer = ({ size }) => {
  return <div style={{ height: size }} />;
};

const CircularProgressBar = ({ value, onChange }) => {
  const [localValue, setLocalValue] = useState(value);
  const color = `rgb(${255 - localValue * 2.55}, ${localValue * 2.55}, 50)`;
  return (
    <div className="progress-ring">
      <svg viewBox="0 0 100 100">
        <circle className="progress-ring-bg" cx="50" cy="50" r="45"></circle>
        <circle
          className="progress-ring-fg"
          cx="50"
          cy="50"
          r="45"
          strokeDasharray="280"
          strokeDashoffset={`calc(280 - (280 * ${localValue} * 0.01))`}
          stroke={color}
        ></circle>
      </svg>
      {/*
      <input
        type="range"
        min="0"
        max="100"
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      */}
    </div>
  );
};

const CustomScrollbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollbarHeight, setScrollbarHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      /*
      const maxScroll = 50;
      const currentScroll =
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
        maxScroll;
      setScrollPosition(currentScroll);
      */

      /* No Limit */
      setScrollPosition(
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
          scrollbarHeight
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollbarHeight]);

  useEffect(() => {
    //setScrollbarHeight(10);
    /* No Limit */
    setScrollbarHeight(100);
  }, []);
  const scrollbarStyle = {
    position: "fixed",
    width: "40px",
    height: `8px`,
    left: "0px",
    top: `${scrollPosition}px`,
    background: "rgba(0,0,0,0.3)",
    //boxShadow: "0px 3px 15px rgba(0,0,0,0.5)",
    border: "1px solid rgba(255,255,255,0.2)",
  };
  return <div style={scrollbarStyle} />;
};

export default App;
