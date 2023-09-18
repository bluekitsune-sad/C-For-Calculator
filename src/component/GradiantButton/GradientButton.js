import React from "react";
import "./GradientButton.css";

function GradientButton({ name }) {
  return (
    <div className="GradientButton-center">
      {/* <button class="contact-fp-wrap">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="logo-gradient"
              x1="50%"
              y1="0%"
              x2="75%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#F79533">
                <animate
                  attributeName="stop-color"
                  values="#F79533; #F37055; #EF4E7B; #A166AB; #5073B8; #1098AD; #07B39B; #6DBA82; #F79533"
                  dur="4s"
                  repeatCount="indefinite"
                ></animate>
              </stop>

              <stop offset="100%" stop-color="#F79533">
                <animate
                  attributeName="stop-color"
                  values="#F37055; #EF4E7B; #A166AB; #5073B8; #1098AD; #07B39B; #6DBA82; #F79533; #F37055"
                  dur="4s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
            </linearGradient>
          </defs>
          <rect class="btn" height="60" width="220" rx="30" ry="30" />
        </svg>
        <div class="btn-text">{name}</div>
      </button> 
      use this if you want the gradient color to show on the border
      */}

      <button className="gradient-button">
        <span className="btn-text">{name}</span>
      </button>
    </div>
  );
}

export default GradientButton;
