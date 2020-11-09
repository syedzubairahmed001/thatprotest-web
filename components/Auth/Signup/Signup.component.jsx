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

const Signup = ({ onInputChange, form }) => {
  return (
    <Box>
      <Box mb={1}>
        <TextField
          label="Full Name"
          name="name"
          variant="outlined"
          fullWidth
          onChange={onInputChange}
          value={form.name.value}
          error={!form.name.isValid}
          helperText={form.name.msg}
        />
      </Box>
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
    </Box>
  );
};

export default Signup;
