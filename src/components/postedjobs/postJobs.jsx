import { Box, Link, TextField, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { IoFilterSharp } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { TiWorld } from "react-icons/ti";

import { PiDotsThreeVerticalLight } from "react-icons/pi";
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
export default function PostJobs() {
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
          <Typography>Posted Jobs</Typography>
          <Link href="">View All</Link>
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
      <Box>
        <div style={{ display: "flex", gap: "5rem" }}>
          <Typography>Active Jobs</Typography>
          <Typography>Pending Jobs</Typography>
        </div>

        <hr />
        <Box sx={{ display: "flex", gap: "2rem" }}>
          
        <div
            style={{
              height: "auto",
              width: "12rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "1rem 1rem 0",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #adacac",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: ".5rem",
                }}>
                <FaPython style={{ color: "#a83277" }} />
                <Typography>Python Developer</Typography>
              </div>

              <PiDotsThreeVerticalLight />
            </div>
            <Box sx={{gap:"1rem",display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem 0",}}>
              <Typography>Seneior DEveloper</Typography>
              <div
                style={{
                  height: "3.5rem",
                  width: "4rem",
                  backgroundColor: "blue",
                  textAlign:"center",
                  
                  alignContent:"center",
                }}>
                <Typography  sx={{color:"#fff"}}>258</Typography>
              </div>
              <Typography>Total Aplicants</Typography>
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
               paddingBottom:".5rem",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                borderTop: "1px solid #adacac",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: ".1rem",
                }}>
                <FaLongArrowAltUp style={{ color: "blue" }} />
                <div style={{
                display: "flex",
                gap:".5rem"
                
              }}>
                <Box sx={{color:"blue",fontSize:".8rem"}}>28% vs</Box>
                <Typography sx={{fontSize:".8rem"}}> Last month</Typography>
                </div>
                

              </div>

              <div style={{fontSize:".8rem"}}>6 mins ago</div>
            </div>
          </div>
          <div
            style={{
              height: "auto",
              width: "12rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "1rem 1rem 0",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #adacac",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: ".2rem",
                }}>
                <FaAngular style={{ color: "#a83277" }} />
                <Typography>Angular Developer</Typography>
              </div>

              <PiDotsThreeVerticalLight />
            </div>
            <Box sx={{gap:"1rem",display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem 0",}}>
              <Typography>Senior Developer</Typography>
              <div
                style={{
                  height: "3.5rem",
                  width: "4rem",
                  backgroundColor: "blue",
                  textAlign:"center",
                  
                  alignContent:"center",
                }}>
                <Typography sx={{color:"#fff"}}>258</Typography>
              </div>
              <Typography>Total Aplicants</Typography>
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
               paddingBottom:".5rem",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                borderTop: "1px solid #adacac",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: ".1rem",
                }}>
                <FaLongArrowAltUp style={{ color: "blue" }} />
                <div style={{
                display: "flex",
                gap:".5rem"
                
              }}>
                <Box sx={{color:"blue",fontSize:".8rem"}}>28% vs</Box>
                <Typography sx={{fontSize:".8rem"}}> Last month</Typography>
                </div>
                

              </div>

              <div style={{fontSize:".8rem"}}>6 mins ago</div>
            </div>
          </div>
          <div
            style={{
              height: "auto",
              width: "12rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "1rem 1rem 0",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #adacac",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: ".5rem",
                }}>
                <DiJava style={{ color: "#a83277" }} />
                <Typography>Java Developer</Typography>
              </div>

              <PiDotsThreeVerticalLight />
            </div>
            <Box sx={{gap:"1rem",display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem 0",}}>
              <Typography>Seneior DEveloper</Typography>
              <div
                style={{
                  height: "3.5rem",
                  width: "4rem",
                  backgroundColor: "blue",
                  textAlign:"center",
                  
                  alignContent:"center",
                }}>
                <Typography  sx={{color:"#fff"}}>258</Typography>
              </div>
              <Typography>Total Aplicants</Typography>
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
               paddingBottom:".5rem",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                borderTop: "1px solid #adacac",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: ".1rem",
                }}>
                <FaLongArrowAltUp style={{ color: "blue" }} />
                <div style={{
                display: "flex",
                gap:".5rem"
                
              }}>
                <Box sx={{color:"blue",fontSize:".8rem"}}>28% vs</Box>
                <Typography sx={{fontSize:".8rem"}}> Last month</Typography>
                </div>
                

              </div>

              <div style={{fontSize:".8rem"}}>6 mins ago</div>
            </div>
          </div>
          <div
            style={{
              height: "auto",
              width: "12rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "1rem 1rem 0",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #adacac",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: ".5rem",
                }}>
                <TiWorld style={{ color: "#a83277" }} />
                <Typography>UI/UX Developer</Typography>
              </div>

              <PiDotsThreeVerticalLight />
            </div>
            <Box sx={{gap:"1rem",display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem 0",}}>
              <Typography>Seneior DEveloper</Typography>
              <div
                style={{
                  height: "3.5rem",
                  width: "4rem",
                  backgroundColor: "blue",
                  textAlign:"center",
                  
                  alignContent:"center",
                }}>
                <Typography  sx={{color:"#fff"}}>258</Typography>
              </div>
              <Typography>Total Aplicants</Typography>
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
               paddingBottom:".5rem",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                borderTop: "1px solid #adacac",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: ".1rem",
                }}>
                <FaLongArrowAltUp style={{ color: "blue" }} />
                <div style={{
                display: "flex",
                gap:".5rem"
                
              }}>
                <Box sx={{color:"blue",fontSize:".8rem"}}>28% vs</Box>
                <Typography sx={{fontSize:".8rem"}}> Last month</Typography>
                </div>
                

              </div>

              <div style={{fontSize:".8rem"}}>6 mins ago</div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
