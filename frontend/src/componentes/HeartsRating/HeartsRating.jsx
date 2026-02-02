import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import './HeartsRating.css'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating() {
  return (
    <Box id='heart-box'
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <StyledRating id='hearts'
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={1}
        icon={<FavoriteIcon className='heart-size' fontSize='large' />}
        emptyIcon={<FavoriteBorderIcon className='heart-size' fontSize="large" />}
      />
    </Box>
  );
}