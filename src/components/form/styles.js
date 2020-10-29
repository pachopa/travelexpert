import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    background: '#56CCF2',
    background: '-webkit-linear-gradient(to right, #2F80ED, #56CCF2)',
    background: 'linear-gradient(to right, #2F80ED, #56CCF2)',
    height: '77vh',
    paddingTop: '5rem',
  },

  signInCard: {
    backgroundColor: 'white',
    borderRadius: 25,
    webkitBoxShadow: '0px 0px 5px 1px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 1px rgba(0,0,0,0.75)',
    boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.3)',
    height: '85%',
    width: '30rem',
    margin: '0 auto 0 auto',
    paddingTop: '0.7rem'
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  horizontalRule: {
    marginTop: 0,
    marginBottom: 0
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    marginBottom: 20,
  }
}));
