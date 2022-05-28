import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ConnectWithoutContactSharpIcon from '@mui/icons-material/ConnectWithoutContactSharp';
import AddIcon from '@mui/icons-material/Add';

const useStyle = makeStyles((theme) => ({
  tmvCustomIcon: {
    position: 'fixed',
    top: '50%',
    left: 40,
  },
  tmvCustomIcon__menu: {
    position: 'relative',
    width: '10rem',
    height: '10rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down(830)]: {
      width: '8rem',
      height: '8rem',
    },
    '& > li': {
      position: 'absolute',
      left: 10,
      transform: 'rotate(calc(360deg / 3 * var(--i))) translateX(-15px)',
      transformOrigin: '4.5rem',
      visibility: 'hidden',
      opacity: 0,
      transition: '0.5s',
      zIndex: 10,
      '& > a': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2.5rem',
        height: '2.5rem',
        color: '#000011',
        transform: 'rotate(calc(360deg / -3 * var(--i)))',
        background: '#4d5198',
        borderRadius: '50%',
        '&:hover': {
          cursor: 'pointer',
        },
      },
      '&.active': {
        transform: 'rotate(calc(360deg / 3 * var(--i))) translateX(-45px)',
        [theme.breakpoints.down(830)]: {
          transform: 'rotate(calc(360deg / 3 * var(--i))) translateX(-10px)',
        },
      },
      [theme.breakpoints.down(830)]: {
        transform: 'rotate(calc(360deg / 3 * var(--i))) translateX(10px)',
        left: -8,
      },
    },
    '&.active > li': {
      visibility: 'visible',
      opacity: 1,
    },
  },
  tmvCustomIcon__toggle: {
    position: 'absolute',
    width: '4rem',
    height: '4rem',
    color: '#000011',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: '0.5s',
    '&.active': {
      transform: 'rotate(360deg)',
      boxShadow: '0 0 0 4rem #daf2dc',
      background: '#81b7d2',
      [theme.breakpoints.down(830)]: {
        boxShadow: '0 0 0 2rem #daf2dc',
      },
    },
  },
}));

const Menu = () => {
  const classes = useStyle();
  const listIcons = [
    { description: 'Introduce', Icon: HomeIcon },
    { description: 'About Me', Icon: PersonRoundedIcon },
    { description: 'My Skill', Icon: ConnectWithoutContactSharpIcon },
  ];
  const [toggle, setToggle] = useState(false);
  const [indexActive, setIndexActive] = useState(null);

  const handleToggleClass = () => {
    setToggle(!toggle);
    if (toggle) {
      setIndexActive(null);
    }
  };

  const handleActiveClass = (idx) => {
    setIndexActive(idx);
  };

  return (
    <section className={classes.tmvCustomIcon}>
      <ul
        className={
          !toggle
            ? `${classes.tmvCustomIcon__menu}`
            : `${classes.tmvCustomIcon__menu} active`
        }
      >
        <div
          className={
            !toggle
              ? `${classes.tmvCustomIcon__toggle}`
              : `${classes.tmvCustomIcon__toggle} active`
          }
          onClick={handleToggleClass}
        >
          {!toggle ? (
            <AddIcon htmlColor="#000011" />
          ) : (
            <AddIcon htmlColor="#fff" />
          )}
        </div>
        {listIcons.map((icon, idx) => {
          const { Icon } = icon;
          const customStyle = { '--i': idx };
          return (
            <li
              key={idx}
              style={customStyle}
              onClick={() => handleActiveClass(idx)}
              className={indexActive === idx && 'active'}
            >
              <a>
                {indexActive === idx ? (
                  <Icon htmlColor="#000011" />
                ) : (
                  <Icon htmlColor="#fff" />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
