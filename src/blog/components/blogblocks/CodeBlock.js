import React from 'react';
import { Box, Typography } from '@mui/material';

function CodeBlock({ data }) {
  const { language, code } = data;
  return (
    <Box sx={{
        my: 3,
        p: 2,
        backgroundColor: '#282c34', // Dark background for code
        color: '#f8f8f2', // Light text
        borderRadius: '8px',
        overflowX: 'auto',
        fontFamily: 'monospace',
        fontSize: '0.9em',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }}>
      {language && (
        <Typography variant="caption" sx={{ color: '#61dafb', display: 'block', mb: 1 }}>
          Language: {language}
        </Typography>
      )}
      <pre style={{ margin: 0, padding: 0 }}>
        <code>{code}</code>
      </pre>
    </Box>
  );
}

export default CodeBlock;