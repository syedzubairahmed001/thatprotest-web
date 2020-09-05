import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";

import AccountPopup from "../AccountPopup/AccountPopup.component";

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

  return (
    <AppBar position="static" className={styles.container}>
      <Toolbar>
        <Box mr={1}>
          <img src="/images/logo.svg" alt="logo" className={styles.logo} />
        </Box>
        <Typography variant="h6">ThatProtest</Typography>
        <Box className={styles.sec1}></Box>
        <Button color="inherit">Login</Button>
        <AccountPopup />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
