"use client";
import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';


const ErrorScreen = (props:any) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <CloseIcon style={{ top: 10, right: 10, fontSize: 150 }} />
      <Typography variant="h5" gutterBottom>Error</Typography>
      <Typography variant="h5" gutterBottom>codigo de error: {props.data.code_status} </Typography>
      <Typography variant="body1" gutterBottom>{props.data.message}</Typography>
      {/*onRetry && (
        <Button variant="contained" color="primary" onClick={onRetry}>Retry</Button>
      )*/}
    </Box>
  );
};

export default ErrorScreen;