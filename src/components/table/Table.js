import React from 'react';
import './Table.css';
import { IoIosArrowDown } from 'react-icons/io';
import { RiSearchLine } from 'react-icons/ri';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { TableData } from '../../utils/tableData';


const CustomTable = () => {

  return (
    <div className='table'>
      <div className='table-head'>
        <h3>Product Sell</h3>
        <div className="table-right">
          <div className="searchbar table-search">
            <button type="submit">
              <RiSearchLine size={18} />
            </button>
            <input type="text" placeholder="Search.." name="search" />
          </div>
          <div className='quantity'>
            <div>Last 30 days</div>
            <div><IoIosArrowDown /></div>
          </div>
        </div>
      </div>
      <div className='table-content'>
        <TableContainer component={Paper}
         style={{ boxShadow: "0px 13px 20px 0px #80808029", maxHeight: "750px", borderRadius: 20}}>
          <Table className='custom-table'>
            <TableHead>
              <TableRow>
                <TableCell className='table-header-cell' align="left" style={{ width: '60%' }}>Product</TableCell>
                <TableCell className='table-header-cell' align="center">Category</TableCell>
                <TableCell className='table-header-cell' align="center">Price</TableCell>
                <TableCell className='table-header-cell' align="center">Total Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left" style={{ width: '60%' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={row.image} alt="Product" style={{ width: '70px', marginRight: '10px', borderRadius: "5px" }} />
                      <div>
                        <h4>{row.heading}</h4>
                        <p>{row.description}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">{row.col2}</TableCell>
                  <TableCell align="center">{row.col3}</TableCell>
                  <TableCell align="center">{row.col4}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default CustomTable;
