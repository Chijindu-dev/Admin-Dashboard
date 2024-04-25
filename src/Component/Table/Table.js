import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(
  name: string,
  TrackingID: number,
  Date: number,
  status: String,
) {
  return { name, TrackingID, Date, status,};
}

const rows = [
  createData('Lesania chicken fri', 19928398,"2 march 2022", "Approved",),
  createData('Big baza bang', 72749749,"2 march 2022", "pending",),
  createData('Mouth Freshner', 64286428,"2 march 2022", "Approved",),
  createData('CupCake', 62482642,"2 march 2022", "delivered",),

];

const makeStyles=(status)=>{
  if(status === 'Approved')
  {
    return {
      background:'rgb(145 245 159 / 47%)',
      color:'green'
    }
  }else if(status ==='pending'){
    return{
      background:'#ffadad8f',
      color:'red'
    }
  }else{
    return{
      background: '#59bfff',
      color:'white'
    }
  }
}

export default function BasicTable() {



  return (
    <div className="Table">
        <h3>Recent Orders</h3>

   
    <TableContainer component={Paper} 
    style={{boxShadow: "0px 13px 20px 0px #80808029 "}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.TrackingID}</TableCell>
              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="left">
              <span className="status" style={makeStyles(row.status)}>
                {row.status}
              </span>
              </TableCell>
              <TableCell align="left" className="Details">Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}