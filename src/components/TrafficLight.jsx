import { useState } from "react";

export function TrafficLight() {
  const [color, setColor] = useState("");
  return (
    <div className="container">
      <div className="stem"></div>
      <div className="trafficLight">
        <div
          className={"redLight" + (color === "red" ? " on" : "")}
          onClick={() => {
            setColor("red");
          }}
        ></div>
        <div
          className={"yellowLight" + (color === "yellow" ? " on" : "")}
          onClick={() => {
            setColor("yellow");
          }}
        ></div>
        <div
          className={"greenLight" + (color === "green" ? " on" : "")}
          onClick={() => {
            setColor("green");
          }}
        ></div>
      </div>
    </div>
  );
}
