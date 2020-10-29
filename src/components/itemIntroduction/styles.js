import { makeStyles } from "@material-ui/core/styles";

import '../../assets/fonts.css';
import Background from '../../images/beach.jpg';

export default makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    fontFamily: `'Roboto', sans-serif`,
    textAlign:'center',
    maxWidth: "100%",
    height: 555
  },

  bookingForm_header: {
    marginBottom: '1.5rem',
    // paddingTop: '1rem',
    '& h1': {
      fontSize: '2.5rem', 
      fontWeight: 400
    }
  },

  formControl: {
    marginBottom: '0.75rem',
    '& label': {
      fontSize: '120%',
      fontWeight: '400',
    },

    '& input': {
      width: '15rem',
    },

    '& select': {
      height: '2rem',
      width: '15rem',
    }
  },

  departureLabel: {
    marginRight: '3.5rem',
    paddingTop: '.75rem'
  },

  returnLabel: {
    marginRight: '5.25rem',
    paddingTop: '.75rem' 
  },

  datePicker: {
    width: '15rem'
  },

  bookingButton: {
    display: 'block',
    margin: '1.5rem auto 0 auto'
  }

}));

  // media: {
  //   height: 0,
  //   paddingTop: "56.25%", // 16:9
  // },
  // expand: {
  //   transform: "rotate(0deg)",
  //   marginLeft: "auto",
  //   transition: theme.transitions.create("transform", {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: "rotate(180deg)",
  // },
  // avatar: {
  //   backgroundColor: red[500],
  // },
  // dollarIcon: {
  //   marginLeft: 5,
  // },
