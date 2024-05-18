import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function BodyHead() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{ textAlign: "start", display: "flex", flexDirection: "column",gap:".5rem" }}>
          <Typography variant="h6">HR Employee</Typography>
          <Typography>
            Enjoy your selecting potential candidates Tracking and Management
            System.
          </Typography>
        </Box>
        <Box>
          <Button sx={{ fontSize: "0.7rem" }} size="large" variant="contained">
            Task Details
          </Button>
        </Box>
      </Box>
    </div>
  );
}
