import React from 'react';
import { Typography } from '@mui/material';

function HeadingBlock({ data }) {
  const { level, text } = data;
  const Component = `h${level}`; // Dynamically render h1, h2, h3 etc.

  return (
    <Typography variant={Component} component={Component} sx={{ mt: level === 2 ? 4 : 2, mb: 1, fontWeight: 'bold' }}>
      {text}
    </Typography>
  );
}

export default HeadingBlock;