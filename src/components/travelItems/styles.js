import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  cardContainer: {
    padding: "0 10%",
  },

  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '400',
    margin: '3.5rem 0',
  },

  cardGrid: {
    '&:lastChild': {
      marginBottom: '3rem'
    }
  }
});
