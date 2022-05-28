import { makeStyles } from '@mui/styles';

import { Link, Slide } from '@mui/material';
import { FacebookSharp, LinkedIn } from '@mui/icons-material';

import TypeAnimation from 'react-type-animation';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyle = makeStyles((theme) => ({
  tmvIntroduce: {
    height: '100vh',
    backgroundColor: '#000011',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  tmvIntroduceName: {
    letterSpacing: '0.3rem',
    fontWeight: 500,
    fontSize: '10rem',
    fontFamily: 'Lequire-round',
    [theme.breakpoints.down(1630)]: {
      fontSize: '9rem',
    },
    [theme.breakpoints.down(1480)]: {
      fontSize: '8rem',
    },
    [theme.breakpoints.down(1330)]: {
      fontSize: '7rem',
    },
    [theme.breakpoints.down(1170)]: {
      fontSize: '6rem',
    },
    [theme.breakpoints.down(1020)]: {
      fontSize: '5rem',
    },
    [theme.breakpoints.down(860)]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.down(710)]: {
      fontSize: '3rem',
      overflow: 'hidden',
    },
    [theme.breakpoints.down(550)]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down(500)]: {
      fontSize: '1.5rem',
    },
  },
  tmvIntroduceCareer: {
    fontSize: '2rem',
    fontWeight: 500,
    marginTop: '3rem',
    [theme.breakpoints.down(1020)]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down(860)]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down(550)]: {
      fontSize: '0.8rem',
    },
  },
  tmvIntroduceJob: {
    letterSpacing: '0.2rem',
    fontSize: '2.3rem',
    fontWeight: 700,
    fontFamily: 'Black-past',
    [theme.breakpoints.down(1020)]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.down(860)]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down(550)]: {
      fontSize: '1rem',
    },
  },
  tmvIntroduceSocial: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '3rem',
    marginTop: '2rem',
  },
  tmvIntroduceSocial__socialMedia: {
    color: '#fff',
    '&:hover': {
      color: '#6495ed',
    },
    [theme.breakpoints.down(550)]: {
      fontSize: 'small',
    },
  },
}));

const Introduce = () => {
  const classes = useStyle();

  const linkSocial = [
    {
      link: 'https://www.facebook.com/vuong.tranminh.200997',
      Icon: FacebookSharp,
    },
    { link: 'https://github.com/Viktor-Tran', Icon: GitHubIcon },
    {
      link: 'https://www.linkedin.com/in/tran-minh-vuong-259b40210/',
      Icon: LinkedIn,
    },
  ];
  return (
    <header className={`tmv ${classes.tmvIntroduce}`}>
      <h1 className={classes.tmvIntroduceName}>Tran Minh Vuong</h1>
      <h3 className={classes.tmvIntroduceCareer}>
        I'm a{' '}
        <TypeAnimation
          cursor={true}
          sequence={['Frontend Developer 🖥️', 4000, '']}
          wrapper="span"
          repeat={Infinity}
          className={classes.tmvIntroduceJob}
        />
      </h3>
      <section className={classes.tmvIntroduceSocial}>
        {linkSocial.map((item) => {
          const { Icon } = item;
          return (
            <Slide
              direction="up"
              in={true}
              mountOnEnter
              unmountOnExit
              key={item.link}
            >
              <Link
                href={item.link}
                underline="none"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  fontSize="large"
                  className={classes.tmvIntroduceSocial__socialMedia}
                />
              </Link>
            </Slide>
          );
        })}
      </section>
    </header>
  );
};

export default Introduce;
