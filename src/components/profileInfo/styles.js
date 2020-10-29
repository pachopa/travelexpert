import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    background: '#56CCF2',
    background: '-webkit-linear-gradient(to right, #2F80ED, #56CCF2)',
    background: 'linear-gradient(to right, #2F80ED, #56CCF2)',
    height: '77vh',
    paddingTop: '5rem',
  },

  root: {
    maxWidth: "45%",
    marginTop: 20,
    marginBottom: 20,
  },

  colHeader: {
    backgroundColor: 'white',
    border: 'none',
    borderRadius: 25,
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 0
  },

  colBorder: {
    backgroundColor: 'white',
    border: "1px solid transparent",
    borderRadius: 25,
    webkitBoxShadow: '0px 0px 5px 1px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 1px rgba(0,0,0,0.75)',
    boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.3)',
    padding: 0,
  },

  label: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '105%',
    marginBottom: '0.5rem'
  },

  data: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '105%',
    marginBottom: '0.5rem'
  }
}));
