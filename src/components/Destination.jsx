import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/des.css";
import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";
import { useState } from "react";

const data = [
  {
    name: "MOON",
    image: Moon,
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDist: "384,400 KM",
    travelTime: "3 DAYS",
  },
  {
    name: "MARS",
    image: Mars,
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avgDist: "225 MIL. KM",
    travelTime: "9 MONTHS",
  },
  {
    name: "EUROPA",
    image: Europa,
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDist: "628 MIL. KM",
    travelTime: "3 YEARS",
  },
  {
    name: "TITAN",
    image: Titan,
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDist: "1.6 BIL. KM",
    travelTime: "7 YEARS",
  },
];

const Destination = () => {
  const [destination, setDestination] = useState("Moon");
  const [currentData, setCurrentData] = useState(data[0]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    switch (destination) {
      case "Moon":
        setCurrentData(data[0]);
        break;
      case "Mars":
        setCurrentData(data[1]);
        break;
      case "Europa":
        setCurrentData(data[2]);
        break;
      case "Titan":
        setCurrentData(data[3]);
        break;
    }
  }, [destination]);
  return (
    <div className="des">
      <Navbar />
      <div className="content">
        <div className="image">
          <p>
            <b>01 </b>PICK YOUR DESTINATION
          </p>
          <img src={currentData.image} alt="destination images" />
        </div>
        <div className="right">
          <ul>
            <li
              onClick={() => setDestination("Moon")}
              className={destination == "Moon" ? "active" : ""}
            >
              Moon
            </li>
            <li
              onClick={() => setDestination("Mars")}
              className={destination == "Mars" ? "active" : ""}
            >
              Mars
            </li>
            <li
              onClick={() => setDestination("Europa")}
              className={destination == "Europa" ? "active" : ""}
            >
              Europa
            </li>
            <li
              onClick={() => setDestination("Titan")}
              className={destination == "Titan" ? "active" : ""}
            >
              Titan
            </li>
          </ul>
          <h3>{currentData.name}</h3>
          <p id="bor">{currentData.text}</p>
          <div className="info">
            <p>{currentData.avgDist}</p>
            <p>{currentData.travelTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
