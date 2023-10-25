import Title from '../../Title/Title';
import { Box, Typography } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import RecyclingIcon from '@mui/icons-material/Recycling';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack';

const About = () => {
  return (
    <>
      <Title title='ABOUT US' />
      <Typography
        variant='body1'
        color='initial'
      >
        We are F-STORE company, dedicated to providing the best service to our
        customers.
      </Typography>

      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Typography
            variant='body1'
            color='initial'
          >
            <RecyclingIcon />
            asdasds
          </Typography>
          <PaidIcon />
          <CategoryIcon />
          <LocationOnIcon />
        </Stack>
      </Box>
      <Box
        p={'7%'}
        sx={{
          width: '100%',
        }}
      ></Box>
    </>
  );
};

export default About;
