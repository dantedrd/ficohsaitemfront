"use client";
import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';


/**
 * Component displaying an error screen.
 * @module ErrorScreen
 * @param {Object} props - The component properties.
 * @param {number} props.data.code_status - The error code status.
 * @param {string} props.data.message - The error message.
 * @returns {JSX.Element} The error screen component.
 */
const ErrorScreen = (props:any) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <CloseIcon style={{ top: 10, right: 10, fontSize: 150 }} />
      <Typography variant="h5" gutterBottom>Error</Typography>
      <Typography variant="h5" gutterBottom>codigo de error: {props.data.code_status} </Typography>
      <Typography variant="body1" gutterBottom>{props.data.message}</Typography>
    </Box>
  );
};

export default ErrorScreen;