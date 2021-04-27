import React from "react";
import "../styles/Home.css";

import firstPic from '../images/Home/p0.jpg'
import secondPic from '../images/Home/p1.jpg'
import thirdPic from '../images/Home/p2.jpg'

const images = [
  {src:firstPic, alt:"elder welcoming"},
  {src:secondPic, alt:"man with colorful turban"},
  {src:thirdPic, alt:"man posing in farm field"},
]

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
        <p>
          In today’s ever-globalized society, language skills have become key in
          landing jobs, getting better travel opportunities, and making
          connections with people from all over...
        </p>
        <p>
          Here's how <strong>Teleport</strong> can help.
        </p>
      </div>
      <div className="Home-Right">
        <img src={images[2].src} alt={images[2].alt}/>
        {/* {images.map(image => {
          return(
            <img src={image.src} alt={image.alt}/>
          )
          })} */}
         

      </div>
    </div>
  );
}

export default Home;

// Example

<div id="cf">
  <img class="bottom" src="/images/Cirques.jpg" />
  <img class="top" src="/images/Clown%20Fish.jpg" />
</div>