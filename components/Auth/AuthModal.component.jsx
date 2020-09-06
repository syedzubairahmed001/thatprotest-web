import React, { useState } from "react";
import { Dialog, Button, Box, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grow } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

import Auth from "./Auth.component";
import { setAuthModalToggle } from "../../store/actions/global";

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
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.global.auth.modalOpen);
  console.log(modalOpen);
  const inputChangedHandler = (e) => {
    const updatedUserData = { ...userData };
    updatedUserData[e.target.name] = e.target.value;
    setUserData(updatedUserData);
  };

  const onCloseHandler = () => {
    dispatch(setAuthModalToggle(false));
  };

  const onSubmitHandler = () => {
    // interact with backend
  };
  console.log(userData);
  return (
    <Dialog
      open={modalOpen}
      onClose={onCloseHandler}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Transition}
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
