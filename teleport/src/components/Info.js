import React from "react";
import '../styles/Info.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

//images
import Background from '../images/background.jpg';
import Signup from '../images/Info/signup.jpg';
import Memories from '../images/Info/memories.jpg';
import Collaborative from '../images/Info/collaborative.jpg';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
  },
});

const texts = [
  {
  h2: "What does Teleport offer?",
  pOne:
  "A collaborative learning experience with inline translation for incoming and outgoing texts. Search for language exchange partners or potential friends by native language, city, or distance from you!",
  pTwo: "Share experiences, build a strong community of cultural exchanges, and stay connected with locals across the world.",    
  img: Collaborative, 
  alt: "Preview of personal profile and other users on Teleport"
},
  {
    h2: "Cultures, Experiences, and Memories!",
    pOne:
    "Learn a language and share culture by chatting with native speakers around the world. Chat with new friends around the world via text, voice recordings, voice calls, and video calls!",
    pTwo: "Whatever your communication preference, we have you covered. There are no barriers for you to learn new things on Teleport.",
    img: Memories, 
    alt: "Celebration with fireworks over FaceTime via Teleport"
  },
  {
    h2: "Sign up for Teleport today!",
    pOne:
      "Teleport helps you connect with locals anywhere around the world, learn new languages, and experience new cultures.",
      pTwo: "You can soon feel at home anywhere in the world and create moments to remember.",
      img: Signup,
      alt: "Sign-up page of Teleport"
    },
];

function Info() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="Info-Container">
    <div className="Info-Banner">Bring the world to you through Teleport.</div>
    <img className="Info-Background" src={Background} alt="different cultures"/>
    <div className="Info-Container-Stepper">
    <div className="Info-Message">
      <h2>{texts[activeStep].h2}</h2>
      <p>{texts[activeStep].pOne}</p>
      <p>{texts[activeStep].pTwo}</p>
    </div>
    <img src={texts[activeStep].img} alt={texts[activeStep].alt} className="Info-Image"/>
    </div>
    <MobileStepper
      variant="dots"
      steps={3}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          
        </Button>
      }
    />
    </div>
  );
}
export default Info;