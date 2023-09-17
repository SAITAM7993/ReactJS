/* PRUEBAS VARIAS DE COMPONENTES */
import {
  Button,
  ThemeProvider,
  ButtonGroup,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Fab,
  Grid,
  Container,
  Typography,
} from '@mui/material';

//se podría dar especificidad a los imports en vez de {} e importar de mui/material podríamos importar UNICAMENTE ese componente dandole la ruta exacta, en teoría hace que cargue mas rapido, por ej abajo con los AddIcon, EditIcon
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

//para tablas
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//alerts
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

//mi tema personalizado
import ThemeBlack from '../../themes/ThemeBlack';
//puedo crear un array de botones con componentes botones, le paso su key y abajo lo cargo en un buttongroup
const buttons = [
  <Button key='one'>One</Button>,
  <Button key='two'>Two</Button>,
  <Button key='three'>Three</Button>,
];

//esto es para crear tablas, funcion que recibe los datos
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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; //ver bien como funciona esto, es para los checkbox
const Random = () => {
  return (
    <>
      <ThemeProvider theme={ThemeBlack}>
        {/* GRID, importante, es para acomodar como quiero, parecido a bootstrap, se basa en 12 columnas */}
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={5}
          >
            {/* spacing es el espaciado en tre columnas, es en PX*/}
            <Grid
              item
              sm={12}
              md={6}
              lg={3}
            >
              {/* grid item es un item del grid, luego le digo CUANTO OCUPAR Y EN QUE TAMAÑO, por ej en xs que ocupe 6 de las 12 columnas */}
              <Typography
                variant='body1'
                color='primary'
                sx={{
                  backgroundColor: 'lightGreen',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                iure debitis tenetur voluptas fuga, natus cupiditate totam
                tempore numquam. Maiores eum esse necessitatibus assumenda quo
                quis animi distinctio voluptate quibusdam.
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              lg={3}
            >
              {/* grid item es un item del grid, luego le digo CUANTO OCUPAR Y EN QUE TAMAÑO, por ej en xs que ocupe 6 de las 12 columnas */}
              <Typography
                variant='body1'
                color='primary'
                sx={{
                  backgroundColor: 'lightBlue',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                iure debitis tenetur voluptas fuga, natus cupiditate totam
                tempore numquam. Maiores eum esse necessitatibus assumenda quo
                quis animi distinctio voluptate quibusdam.
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={12}
              lg={12}
              sx={{
                backgroundColor: 'grey',
              }}
            >
              {/* grid item es un item del grid, luego le digo CUANTO OCUPAR Y EN QUE TAMAÑO, por ej en xs que ocupe 6 de las 12 columnas */}
              <Typography
                variant='body1'
                color='primary'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                iure debitis tenetur voluptas fuga, natus cupiditate totam
                tempore numquam. Maiores eum esse necessitatibus assumenda quo
                quis animi distinctio voluptate quibusdam.
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* FIN GRID */}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          {/*variant es el estilo y color puede ser success, error .. etc */}
          <ButtonGroup
            variant='contained'
            size='small'
            aria-label='small button group'
          >
            {buttons}
          </ButtonGroup>
          <ButtonGroup
            color='secondary'
            aria-label='medium secondary button group'
          >
            {buttons}
          </ButtonGroup>
          <ButtonGroup
            size='large'
            aria-label='large button group'
          >
            {buttons}
          </ButtonGroup>
        </Box>

        <Checkbox
          {...label}
          defaultChecked
        />
        <Checkbox {...label} />
        <Checkbox
          {...label}
          disabled
        />
        <Checkbox
          {...label}
          disabled
          checked
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='Label'
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label='Required'
          />
          <FormControlLabel
            disabled
            control={<Checkbox />}
            label='Disabled'
          />
        </FormGroup>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab
            color='primary'
            aria-label='add'
          >
            <AddIcon />
          </Fab>

          <Fab
            color='secondary'
            aria-label='edit'
          >
            <EditIcon />
          </Fab>

          <Fab variant='extended'>
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>

          <Fab
            disabled
            aria-label='like'
          >
            <FavoriteIcon />
          </Fab>
        </Box>

        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label='dense table'
          >
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align='right'>Calories</TableCell>
                <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                <TableCell align='right'>Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component='th'
                    scope='row'
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='right'>{row.carbs}</TableCell>
                  <TableCell align='right'>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Stack
            sx={{ width: '100%' }}
            spacing={2}
          >
            <Alert severity='error'>
              This is an error alert — check it out!
            </Alert>
            <Alert severity='warning'>
              This is a warning alert — check it out!
            </Alert>
            <Alert severity='info'>This is an info alert — check it out!</Alert>
            <Alert severity='success'>
              This is a success alert — check it out!
            </Alert>
          </Stack>
        </TableContainer>

        {/*EJEMPLO PAPER, SEGUN ELEVACION GENERA MAS SOMBRA, CUANDO MENOS ELEVATION MENOS SOMBRA (SIMULA UN PAPEL LEVANTADO) */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={0} />
          <Paper elevation={1} />
          <Paper elevation={2} />
          <Paper elevation={24} />
        </Box>
      </ThemeProvider>
      ;
    </>
  );
};
export default Random;
