import { Box } from "@mui/material";
import React from "react";

export default function SideBar() {
  return (
    <div >
      <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"2rem",gap:"2rem"}}>
      {[
        "/Group-1.png",
        "/Group-2.png",
        "/Group-3.png",
        "/Group-4.png",
        "/Group-5.png",
        "/Group-6.png",
        "/Group-7.png",
        "/Group-8.png",
        "/Group-9.png",
      ].map((item) => (
        <img src={item} width={17} height={"auto"} alt="img" />
      ))}
      </Box>
     
    </div>
  );
}
