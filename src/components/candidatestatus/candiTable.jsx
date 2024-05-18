import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaEye } from "react-icons/fa";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#c9c9c7",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, name, position, onelevel, secondlevel,thrlevel,furthlevel,marks,stats,action ) {
  return { id, name, position, onelevel, secondlevel,thrlevel,furthlevel,marks,stats,action };
}

const rows = [
  createData("#001","Jhone","Designer", "6/10","7/10","3/10","...","...","Active",FaEye),
  createData("#001","Jhone","Designer", "6/10","7/10","3/10","...","...","Active",FaEye),

  createData("#001","Jhone","Designer", "6/10","7/10","3/10","...","...","Active",FaEye),

  createData("#001","Jhone","Designer", "6/10","7/10","3/10","...","...","Active",FaEye),

  createData("#001","Jhone","Designer", "6/10","7/10","3/10","...","...","Active",FaEye),

];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Job ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
            <StyledTableCell align="right">1st level</StyledTableCell>
            <StyledTableCell align="right">2nd level</StyledTableCell>
            <StyledTableCell align="right">3rd level</StyledTableCell>
            <StyledTableCell align="right">4th level</StyledTableCell>
            <StyledTableCell align="right">Total Marks</StyledTableCell>

            <StyledTableCell align="right">Status</StyledTableCell>

            <StyledTableCell align="right">Action</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
                {/* id, name, position, onelevel, secondlevel,thrlevel,furthlevel,marks,stats,action  */}
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
              <StyledTableCell align="right">{row.onelevel}</StyledTableCell>
              <StyledTableCell align="right">{row.secondlevel}</StyledTableCell>
              <StyledTableCell align="right">{row.thrlevel}</StyledTableCell>
              <StyledTableCell align="right">{row.furthlevel}</StyledTableCell>
              <StyledTableCell align="right">{row.marks}</StyledTableCell>
              <StyledTableCell align="right">{row.stats}</StyledTableCell>
              <StyledTableCell align="right">{<row.action/>}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
