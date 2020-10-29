import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: '#212223',
    maxWidth: 345,
    minWidth: 345,
    textAlign: 'center'
  },

  media: {
    paddingTop: "56.25%", // 16:9
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },

  avatar: {
    backgroundColor: red[500],
  },

  price: {
    color: 'white',
    margin: '0 3rem 0 8rem',
    fontSize: '110%'
  },

  header: {
    color: 'white',
    height: '1rem'
  },

  description: {
    color: 'white'
  },

  socialIcon: {
    color: 'white',
    padding: '10px 3px 10px 10px'
  }

}));
