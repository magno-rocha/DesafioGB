import {React, useEffect, useState} from 'react';
import './Products.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Products() {
  const classes = useStyles();
  const [apiUrl] = useState(
    'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
  );
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setProducts(response.data);
    });
  }, [apiUrl]);
  return (
    <div className="table-container">
      <h1>Produtos</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Senha</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">Telefone</TableCell>
              <TableCell align="right">Data&nbsp;de&nbsp;Nascimento</TableCell>
              <TableCell align="right">Endereço ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default Products;
