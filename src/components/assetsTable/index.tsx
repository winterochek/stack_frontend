import React, { FC } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useStyles } from './styles'
import { ISingleAsset, ITablePriceData } from '../../common/types/assets';

export const AssetsTableComponent:FC<ITablePriceData> = (props:ITablePriceData):JSX.Element => {
    const {assets} = props
    const classes = useStyles()
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Coin</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Change (%)</TableCell>
          <TableCell align="right">Change ($)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {assets.map((item:ISingleAsset) => (
          <TableRow
            key={item.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {item.name}
            </TableCell>
            <TableCell align="right">{item.current_price}</TableCell>
            <TableCell className={item.price_change_percentage_24h > 0 ? `${classes.trendUp}` : `${classes.trendDown}`} align="right">{item.price_change_percentage_24h.toFixed(2)}</TableCell>
            <TableCell className={item.price_change_24h > 0 ? `${classes.trendUp}` : `${classes.trendDown}`} align="right">{item.price_change_24h.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
