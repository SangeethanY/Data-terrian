import { Box, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import CustomizedTables from "./candiTable";


const useStyles = makeStyles((theme) => ({
    appBar: {
      height: 80, // Adjust height as needed
    },
    textField: {
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused, &.Mui-focused fieldset": {
          borderColor: "#fff", // Change this to your desired focused border color
        },
        "&:hover fieldset": {
          borderColor: "#fff", // Change this to your desired hover border color
        },
      },
    },
    root: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "none", // Remove the border
        },
      },
    },
  }));
export default function CandidateStatus () {
    const classes = useStyles();
  return (
    <div style={{ marginTop: "1rem",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px" ,padding:"1.5rem"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Typography fontSize={"1.3rem"}>Candidate Status</Typography>
          <Link href="" fontSize={"1.2rem"}>View All</Link>
        </div>
        <div style={{ display: "flex", gap: "3rem" }}>
          <TextField
            className={`${classes.textField} ${classes.root}`}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              //   width: "30%",
              height: "fit-content",
            }}
            size="small"
            label="Search"
            InputLabelProps={{
              style: {
                fontSize: "0.8rem",
                color: "#aba9a9",
              },
            }}
            InputProps={{
              style: {
                borderColor: "#fff",
              },
              endAdornment: <SearchIcon style={{ marginLeft: "-24px" }} />,
            }}
          />

          <div
            style={{
              width: "7rem",
              height: "2.5rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}>
            <IoFilterSharp style={{ color: "blue" }} size={"2rem"} />
          </div>
        </div>
      </Box>
      <div style={{marginTop:"1rem"}}>
        <CustomizedTables/>
      </div>
    </div>
  );
}
