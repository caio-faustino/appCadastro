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
import {getNomeTipo,getNomeTipoLabel} from '../../../functions/static_data'


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

  async function handleDelete(id){
    if(window.confirm("Deseja realmente excluir este usuário?")){
      var result = await api.delete('/api/usuarios/'+id);
      if(result.status ===200){
        window.location.href = '/admin/usuarios';
      }else{
        alert('Ocorreu um erro. Por favor, tente novamente!');
      }
    }
  }

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
              <Button variant="contained" aria-label="contained button group" color="primary" href={'/admin/usuarios/cadastrar'}>Cadastrar</Button>
              <Paper sx={{ pl: 2 }}>
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
                          <TableCell align="center">Opções</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {usuarios.map((row) => (
                            <TableRow key={row._id}>
                              <TableCell component="th" scope="row">
                                {row.nome_usuario}
                              </TableCell>
                              <TableCell align="center">{row.email_usuario}</TableCell>
                              <TableCell align="center"><Chip label={getNomeTipo(row.tipo_usuario)} color={getNomeTipoLabel(row.tipo_usuario)}/></TableCell>
                              <TableCell align="center">{new Date(row.createdAt).toLocaleString('pt-br')}</TableCell>
                              <TableCell align="center">
                              <ButtonGroup variant="contained" aria-label="contained button group">
                                <Button color="primary" href={'/admin/usuarios/editar/'+row._id}>Atualizar</Button>
                                <Button color="error" onClick={() => handleDelete(row._id)}>Excluir</Button>
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