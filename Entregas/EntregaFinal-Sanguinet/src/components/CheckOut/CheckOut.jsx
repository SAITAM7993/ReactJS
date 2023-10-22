import { FormControl, TextField, Button } from '@mui/material';
import { useState } from 'react';
import Title from '../Title/Title';

const CheckOut = () => {
  const [email, setEmail] = useState();
  //func para validar campos
  const [error, setError] = useState({
    error: false,
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); //para que no haga el reload
    console.log(e.target);
  };

  return (
    <>
      <Title title='Check out' />

      <FormControl
        component='form'
        fullWidth
        defaultValue=''
        onSubmit={handleSubmit}
        autocomplete='off'
      >
        <TextField
          sx={{ mb: 3 }}
          id='form-name'
          type='text'
          color='primary'
          label='Your full name'
          required
          //   value={name}
          //   onChange={(e) => setName(e.target.value)}
          //   helperText={!name ? 'Name is required' : null}
          //   error={!name}
        />
        <TextField
          sx={{ mb: 3 }}
          id='form-email'
          type='email'
          color='primary'
          label='Your e-mail'
          required
          value={email}
          helperText={error.message}
          onChange={(e) => setEmail(e.target.value)}
          error={error.error}
        />
        <TextField
          sx={{ mb: 3 }}
          id='form-email-2'
          type='text'
          color='primary'
          label='Repeat your e-mail'
          required
          //   value={mailB}
          //   helperText={!mailB ? 'Name is required' : null}
          //   onChange={(e) => setMailB(e.target.value)}
          //   error={!mailB}
        />
        <TextField
          sx={{ mb: 3 }}
          id='form-phone'
          type='text'
          color='primary'
          label='Phone'
          required
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
};
export default CheckOut;

/* NOTAS
required hace que tenga un "*", si n ose pone default value se carga arriba el nombre del campo */
