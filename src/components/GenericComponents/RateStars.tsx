import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

const labels: { [index: string]: string } = {
  0.5: 'Awful',
  1: 'Awful+',
  1.5: 'Bad',
  2: 'Bad+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export const RateStars = () => {
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        gap: '5px'
      }}
    >
      <Rating
        sx={{
          color: 'var(--primary)'
        }}
        value={value}
        precision={0.5}
        onChange={(e, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
        onChangeActive={(e, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon sx={{ color: 'var(--terciary)' }} />}
      />
      {value !== null && (
        <Box>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}