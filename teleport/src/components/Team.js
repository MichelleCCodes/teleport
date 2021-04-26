import React from 'react'; 
import '../styles/Team.css';

//images
import Michelle from '../images/michelle.jpg'
import Pinak from '../images/pinak.jpg'
import grid from '../images/grid.jpg'

const members = [
    {name:"Pinak Sawhney", role:"Ideation & Backend", focusOne:"Cloud", focusTwo:"Distributed", focusThree:"Web Development"}, 
    {name:"Michelle Chen", role:"Design & Front End", focusOne:"React", focusTwo:"Prototyping", focusThree:"Web Development"}
]
const messages = {
    title: "People Matter -", 
    titleTwo: "Distance Doesn't.",
    lineOne: "At Teleport we celebrate diversity and bring people a step closer because great ideas come when all people are celebrated.",
    lineTwo: "Diversity is not just a concept but a tangible power that can lead to new ideas, thoughts, and experiences to cherish and celebrate. This is our core philosophy at Teleport."
}
const introductions = {
    banner: "Meet the team behind Teleport...", 
    header: "Teleport Engineers"
}

function Team(){
    return (
      <>
        <div className="Team-Message">
          <img src={grid} alt="diverse grid of people" className/>
          <div className="Team-Message-Text">
          <h2>{messages.title}</h2>
          <h2>{messages.titleTwo}</h2>
          <p>{messages.lineOne}</p>
          <p>{messages.lineTwo}</p>
          </div>
        </div>
        <div className="Team-Banner">{introductions.banner}</div>
        <h1>{introductions.header}</h1>
        <div className="Team-Members">
            <img src={Pinak} alt="Pinak" className="Pinak"/>
            <img src={Michelle} alt="Michelle" className="Michelle"/>
        </div>
        <div className="Team-Descriptions">
            {members.map((member)=> {
                return(
            <div key={member.name} className="Team-Description">
                <h2>{member.name}</h2>
                <h4>{member.role}</h4>
                <p>{member.focusOne}</p>
                <p>{member.focusTwo}</p>
                <p>{member.focusThree}</p>
            </div>
                )
            })}
        </div>
      </>
    );
}
export default Team;