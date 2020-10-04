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

const Signup = (props) => {
  return (
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
    </>
  );
};

export default Signup;
