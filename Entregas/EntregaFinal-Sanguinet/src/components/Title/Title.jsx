import { Typography } from '@mui/material';
const Title = ({ title }) => {
  return (
    <>
      <Typography
        variant='h2'
        color='initial'
        align='Left'
        my={4}
      >
        {title}
      </Typography>
    </>
  );
};

export default Title;
