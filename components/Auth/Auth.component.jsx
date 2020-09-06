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
  const theme = useTheme();
  // const [isSignup, setIsSignup] = React.useState(true);
  // const [value, setValue] = React.useState(0);
  const authStore = useSelector((store) => store.global.auth);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  //   setIsSignup(newValue === 0);
  // };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Box className={styles.root} p={2}>
      {/* <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Sign up" {...a11yProps(0)} />
        <Tab label="Login" {...a11yProps(1)} />
      </Tabs> */}
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
        {/* <TabPanel value={value} index={0} dir={theme.direction}> */}
        {authStore.isLogin ? (
          <>
            <Box mb={1}>
              <TextField
                label="Email"
                fullWidth
                name="email"
                variant="outlined"
                onChange={props.changed}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Password"
                name="password"
                fullWidth
                variant="outlined"
                type="password"
                onChange={props.changed}
              />
            </Box>
            <Typography></Typography>
          </>
        ) : (
          <>
            <Box mb={1}>
              <TextField
                label="Full Name"
                name="username"
                variant="outlined"
                fullWidth
                onChange={props.changed}
              />
            </Box>
            <Box mb={1}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                name="email"
                onChange={props.changed}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Password"
                name="password"
                variant="outlined"
                fullWidth
                type="password"
                onChange={props.changed}
              />
            </Box>
            <Box mb={1}>
              <Typography variant="body2" color="textSecondary" align="center">
                By clicking on sign up you agree to our{" "}
                <span className={styles.link}>Terms and Conditions</span> and{" "}
                <span className={styles.link}>Privacy Policy</span>
              </Typography>
            </Box>
          </>
        )}

        {/* </TabPanel> */}
        {/* <TabPanel value={value} index={1} dir={theme.direction}> */}

        {/* </TabPanel> */}
      </div>

      {/* to display Login and signup based on condition */}
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
