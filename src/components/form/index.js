import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

//material UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";

//API
import { getAllCustomers } from "../../api";
import ProfileInfo from "../profileInfo";

//create a user info context
export const UserInfoContext = createContext();

export default function Form() {
  const classes = useStyles();
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    const fetchAllCustomers = async () => {
      const allCustomers = await getAllCustomers();
      const customer = await allCustomers.data.filter(
        (data) =>
          data.custEmail.replace(/\s/g, "") ===
            emailAddress.replace(/\s/g, "") &&
          data.custPassword.replace(/\s/g, "") === password.replace(/\s/g, "")
      );

      const linkToHome = () => {
        history.push("/profile");
      };

      localStorage.setItem("USER_INFO", JSON.stringify(customer[0]));

      if (customer[0]) {
        return (
          <UserInfoContext.Provider value={customer[0]}>
            <ProfileInfo>{linkToHome()}</ProfileInfo>
          </UserInfoContext.Provider>
        );
      } else {
      }
    };
    fetchAllCustomers();
  };

  return (
    <div className={classes.container}>
      <div className={classes.signInCard}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSignIn} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}
