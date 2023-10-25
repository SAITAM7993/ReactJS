import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';

//type: error, warning, info, success
const Message = ({ type, message }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack
      spacing={2}
      sx={{ width: '100%' }}
    >
      <Snackbar open={open}>
        <Alert
          variant='filled'
          onClose={handleClose}
          severity={type}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Message;
