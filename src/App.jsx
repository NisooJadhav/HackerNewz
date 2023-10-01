import { useState, useEffect } from "react";
import "./App.css";
import logo from "../public/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Feed from "./Feed";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  window.addEventListener("scroll", function () {
    let backToTopButton = document.getElementById("backToTopBtn");
    if (window.scrollY > 40) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  return (
    <>
      <div
        className="logo"
        data-aos="zoom-in"
        data-aos-duration="1500"
        id="hero"
      >
        <img
          src={logo}
          alt=""
          style={{
            width: "10vw",
            padding: "0",
            margin: "0",
            background: "white",
            borderRadius: "50%",
          }}
        />
        <h1
          style={{
            fontSize: "5rem",
            padding: "0",
            margin: "0",
            fontFamily: "nabla",
            textShadow: "2px 2px #000",
          }}
        >
          HackerNewz
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            fontFamily: "consolas",
            color: "#16FF00",
            fontWeight: "700",
          }}
        >
          Cyber Security News at your finger tips
        </p>
      </div>
      <hr style={{ marginBottom: "30px" }} />
      <div>
        <Feed />
      </div>
      <button
        id="backToTopBtn"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{ display: "block", color: "white" }}
      >
        ↑
      </button>
    </>
  );
}

export default App;
