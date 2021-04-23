import React from "react";

paragraphs = [
  {
    h2: "Introducing Teleport",
    p:
      "A smart chat platform for connecting people and cultures because distance is just a number. Teleport helps you connect with locals anywhere around the world, learn new languages, and experience new cultures. We take care of bridging gaps by translating texts to your language of choice and providing informative resources about cultures and languages. Share your learning experiences and accomplishments on Teleport! You can soon feel at home anywhere in the world and create moments to remember.",
    img:"link to import here"
    },
  {
    h2: "Cultures, Experiences, and Memories!",
    p:
      "Learn a language and share culture by chatting with native speakers around the world. Chat with new friends around the world via text, voice recordings, voice calls, and video calls! Whatever your communication preference, we have you covered. Engage with the Teleport community by posting Experiences. Post these experiences, use inline translation for smooth conversation, and get curated resources for learning language and culture. We make sure there are no barriers for you to learn new things on Teleport.",
    img:"link to import here"
    },
  {
    h2: "What do we offer?",
    p:
      "A collaborative learning experience with inline translation for incoming and outgoing texts. Search for language exchange partners or potential friends by native language, city, or distance from you. Share experiences, build a strong community of cultural exchanges, and stay connected with locals across the world. Chat with friends via text, voice recordings, voice calls, and video calls without a language barrier.",
    img:"link to import here"  
    },
];

function Info() {
  return (
    <div className="Info-Container">
      <div className="Info-Banner">
        <h1>Bringing the world to your home by Teleport.</h1>
      </div>
      <div>Scroll through here, import progress bar, right and left arrows. Split between picture and paragraphs.</div>
    </div>
  );
}
export default Info;