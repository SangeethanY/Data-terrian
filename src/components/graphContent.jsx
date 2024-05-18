import React from "react";
import ChartBar from "./chartBar";
import { Box } from "@mui/material";
import barRectange1 from "../images/barRectange-1.png"
import barRectange2 from "../images/barRectange-2.png"

import barRectange3 from "../images/barRectange-3.png"

import barRectange4 from "../images/barReactange-4.png"
import barRectange5 from "../images/barRectange-5.png"
import barRectange6 from "../images/barRectange-6.png"

import barRectange7 from "../images/barRectange-7.png"



export default function GraphContent() {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Box sx={{ width: "70%" }}>
        <ChartBar />
      </Box>
      <Box sx={{ display: "flex", position: "relative" }}>
        <img width={500} height={280} src={barRectange1} alt="img" />
        <img
          width={100}
          src={barRectange2}
          alt="img"
          style={{ position: "absolute",padding:"2rem 0 0 4rem" }}
        />
        <img
          width={50}
          src={barRectange3}
          alt="img"
          style={{ position: "absolute",padding:"3rem 0px 0px 5.5rem" }}
        />
         <img
          width={80}
          src={barRectange4}
          alt="img"
          style={{ position: "absolute",padding:"10rem 0px 0px 4.5rem" }}
        />
        <img
          width={100}
          src={barRectange5}
          alt="img"
          style={{ position: "absolute",padding:"14rem 0px 0px 4.5rem" }}
        />
         <img
          width={80}
          src={barRectange6}
          alt="img"
          style={{ position: "absolute",padding:"3rem 0px 0px 17rem" }}
        />
        <img
          width={150}
          src={barRectange6}
          alt="img"
          style={{ position: "absolute",padding:"0rem 0px 0px 21rem" }}
        />
        <img
          width={100}
          src={barRectange7}
          alt="img"
          style={{ position: "absolute",padding:"12rem 0px 0px 21rem" }}
        />
      </Box>
    </div>
  );
}
