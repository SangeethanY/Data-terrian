import { Box } from "@mui/material";
import React from "react";
import Group1 from "../images/Group-1.png"
import Group2 from "../images/Group-2.png"
import Group3 from "../images/Group-3.png"
import Group4 from "../images/Group-4.png"
import Group5 from "../images/Group-5.png"
import Group6 from "../images/Group-6.png"
import Group7 from "../images/Group-7.png"
import Group8 from "../images/Group-8.png"
import Group9 from "../images/Group-9.png"


export default function SideBar() {
  return (
    <div >
      <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"2rem",gap:"2rem"}}>
      {[
       Group1,
       Group2,
       Group3,
       Group4,
       Group5,
       Group6,
       Group7,
       Group8,
       Group9,
      ].map((item) => (
        <img src={item} width={17} height={"auto"} alt="img" />
      ))}
      </Box>
     
    </div>
  );
}
