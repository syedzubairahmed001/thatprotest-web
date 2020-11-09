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
    cursor: "pointer",
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
  const [signupForm, setSignupForm] = React.useState({
    name: {
      value: "",
      isValid: true,
      msg: "",
    },
    email: {
      value: "",
      isValid: true,
      msg: "",
    },
    password: {
      value: "",
      isValid: true,
      msg: "",
    },
  });
  const [loginForm, setLoginForm] = React.useState({
    email: {
      value: "",
      isValid: true,
      msg: "",
    },
    password: {
      value: "",
      isValid: true,
      msg: "",
    },
  });
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
    const newForm = { ...signupForm };
    newForm[e.target.name] = {
      value: e.target.value,
      errorMsg: null,
    };
    setSignupForm(newForm);
  };
  const onLoginInputChange = (e) => {
    const newForm = { ...loginForm };
    newForm[e.target.name] = {
      value: e.target.value,
      errorMsg: null,
    };
    setLoginForm(newForm);
  };

  const onSignupClick = (e) => {
    const form = { ...signupForm };
    const keys = Object.keys(form);
    keys.forEach((item) => {
      if (item) {
        if (!form[item].value || form[item].value === "") {
          form[item].isValid = false;
          form[item].msg = `Please enter a valid ${item}`;
        }
      }
    });
    setSignupForm(form);
  };
  const onLoginClick = (e) => {
    const form = { ...loginForm };
    const keys = Object.keys(form);
    keys.forEach((item) => {
      if (item) {
        if (!form[item].value || form[item].value === "") {
          form[item].isValid = false;
          form[item].msg = `Please enter a valid ${item}`;
        }
      }
    });
    setLoginForm(form);
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
            <Login onInputChange={onLoginInputChange} form={loginForm} />
          </>
        ) : (
          <>
            <Signup onInputChange={onSignupInputChange} form={signupForm} />
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
        onClick={authStore.isLogin ? onLoginClick : onSignupClick}
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
              <span
                className={styles.link}
                onClick={() => props.authSwitch(false)}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className={styles.link}
                onClick={() => props.authSwitch(true)}
              >
                Login
              </span>
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default Auth;
