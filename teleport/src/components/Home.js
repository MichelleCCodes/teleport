import React from "react";
import "../styles/Home.css";

const bubbles = [
  {text:"你好"},
  {text:"नमस्ते"},
  {text:"¿Cómo estás?"}
]

function Home() {
  return (
    <div className="Home-Container">
      <div className="Home-Left">
        <div className="Home-Bubbles">
          {bubbles.map(bubble=> {
            return(
              <div className="Talk-Bubble">{bubble.text}</div>
              )
          })}
        </div>
        <div className="Home-Text">
        <p>
          In today’s ever-globalized society, language skills have become key in
          landing jobs, getting better travel opportunities, and making
          connections with people from all over...
        </p>
        <p>
          Here's how <strong>Teleport</strong> can help.
        </p>
        </div>
      </div>
      <div className="Home-Right">
        <div className="slider"></div>
      </div>
    </div>
  );
}

export default Home;
