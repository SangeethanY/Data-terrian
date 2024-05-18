import { Avatar, Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import ava from "../../images/ava.jpg"

export default function HiringCandi() {
  return (
    <div style={{ paddingTop: "1rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Hiring Candidate </Typography>
        <Link href="">View All</Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "1rem",
          gap: "2rem",
        }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Avatar
              sx={{ width: 55, height: 55 }}
              alt="Remy Sharp"
              src={ava}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <Typography>John Doe </Typography>

            <Typography>Senior python developer</Typography>

            <Typography>Hired by stella</Typography>
          </div>

          <div>
            <Button
              sx={{ textTransform: "none" }}
              size="small"
              variant="outlined">
              details
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Avatar
              sx={{ width: 55, height: 55 }}
              alt="Remy Sharp"
              src={ava}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <Typography>John Doe </Typography>

            <Typography>Senior python developer</Typography>

            <Typography>Hired by stella</Typography>
          </div>

          <div>
            <Button
              sx={{ textTransform: "none" }}
              size="small"
              variant="outlined">
              details
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Avatar
              sx={{ width: 55, height: 55 }}
              alt="Remy Sharp"
              src={ava}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <Typography>John Doe </Typography>

            <Typography>Senior python developer</Typography>

            <Typography>Hired by stella</Typography>
          </div>

          <div>
            <Button
              sx={{ textTransform: "none" }}
              size="small"
              variant="outlined">
              details
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
