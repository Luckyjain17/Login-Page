import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SelectAutoWidth from './SelectAutoWidth';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(<a href="https://www.google.com">www.google.com</a>, "prefixsample",4 , <SelectAutoWidth />, 4.0),
  createData(<a href="https://www.google.com">www.google.com</a>, "prefixsample", 9.0, <SelectAutoWidth />, 4.3),
  createData(<a href="https://www.google.com">www.google.com</a>, "prefixsample", 16.0, <SelectAutoWidth />, 6.0),
  createData(<a href="https://www.google.com">www.google.com</a>, "prefixsample", 3.7, <SelectAutoWidth />, 4.3),
  createData(<a href="https://www.google.com">www.google.com</a>, "prefixsample", 16.0, <SelectAutoWidth />, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer sx={{padding:"15px",display:"flex",justifyContent:"center"}}>
      <Table sx={{ minWidth: 700,width:"70%"}} aria-label="customized table">
        <TableHead sx={{borderRadius:"50px"}}>
          <TableRow>
            <StyledTableCell>SI No.</StyledTableCell>
            <StyledTableCell align="right">Links</StyledTableCell>
            <StyledTableCell align="right">Prefix</StyledTableCell>
            <StyledTableCell align="right">Add Tags</StyledTableCell>
            <StyledTableCell align="right">Selected tags</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}