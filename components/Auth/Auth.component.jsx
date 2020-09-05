import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "60%",
    // padding: "1rem",
    // boxSizing: "border-box",
    margin: "auto"
  },
});

const Auth = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
        {/* to display username when its signup mode */}
      {props.isSignup ? (
        <TextField label="Username" name="username" onChange={props.changed} />
      ) : null}
      <br />
      <TextField label="Email" name="email" onChange={props.changed} />
      <br />
      <TextField
        label="Password"
        name="password"
        type="password"
        onChange={props.changed}
      />
      <br />
      {/* to display Login and signup based on condition */}
      <Button onClick={props.submitHandler}>{props.isSignup? 'SIGN UP' : 'LOG IN' }</Button>
    </div>
  );
};

export default Auth;
