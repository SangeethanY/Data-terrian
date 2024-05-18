import React from "react";
import ChartBar from "./chartBar";
import { Box } from "@mui/material";

export default function GraphContent() {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Box sx={{ width: "70%" }}>
        <ChartBar />
      </Box>
      <Box sx={{ display: "flex", position: "relative" }}>
        <img width={500} height={280} src="/barRectange-1.png" alt="img" />
        <img
          width={100}
          src="/barRectange-2.png"
          alt="img"
          style={{ position: "absolute",padding:"2rem 0 0 4rem" }}
        />
        <img
          width={50}
          src="/barRectange-3.png"
          alt="img"
          style={{ position: "absolute",padding:"3rem 0px 0px 5.5rem" }}
        />
         <img
          width={80}
          src="/barReactange-4.png"
          alt="img"
          style={{ position: "absolute",padding:"10rem 0px 0px 4.5rem" }}
        />
        <img
          width={100}
          src="/barRectange-5.png"
          alt="img"
          style={{ position: "absolute",padding:"14rem 0px 0px 4.5rem" }}
        />
         <img
          width={80}
          src="/barRectange-6.png"
          alt="img"
          style={{ position: "absolute",padding:"3rem 0px 0px 17rem" }}
        />
        <img
          width={150}
          src="/barRectange-6.png"
          alt="img"
          style={{ position: "absolute",padding:"0rem 0px 0px 21rem" }}
        />
        <img
          width={100}
          src="/barRectange-7.png"
          alt="img"
          style={{ position: "absolute",padding:"12rem 0px 0px 21rem" }}
        />
      </Box>
    </div>
  );
}
