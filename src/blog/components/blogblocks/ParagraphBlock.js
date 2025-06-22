import React from 'react';
import { Typography } from '@mui/material';

function ParagraphBlock({ data }) {
  const { text } = data;
  return (
    <Typography variant="body1" component="p" sx={{ fontSize: '1.3rem', lineHeight: '1.5' }} >
      {text}
    </Typography>
  );
}

export default ParagraphBlock;