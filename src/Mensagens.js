import React, {useState, useEffect} from 'react';
import './App.css';
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EditDialog from './EditDialog';
import DeleteDialog from './DeleteDialog';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 20,
  },
}))(TableCell);

function Mensagens() {

    useEffect(() => {
        fetchMensagens();
    }, []);

    const[items, setItems] = useState([]);

    const fetchMensagens = async () => {
        const data = await fetch("http://localhost/musico/refresh.php?valueToSearchNome");
        const items = await data.json();
        setItems(items);
    }

  return (
    <div>
        <Table>
        <TableHead>
            <TableRow>
                <StyledTableCell>#ID</StyledTableCell>
                <StyledTableCell>Data</StyledTableCell>
                <StyledTableCell>Hora</StyledTableCell>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell>E-mail</StyledTableCell>
                <StyledTableCell>Estado</StyledTableCell>
                <StyledTableCell>Origem</StyledTableCell>
                <StyledTableCell>Newsletter</StyledTableCell>
                <StyledTableCell>Mensagem</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {items.map(item => (
            <TableRow key={item.me_codigo}>
              <TableCell>{item.me_codigo}</TableCell>
              <TableCell>{item.me_data}</TableCell>
              <TableCell>{item.me_hora}</TableCell>
              <TableCell>{item.me_nome}</TableCell>
              <TableCell>{item.me_email}</TableCell>
              <TableCell>{item.me_estado}</TableCell>
              <TableCell>{item.me_how}</TableCell>
              <TableCell>{item.me_checkbox}</TableCell>
              <TableCell>{item.me_textbox}</TableCell>  
              <TableCell><EditDialog></EditDialog></TableCell>
              <TableCell><DeleteDialog></DeleteDialog></TableCell>      
            </TableRow>
            ))}
        </TableBody>
    </Table>
      
    </div>
  );
}

export default Mensagens;