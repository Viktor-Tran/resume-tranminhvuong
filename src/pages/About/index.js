import { Box, Grid, List, ListItem, ListItemIcon, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';

import Avatar from '../../assets/images/avatar.jpg';
import Header from '../../components/Header';
const useStyle = makeStyles((theme) => ({
  tmvAbout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem 20rem',
    backgroundColor: '#333',
    color: '#fff',
    [theme.breakpoints.down(1780)]: {
      padding: '5rem 15rem',
    },
    [theme.breakpoints.down(1630)]: {
      padding: '5rem 12rem',
    },
    [theme.breakpoints.down(1545)]: {
      padding: '5rem 10rem',
    },
    [theme.breakpoints.down(1320)]: {
      padding: '5rem 8rem',
    },
    [theme.breakpoints.down(720)]: {
      padding: '5rem 5rem',
    },
  },
  wrapperSummary: {
    marginTop: '3rem',
    borderRadius: 20,
  },
  tmvAboutSummary: {
    background: '#333',
    color: '#fff',
    fontSize: '1.8rem',
    lineHeight: 2,
    textAlign: 'center',
    letterSpacing: '.2rem',
    borderRadius: '1.5rem',
    padding: 10,
    [theme.breakpoints.down(675)]: {
      fontSize: '1rem',
    },
  },
  tmvAboutInnerSummary: {
    fontSize: '2rem',
    fontWeight: 600,
    background:
      ' linear-gradient( to right bottom, rgb(32, 227, 178), rgb(0, 174, 253))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down(500)]: {
      fontSize: '1.5rem',
    },
  },
  images: {
    display: 'block',
    maxWidth: '100%',
  },
  tmvAboutInformation: {
    marginTop: '5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: '2rem',
  },
  wrapperImage: {
    width: '100%',
  },
  tmvAboutSubTitle: {
    fontFamily: 'Black-past',
    fontSize: '3rem',
    textAlign: 'center',
    [theme.breakpoints.down(675)]: {
      fontSize: '2.5rem',
    },
  },
  tmvLivingQuotes: {
    textAlign: 'center',
    marginTop: 15,
  },
  tmvLivingQuotes__content: {
    fontSize: '1.5rem',
    lineHeight: 2.3,
    [theme.breakpoints.down(675)]: {
      fontSize: '1rem',
    },
  },
  tmvInformationDetails: {
    width: '100%',
    backgroundColor: '#333',
    marginTop: '3rem',
  },
  tmvInformationDetails__list: {
    fontSize: '1.5rem',
    fontWeight: 600,
    [theme.breakpoints.down(830)]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down(760)]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.down(640)]: {
      fontSize: '1rem',
    },
  },
  tmvAboutInnerInformationList: {
    background:
      ' linear-gradient( to right bottom, rgb(32, 227, 178), rgb(0, 174, 253))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}));

const About = () => {
  const classes = useStyle();

  const date = new Date();
  const yearOfBirth = 1997;
  const yearNow = date.getFullYear();
  const myAge = yearNow - yearOfBirth;

  const listInformation = [
    { info: `20/09/${yearOfBirth}`, type: 'Birthday' },
    { info: '+841 339200997', type: 'Phone' },
    { info: myAge, type: 'Age' },
    { info: 'Ho Chi Minh City, Viet Nam', type: 'City' },
    { info: 'College', type: 'Degree' },
    { info: 'tranminhvuong100@gmail.com', type: 'Email' },
  ];
  return (
    <section className={`tmv ${classes.tmvAbout}`}>
      <Header content="About me" />
      <Paper sx={{ borderRadius: 15, marginTop: 10 }} elevation={24}>
        <p className={classes.tmvAboutSummary}>
          My name is{' '}
          <strong className={classes.tmvAboutInnerSummary}>Vuong</strong>. I am
          a young, enthusiastic, open-hearted, and responsible person. Well, I
          studied GiaDinh University, I looking for practical work opportunities
          at the company to learn more knowledge and experience
        </p>
      </Paper>
      <Grid container className={classes.tmvAboutInformation}>
        <Grid item lg={4}>
          <Box className={classes.wrapperImage}>
            <img src={Avatar} alt="avatar" className={classes.images} />
          </Box>
        </Grid>
        <Grid item lg={7}>
          <h3 className={classes.tmvAboutSubTitle}>Website Developer</h3>
          <section className={classes.tmvLivingQuotes}>
            <h4 className={classes.tmvLivingQuotes__content}>
              <FormatQuoteIcon />
              No one can define who you will become.
            </h4>
            <h4 className={classes.tmvLivingQuotes__content}>
              You decide by action you take today
              <FormatQuoteIcon />
            </h4>
          </section>
          <section className={classes.tmvInformationDetails}>
            <List className={classes.tmvInformationDetails__list}>
              {listInformation.map((item, index) => {
                const { info } = item;
                const { type } = item;
                return (
                  <ListItem key={index}>
                    <ListItemIcon sx={{ color: '#fff' }}>
                      <DoubleArrowRoundedIcon fontSize="large" />
                    </ListItemIcon>
                    <p>
                      <strong
                        className={classes.tmvAboutInnerInformationList}
                      >{`${type}: `}</strong>
                      {info}
                    </p>
                  </ListItem>
                );
              })}
            </List>
          </section>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
