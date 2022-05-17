import React from 'react';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles((theme) => ({
  tmvMainTitle: {
    color: '#fff',
    fontFamily: 'Cosmic',
    fontSize: '5rem',
    position: 'relative',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 1,
      width: '100%',
      height: 2,
      background: '#fff',
    },
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 1,
      width: '20%',
      height: 2,
      background: '#0563bb',
      left: 'calc(50% - 10%)',
    },
    [theme.breakpoints.down(560)]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.down(500)]: {
      fontSize: '2.5rem',
    },
  },
}));
const Header = ({ content }) => {
  const classes = useStyle();
  return <h2 className={classes.tmvMainTitle}>{content}</h2>;
};

export default Header;
