import React from "react";
import legendItems from "../entities/LegendItems";

const Legend = ({ legendItems }) => {
  console.log(legendItems);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {legendItems.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignItems: "center", // vertical
            justifyContent: "center", // horizontal
            color: item.textColor,
            height: "10vh",
            fontWeight: "bolder",
            // fontSize: "1.5em",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};
export default Legend;
