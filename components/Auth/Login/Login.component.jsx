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

const Auth = (props) => {
  return (
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
  );
};

export default Auth;
