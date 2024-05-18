import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";

export default function Upcoming() {
  return (
    <div style={{paddingTop: "1rem"}}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Upcoming </Typography>
        <Link href="">View All</Link>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", paddingTop: "1rem",gap:"2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              height: "3rem",
              width: "3rem",
              color: "blue",
              textAlign: "center",
              alignContent: "center",
              backgroundColor: "#c8c8f7",
              fontSize:".7rem"
            }}>
            {" "}
            07 Feb
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <Typography>Inter view with Designer</Typography>
            <div style={{ display: "flex" }}>
              <Typography>created by</Typography>
              <Typography sx={{ color: "blue" }}>Stella</Typography>
            </div>

            <Typography>10 am to 11 am</Typography>
          </div>

          <div>
            <Button sx={{textTransform:"none"}} size="small" variant="contained">details</Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              height: "3rem",
              width: "3rem",
              color: "blue",
              textAlign: "center",
              alignContent: "center",
              backgroundColor: "#dbdbdb",
              fontSize:".7rem"

            }}>
            {" "}
            07 Feb
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <Typography>Inter view with Designer</Typography>
            <div style={{ display: "flex" }}>
              <Typography>created by</Typography>
              <Typography sx={{ color: "blue" }}>Stella</Typography>
            </div>

            <Typography>10 am to 11 am</Typography>
          </div>

          <div>
            <Button sx={{textTransform:"none"}} size="small" variant="contained">details</Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              height: "3rem",
              width: "3rem",
              color: "blue",
              textAlign: "center",
              alignContent: "center",
              backgroundColor: "#dbdbdb",
              fontSize:".7rem"

            }}>
            {" "}
            07 Feb
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <Typography>Inter view with Designer</Typography>
            <div style={{ display: "flex" }}>
              <Typography>created by</Typography>
              <Typography sx={{ color: "blue" }}>Stella</Typography>
            </div>

            <Typography>10 am to 11 am</Typography>
          </div>

          <div>
            <Button size="small" sx={{textTransform:"none"}} variant="contained">details</Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
