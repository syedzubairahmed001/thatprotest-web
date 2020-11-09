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

const Auth = ({ onInputChange, form }) => {
  return (
    <Box>
      <Box mb={1}>
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          name="email"
          type="email"
          value={form.email.value}
          onChange={onInputChange}
          error={!form.email.isValid}
          helperText={form.email.msg}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          fullWidth
          type="password"
          value={form.password.value}
          onChange={onInputChange}
          error={!form.password.isValid}
          helperText={form.password.msg}
        />
      </Box>
      <Typography></Typography>
    </Box>
  );
};

export default Auth;
