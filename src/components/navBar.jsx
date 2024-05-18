import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { GiMayanPyramid } from "react-icons/gi";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../images/logo.png"
import icon1 from "../images/icon_1.png"
import icon2 from "../images/icon-2.png"

import icon3 from "../images/icon-3.png"

import icon4 from "../images/icon-4.png"
import avatarimage from "../images/avatar-image.png"




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
function NavBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar
      className={classes.appBar}
        style={{backgroundColor:"#fff",position: "fixed",
        zIndex: 100,
        top: "0px"}}
        position="static"
        sx={{ padding: "1rem" }}>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5rem",
              width: "100%",
            }}>
            <img src={logo} alt="img" width={200} />
            <TextField
              className={`${classes.textField} ${classes.root}`}
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "30%",
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
          </Box>

          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Box sx={{ flexGrow: 1, display: "flex",gap:"5rem",alignItems:"center" }}>
              {[icon4, icon2, icon1,icon3].map((page) => (
                <img width={"auto"} height={17} src={page} alt="img" />
              ))}
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={() => {}} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatarimage} />
              </IconButton>
            </Tooltip>
          </Box>
        </Container>
      </AppBar>
    </div>
  );
}
export default NavBar;
