/* eslint-disable jsx-a11y/alt-text */
import React, {useState,useEffect} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import api from '../../../services/api';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';


const mdTheme = createTheme();

function UsuariosListagem() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() =>{
    async function loadUsuarios(){
      const response = await api.get("/api/usuarios");
      setUsuarios(response.data)
    }
    loadUsuarios();
  },[]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>

        <MenuAdmin title={'USUÁRIOS'} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
            <Grid container spacing={6}>
              
              <Grid item sm={12}>
              <Paper Paper sx={{ pl: 2 }}>
                <h2>Listagem de Usuários</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nome</TableCell>
                          <TableCell align="center">Email</TableCell>
                          <TableCell align="center">Tipo</TableCell>
                          <TableCell align="center">Data de Cadastro</TableCell>
                          <TableCell align="right">Opções</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {usuarios.map((row) => (
                            <TableRow key={row._id}>
                              <TableCell component="th" scope="row">
                                {row.nome_usuario}
                              </TableCell>
                              <TableCell align="center">{row.email_usuario}</TableCell>
                              <TableCell align="center">{row.tipo_usuario===1?<Chip label="Administrador" color="primary"/>:<Chip label="Funcionario" color="secondary"/>}</TableCell>
                              <TableCell align="center">{new Date(row.createdAt).toLocaleString('pt-br')}</TableCell>
                              <TableCell align="right">
                              <ButtonGroup variant="contained" aria-label="contained button group">
                                <Button color="primary">Atualizar</Button>
                                <Button color="error">Excluir</Button>
                              </ButtonGroup>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
              </Grid>

              
            </Grid>
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
        
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
return <UsuariosListagem />;
}