import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import AccountPopup from "../AccountPopup/AccountPopup.component";
import { setAuthModal } from "../../store/actions/global";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  sec1: {
    flexGrow: 1,
  },
}));

const Navigation = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.user.auth.isAuthenticated
  );

  const authClickHandler = (authType) => {
    if (authType === "login") {
      dispatch(
        setAuthModal({
          modalOpen: true,
          modalTitle: "Login",
          modalDescription:
            "Login to your existing account to start or join a protest ",
          isLogin: true,
        })
      );
    } else {
      dispatch(
        setAuthModal({
          modalOpen: true,
          modalTitle: "Create Account",
          modalDescription:
            "Create a new ThatProtest account to start or join a protest",
          isLogin: false,
        })
      );
    }
  };

  return (
    <AppBar position="static" className={styles.container}>
      <Toolbar>
        <Box mr={1}>
          <img src="/images/logo.svg" alt="logo" className={styles.logo} />
        </Box>
        <Typography variant="h6">ThatProtest</Typography>
        <Box className={styles.sec1}></Box>
        {!isAuthenticated && (
          <>
            <Box mr={1}>
              <Button
                color="inherit"
                color="primary"
                variant="contained"
                disableElevation
                onClick={() => authClickHandler("signup")}
              >
                Create Account
              </Button>
            </Box>
            <Button color="inherit" onClick={() => authClickHandler("login")}>
              Login
            </Button>
          </>
        )}

        {/* <AccountPopup /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
