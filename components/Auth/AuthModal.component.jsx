import React, { useState } from "react";
import { Dialog, Button, Box, Typography } from "@material-ui/core";
import Auth from "./Auth.component";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "600px",
  },
  buttongrp: {
    width: "60%",
    padding: "1rem",
    boxSizing: "border-box",
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const AuthModal = (props) => {
  const styles = useStyles();
  const isOpen = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState({});

  const inputChangedHandler = (e) => {
    const updatedUserData = { ...userData };
    updatedUserData[e.target.name] = e.target.value;
    setUserData(updatedUserData);
  };

  const onSubmitHandler = () => {
    // interact with backend
  };
  console.log(userData);
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      maxWidth="sm"
      fullWidth
      className={styles.container}
    >
      <Box p={2}>
        <Auth
          isSignup={isSignup}
          changed={(e) => inputChangedHandler(e)}
          submitHandler={onSubmitHandler}
        />
      </Box>
      {/* <div className={styles.buttongrp}>
        <Button
          onClick={() => setIsSignup(true)}
          className={isSignup ? styles.active : ""}
        >
          Signup
        </Button>
        <Button
          onClick={() => setIsSignup(false)}
          className={!isSignup ? styles.active : ""}
        >
          Login
        </Button>
      </div> */}
    </Dialog>
  );
};

export default AuthModal;
