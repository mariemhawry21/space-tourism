import React from "react";
import Navbar from "./Navbar";
import "../styles/tech.css";

import vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehicleDes from "../assets/technology/image-launch-vehicle-portrait.jpg";

import capsule from "../assets/technology/image-space-capsule-landscape.jpg";
import capsuleDes from "../assets/technology/image-space-capsule-portrait.jpg";

import spaceport from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportDes from "../assets/technology/image-spaceport-portrait.jpg";

import { useState, useEffect } from "react";

const data = [
  {
    name: "Launch vehicle",
    images: {
      portrait: vehicleDes,
      landscape: vehicle,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: spaceportDes,
      landscape: spaceport,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: capsuleDes,
      landscape: capsule,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const Technology = () => {
  const [tech, setTech] = useState("vehicle");
  const [currentData, setCurrentData] = useState(data[0]);

  useEffect(() => {
    switch (tech) {
      case "vehicle":
        setCurrentData(data[0]);
        break;
      case "spaceport":
        setCurrentData(data[1]);
        break;
      case "capsule":
        setCurrentData(data[2]);
        break;
    }
  }, [tech]);

  return (
    <div className="tech">
      <Navbar />
      <div className="content">
        <div className="images">
          <img src={currentData.images.landscape} alt="image" className="mob" />
          <img src={currentData.images.portrait} alt="image" className="desc" />
        </div>
        <div className="info">
          <div className="list">
            <ul>
              <li
                onClick={() => setTech("vehicle")}
                className={tech == "vehicle" ? "active" : ""}
              >
                1
              </li>
              <li
                onClick={() => setTech("spaceport")}
                className={tech == "spaceport" ? "active" : ""}
              >
                2
              </li>
              <li
                onClick={() => setTech("capsule")}
                className={tech == "capsule" ? "active" : ""}
              >
                3
              </li>
            </ul>
          </div>
          <div className="para">
            <h3>{currentData.name}</h3>
            <p>{currentData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
