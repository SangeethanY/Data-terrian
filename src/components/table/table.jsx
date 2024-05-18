import React from "react";
import CustomizableTable from "./customizableTable";
import {
  Avatar,
  Box,
  Button,
  TableBody,
  Typography,
  colors,
} from "@mui/material";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import styles from "./table.module.scss";
const Table = () => {
  const headers = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    // Add more headers as needed
  ];

  const data = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    // Add more data rows
  ];

  return (
    <div style={{ display: "flex", width: "100%", gap: "2rem" }}>
      <Box className={styles.tableBody}>
        <table className={`${styles.table} ${styles.tableCont}`}>
          <td  style={{verticalAlign:"center", width: "40%", borderRight: "1px solid #adacac" }}>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent:"center",
                flexDirection: "column",
                alignItems: "center",
                
              }}>
              <Avatar alt="Remy Sharp" src="/avatar-image.png" />
              <Typography>Mervin</Typography>
              <Typography>Python Developer</Typography>
            </div>
            <div style={{ paddingTop: "6.3rem" }}>
              <table
                style={{
                  color: "blue",
                  textAlign: "center",
                  borderTop: "1px solid #adacac",
                }}
                className={` ${styles.tableCont}`}>
                <td
                  style={{ borderRight: "1px solid #adacac", padding: ".5rem" }}
                  className={styles.datacell}>
                  <FaRegCalendarDays size={"1.8rem"} />
                  <Typography style={{ fontSize: ".8rem" }}>
                    19th Feb 2024
                  </Typography>
                </td>
                <td style={{ padding: ".5rem" }} className={styles.datacell}>
                  <FaClock size={"1.8rem"} />
                  <Typography style={{ fontSize: ".8rem" }}>
                    10:00 am
                  </Typography>
                </td>
              </table>
            </div>
          </td>
          <td style={{ width: "60%" }}>
            <tr
              className={styles.tableCont}
              style={{ borderBottom: "1px solid #adacac" }}>
              <td
                className={styles.datacell}
                style={{ borderRight: "1px solid #adacac" }}>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  1st Level : 7/10
                </Typography>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  1st Level : 7/10
                </Typography>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  1st Level : 7/10
                </Typography>
                <Typography style={{padding:".5rem"}}>1st Level : 7/10</Typography>
              </td>

              <td className={styles.datacell}>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  Interviwer : Stephen
                </Typography>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  Interviwer : Stephen
                </Typography>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  Interviwer : Stephen
                </Typography>
                <Typography style={{padding:".5rem", }}>Interviwer : Stephen</Typography>
              </td>
            </tr>
            <tr style={{ padding: "2rem 1rem" }} className={styles.tableCont}>
              <td className={styles.datacell}>
                <Button
                  style={{ fontSize: ".8rem", textTransform: "none" }}
                  size="small"
                  variant="outlined">
                  Reschedule Meeting
                </Button>
              </td>
              <td className={styles.datacell}>
                <Button
                  style={{ fontSize: ".8rem", textTransform: "none" }}
                  size="small"
                  variant="contained">
                  Join Meeting
                </Button>
              </td>
            </tr>
          </td>
        </table>
      </Box>
      <Box style={{width:"30%"}}>
        <table className={`${styles.table} ${styles.tableCont}`}>
          <td style={{ width: "60%", borderRight: "1px solid #adacac" }}>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Avatar alt="Remy Sharp" src="/avatar-image.png" />
              <Typography>Mervin</Typography>
              <Typography>Python Developer</Typography>
            </div>
            <div style={{ paddingTop: "6.3rem" }}>
              <table
                style={{
                  color: "blue",
                  textAlign: "center",
                  borderTop: "1px solid #adacac",
                }}
                className={` ${styles.tableCont}`}>
                <td
                  style={{ borderRight: "1px solid #adacac", padding: ".5rem" }}
                  className={styles.datacell}>
                  <FaRegCalendarDays size={"1.5rem"} />
                  <Typography style={{ fontSize: ".6rem" }}>
                    19th Feb 2024
                  </Typography>
                </td>
                <td style={{ padding: ".5rem" }} className={styles.datacell}>
                  <FaClock size={"1.5rem"} />
                  <Typography style={{ fontSize: ".7rem" }}>
                    10:00 am
                  </Typography>
                </td>
              </table>
            </div>
          </td>
          <td style={{ width: "30%" }}>
            <tr
              className={styles.tableCont}
              style={{ borderBottom: "1px solid #adacac" }}>
              <td
                className={styles.datacell}
                // style={{ borderRight: "1px solid #adacac" }}
                >
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  1st Lev 
                </Typography>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  1st Lev 
                </Typography>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  1st Lev 
                </Typography>
                <Typography style={{padding:".5rem"}}>1st Lev </Typography>
              </td>

              {/* <td className={styles.datacell}>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  Interviwer : Stephen
                </Typography>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  Interviwer : Stephen
                </Typography>
                <Typography style={{padding:".5rem", borderBottom: "1px solid #adacac" }}>
                  Interviwer : Stephen
                </Typography>
                <Typography style={{padding:".5rem", }}>Interviwer : Stephen</Typography>
              </td> */}
            </tr>
            <tr style={{ padding: "1.7rem 1rem" }} className={styles.tableCont}>
              <td className={styles.datacell}>
                <Button
                  style={{ fontSize: ".5rem", textTransform: "none" }}
                  size="small"
                  variant="outlined">
                  Reschedule Meeting
                </Button>
              </td>
              {/* <td className={styles.datacell}>
                <Button
                  style={{ fontSize: ".8rem", textTransform: "none" }}
                  size="small"
                  variant="contained">
                  Join Meeting
                </Button>
              </td> */}
            </tr>
          </td>
        </table>
      </Box>
    </div>
  );
};

export default Table;
