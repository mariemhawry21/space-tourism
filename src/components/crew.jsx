import React from "react";
import Navbar from "./Navbar";
import "../styles/crew.css";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import douglas from "../assets/crew/image-douglas-hurley.png";
import victor from "../assets/crew/image-victor-glover.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import { useState, useEffect } from "react";
const data = [
  {
    name: "Douglas Hurley",
    images: douglas,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: mark,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: victor,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: anousheh,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const crew = () => {
  const [curPerson, setCurPerson] = useState("douglas");
  const [currentData, setCurrentData] = useState(data[0]);
  useEffect(() => {
    switch (curPerson) {
      case "douglas":
        setCurrentData(data[0]);
        break;
      case "mark":
        setCurrentData(data[1]);
        break;
      case "victor":
        setCurrentData(data[2]);
        break;
      case "anousheh":
        setCurrentData(data[3]);
        break;
    }
  }, [curPerson]);

  return (
    <div className="crew">
      <Navbar />
      <div className="content">
        <div className="image">
          <p>
            <b>02</b> Meet your crew
          </p>
          <img src={currentData.images} alt="player" />
        </div>
        <div className="all">
          <ul>
            <li
              className={curPerson == "douglas" ? "active" : ""}
              onClick={() => setCurPerson("douglas")}
            ></li>
            <li
              className={curPerson == "mark" ? "active" : ""}
              onClick={() => setCurPerson("mark")}
            ></li>
            <li
              className={curPerson == "victor" ? "active" : ""}
              onClick={() => setCurPerson("victor")}
            ></li>
            <li
              className={curPerson == "anousheh" ? "active" : ""}
              onClick={() => setCurPerson("anousheh")}
            ></li>
          </ul>
          <div className="info">
            <p className="role">{currentData.role}</p>
            <h3>{currentData.name}</h3>
            <p className="bio">{currentData.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default crew;
