import React from 'react';
import { makeStyles } from '@mui/styles';
import Header from '../../components/Header';
import { Chip } from '@mui/material';
import IconReact from '../../assets/Icons/IconReactJS';
import IconHtml from '../../assets/Icons/IconHTML';
import IconCss from '../../assets/Icons/IconCSS';
import IconJavascript from '../../assets/Icons/IconJavascript';
import IconJquery from '../../assets/Icons/IconJquery';
import IconMaterialUI from '../../assets/Icons/IconMaterialUI';

const useStyle = makeStyles((theme) => ({
  tmvSkill: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem 20rem',
    backgroundColor: '#121212',
    color: '#fff',
    [theme.breakpoints.down(1290)]: {
      padding: '5rem 10rem',
    },
    [theme.breakpoints.down(860)]: {
      padding: '5rem 5rem',
    },
  },
  tmvListSkill: {
    width: '100%',
    height: '100%',
    marginTop: '5rem',
  },
  tmvSkill__tag: {
    width: '50%',
    height: '50%',
    '&.MuiChip-root': {
      height: 100,
      justifyContent: 'center',
      fontSize: '3rem',
      '& > .MuiChip-label': {
        color: '#fff',
      },
      [theme.breakpoints.down(600)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.down(500)]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.down(400)]: {
        fontSize: '1.2rem',
      },
    },
    [theme.breakpoints.down(1290)]: {
      width: '100%',
      height: '100%',
      marginTop: '1rem',
    },
  },
}));

const Index = () => {
  const classes = useStyle();
  const listSkill = [
    { labelProgress: 'HTML', Icon: IconHtml },
    { labelProgress: 'CSS', Icon: IconCss },
    { labelProgress: 'React JS', Icon: IconReact },
    { labelProgress: 'JavaScript', Icon: IconJavascript },
    { labelProgress: 'JQuery', Icon: IconJquery },
    { labelProgress: 'Material UI', Icon: IconMaterialUI },
  ];
  return (
    <section className={`tmv ${classes.tmvSkill}`}>
      <Header content="My skill" />
      <section className={classes.tmvListSkill}>
        {listSkill.map((item) => {
          const { labelProgress } = item;
          const { Icon } = item;
          return (
            <Chip
              key={labelProgress}
              className={classes.tmvSkill__tag}
              avatar={<Icon />}
              label={labelProgress}
              color={'primary'}
              variant="outlined"
            />
          );
        })}
      </section>
    </section>
  );
};

export default Index;
