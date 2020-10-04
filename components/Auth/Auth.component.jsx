import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Tabs,
  Tab,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Signup from "./Signup/Signup.component";
import Login from "./Login/Login.component";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  link: {
    color: theme.palette.primary.main,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Auth = (props) => {
  const styles = useStyles();
  const [signupForm, setSignupForm] = React.useState({});
  const [loginForm, setLoginForm] = React.useState({});
  const theme = useTheme();
  const authStore = useSelector((store) => store.global.auth);

  // const signupHandler = () => {
  //   const signupFormData = {...signupForm};
  //   signupFormData.keys().forEach(e => {
  //     if(e === 'email'){

  //     }
  //   });

  // };
  const onSignupInputChange = (e) => {
    const newForm = { ...form };
    newForm[e.target.name] = {
      value: e.target.value,
      errorMsg: null,
    };
    setSignupForm(newForm);
  };
  const onLoginInputChange = (e) => {
    const newForm = { ...form };
    newForm[e.target.name] = {
      value: e.target.value,
      errorMsg: null,
    };
    setLoginForm(newForm);
  };
  return (
    <Box className={styles.root} p={2}>
      <div>
        <Box mb={0.5}>
          <Typography variant="h5" color="textPrimary" align="center">
            {authStore.modalTitle}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1" color="textSecondary" align="center">
            {authStore.modalDescription}
          </Typography>
        </Box>
        {authStore.isLogin ? (
          <>
            <Login />
          </>
        ) : (
          <>
            <Signup />
            <Box mb={1}>
              <Typography variant="body2" color="textSecondary" align="center">
                By clicking on sign up you agree to our{" "}
                <span className={styles.link}>Terms and Conditions</span> and{" "}
                <span className={styles.link}>Privacy Policy</span>
              </Typography>
            </Box>
          </>
        )}
      </div>
      <Button
        onClick={props.submitHandler}
        fullWidth
        variant="contained"
        color="primary"
        size="large"
      >
        {authStore.isLogin ? "Login" : "Signup"}
      </Button>
      <Box mt={1}>
        <Typography color="textSecondary" align="center" variant="body2">
          {authStore.isLogin ? (
            <>
              Don't have an account?{" "}
              <span className={styles.link}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span className={styles.link}>Login</span>
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default Auth;
