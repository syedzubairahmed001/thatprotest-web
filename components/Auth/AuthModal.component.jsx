import React from "react";

import { Dialog, Button } from "@material-ui/core";

const AuthModal = (props) => {
  const isOpen = React.useState(false);
  return (
    <Dialog open={props.isOpen} onClose={props.onClose} maxWidth="sm" fullWidth>
      hello world
    </Dialog>
  );
};

export default AuthModal;
