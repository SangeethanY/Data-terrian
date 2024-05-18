import { Box, Typography } from "@mui/material";
import React from "react";
import { PiDotsThreeVerticalLight } from "react-icons/pi";
import Table from "./table/table";

export default function MeetingInfo() {
  return (
    <div
      style={{padding:"1rem", display: "flex", flexDirection: "column", textAlign: "start",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", }}>
      <Box
        sx={{
          height: 40,
          display: "flex",
          justifyContent: "space-between",
          padding: "0 1rem",
          alignItems: "center",
          borderBottom:"1px solid #adacac"
        }}>
        <Typography>Today interview meeting infos</Typography>
        <PiDotsThreeVerticalLight />
      </Box>
      <Box sx={{ paddingTop: "3rem", width:"100%" }}>
        <Table />
      </Box>
      <Box style={{ padding: "1rem .2rem" }}>
        <Box
          style={{
            borderRadius: "15px",
            width: "100%",
            height: ".5rem",
            backgroundColor: "#aba9a9",
            position: "relative",
          }}>
            <Box style={{borderRadius:"15px",position:"absolute",backgroundColor:"blue",height:".5rem",width:"2.5rem",marginLeft:"5rem"}}></Box>
          </Box>
      </Box>
    </div>
  );
}
