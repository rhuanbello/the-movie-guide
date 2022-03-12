import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

import { FavoriteIconProps, RateStarsProps, WatchIconProps } from './interfaces';

export const DetailsIcon = ({ dropDown }: any) => {
  return (
    <>
      {dropDown ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path fill="none" d="M0 0h24v24H0z" />
          <path fill="var(--light)" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path fill="none" d="M0 0h24v24H0z" />
          <path fill="var(--light)" d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
      )}
    </>
  )
}

export const FavoriteIcon = ({ 
  defaultColor,
  actionColor, 
  size, 
  isFavorite, 
  noText
}: FavoriteIconProps) => {
  return (
    <button
      className="noFilter"
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        fontSize: 14
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || 24} height={size || 24}>
        <path fill="none" d="M0 0H24V24H0z" />
        <path fill={isFavorite ? actionColor || 'var(--primary)' : defaultColor || 'var(--terciary)'} d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
      </svg>
      {!noText && (
        <p>{isFavorite ? 'Unfavorite' : 'Favorite'}</p>
      )}
    </button>
  )
}

export const WatchIcon = ({ 
  onClick, 
  defaultColor, 
  actionColor, 
  size, 
  isWatched, 
  noText,
}: WatchIconProps) => {
  return (
    <button
      onClick={onClick}
      className="noFilter"
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        fontSize: 14,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || 24} height={size || 24}>
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill={isWatched ? actionColor || 'var(--primary)' : defaultColor || 'var(--terciary)'} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
      </svg>
      {!noText && (
        <p>{isWatched ? 'Remove' : 'Watch'}</p>
      )}
    </button>
  )
}

export const RateStars = ({ 
  defaultColor, 
  hoverX, 
  onChange, 
  value, 
  isProfile 
}: RateStarsProps) => {
  const [hover, setHover] = useState<any>(-1);

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

  return (
    <Box
      sx={{
        display: hoverX ? 'flex' : 'grid',
        placeItems: 'center',
        gap: '10px',
      }}
    >
      <Rating
        sx={{
          color: 'var(--primary)',
          fontSize: isProfile ? 20 : 24,
          marginBlock: isProfile && '7px'
        }}
        value={value}
        precision={0.5}
        onChange={onChange}
        onChangeActive={(e, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon sx={{ color: defaultColor || 'var(--terciary)', fontSize: isProfile ? 20 : 24, }} />}
      />
      {!isProfile && value !== null && (
        <Box>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

export const ScrollBack = ({ onClick, scrollY }: any) => {
  return (
    <button
      onClick={onClick}
      className="noFilter"
      style={{
        border: 'none',
        backgroundColor: 'var(--contrast)',
        color:'var(--primary)',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        borderRadius: '50%',
        padding: '7px',
        transform: scrollY >= 3000 ? 'translateY(0)' : 'translateY(100px)',
        opacity: scrollY >= 3000 ? '1' : '0',
        transition: '.4s ease-in-out'
      }}
    >
      <BsArrowUpShort size={32} />      
    </button>
  )

}