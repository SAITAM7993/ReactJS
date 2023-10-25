import { Typography } from '@mui/material';
const Title = ({ title }) => {
  return (
    <>
      <Typography
        variant='h4'
        color='initial'
        align='left'
        my={5}
      >
        {title}
      </Typography>
    </>
  );
};

export default Title;
