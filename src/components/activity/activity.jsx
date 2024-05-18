import { Avatar, Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import avatarimg from "../../images/avatar-image.png"
export default function Activity() {
  return (
    <div style={{paddingTop: "1rem"}}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Activity </Typography>
        <Link href="">View All</Link>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", paddingTop: "1rem",gap:"2rem" }}>
        <div style={{ display: "flex", gap:"2rem"}}>
          <div
            style={{
             
              color: "blue",
              textAlign: "center",
              alignContent: "center",
             
            }}>
            <Avatar sx={{ width: 55, height: 55 }} alt="Remy Sharp" src={avatarimg} /> 
           
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
                <div style={{display:"flex"}}>
                <Typography>John Doe</Typography>
                <Typography sx={{color:"blue"}}>[Python Dveloper]</Typography>

                </div>

            <Typography>Inter view with Designer</Typography>
            

            <Typography>15mins ago</Typography>
          </div>

         
        </div>
        <div style={{ display: "flex", gap:"2rem"}}>
          <div
            style={{
             
              color: "blue",
              textAlign: "center",
              alignContent: "center",
             
            }}>
            <Avatar sx={{ width: 55, height: 55 }} alt="Remy Sharp" src={avatarimg} /> 
           
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
                <div style={{display:"flex"}}>
                <Typography>John Doe</Typography>
                <Typography sx={{color:"blue"}}>[Python Dveloper]</Typography>

                </div>

            <Typography>Inter view with Designer</Typography>
            

            <Typography>15mins ago</Typography>
          </div>

         
        </div>
        <div style={{ display: "flex", gap:"2rem"}}>
          <div
            style={{
             
              color: "blue",
              textAlign: "center",
              alignContent: "center",
             
            }}>
            <Avatar sx={{ width: 55, height: 55 }} alt="Remy Sharp" src={avatarimg} /> 
           
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
                <div style={{display:"flex"}}>
                <Typography>John Doe</Typography>
                <Typography sx={{color:"blue"}}>[Python Dveloper]</Typography>

                </div>

            <Typography>Inter view with Designer</Typography>
            

            <Typography>15mins ago</Typography>
          </div>

         
        </div>
       
      </Box>
    </div>
  );
}
