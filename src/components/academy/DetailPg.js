import { React, useState } from "react";
import { useSpring, animated } from "react-spring";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./DatailPg.css";

function Detail() {
  //title animation
  const titleAnimation = useSpring({
    from: {
      transform: "translateY(-30px)",
    },
    to: [{ transform: "translateY(15px)" }],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  return (
    <div className='DetailPg-main'>
      <animated.h1 style={titleAnimation} className='DetailPg-title'>
        Why is it special?
      </animated.h1>
      <div className='DetailPg-accordion'>
        <Accordion
          title='Item 1 - Expert Academy is Awesome'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        />
        <Accordion
          title='Item 2 - Expert Academy is Awesome'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        />
        <Accordion
          title='Item 3 - Expert Academy is Awesome'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        />
        <Accordion
          title='Item 4 - Expert Academy is Awesome'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        />
        <Accordion
          title='Item 5 - Expert Academy is Awesome'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        />
      </div>
    </div>
  );
}

function Accordion(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  //conditional styling
  const styles = {
    //if open is true, change color of title
    accordionTitle: {
      color: open ? "#d9c387" : "#fff",
      fontWeight: 700,
    },
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "200px" : "25px" },
    config: { duration: "300" },
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff",
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "#10d6f5" : "#fff",
    },
    config: { duration: "120" },
  });

  return (
    <animated.div className='accordion__item' style={openAnimation}>
      <div className='accordion__header' onClick={toggleHandler}>
        <h4 style={styles.accordionTitle}>{props.title}</h4>
        <animated.i style={iconAnimation}>
          <ExpandMoreIcon />
        </animated.i>
      </div>
      <p className='accordion__content'>{props.text}</p>
    </animated.div>
  );
}

export default Detail;
