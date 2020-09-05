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

const useStyles = makeStyles({
  root: {
    margin: "auto",
  },
});

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
  const [isSignup, setIsSignup] = React.useState(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIsSignup(newValue === 0);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className={styles.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Sign up" {...a11yProps(0)} />
        <Tab label="Login" {...a11yProps(1)} />
      </Tabs>
      <div>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box mb={1}>
            <TextField
              label="Full Name"
              name="username"
              fullWidth
              onChange={props.changed}
            />
          </Box>
          <Box mb={1}>
            <TextField
              label="Email"
              fullWidth
              name="email"
              onChange={props.changed}
            />
          </Box>
          <Box mb={1}>
            <TextField
              label="Password"
              name="password"
              fullWidth
              type="password"
              onChange={props.changed}
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Box>
            <TextField
              label="Email"
              fullWidth
              name="email"
              onChange={props.changed}
            />
          </Box>
          <Box></Box>
          <TextField
            label="Password"
            name="password"
            fullWidth
            type="password"
            onChange={props.changed}
          />
        </TabPanel>
      </div>

      {/* to display Login and signup based on condition */}
      <Button
        onClick={props.submitHandler}
        fullWidth
        variant="contained"
        color="primary"
      >
        {isSignup ? "Sign up" : "Login"}
      </Button>
    </div>
  );
};

export default Auth;
