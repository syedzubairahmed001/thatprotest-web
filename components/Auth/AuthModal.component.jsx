import React, { useState } from "react";
import { Dialog, Button } from "@material-ui/core";
import Auth from "./Auth.component";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttongrp: {
    width: "60%",
    padding: "1rem",
    boxSizing: "border-box",
  },
});

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
    <Dialog open={props.isOpen} onClose={props.onClose} maxWidth="sm" fullWidth>
      <div className={styles.buttongrp}>
        <Button onClick={() => setIsSignup(true)}>Signup</Button>
        <Button onClick={() => setIsSignup(false)}>Login</Button>
      </div>
      <Auth
        isSignup={isSignup}
        changed={(e) => inputChangedHandler(e)}
        submitHandler={onSubmitHandler}
      />
    </Dialog>
  );
};

export default AuthModal;
