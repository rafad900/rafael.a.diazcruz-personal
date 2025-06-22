// src/components/PostContentRenderer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { BlockComponents } from './blogblocks/Blocks'; // Adjust the import path as necessary

function PostContentRenderer({ blocks }) {
  if (!blocks || blocks.length === 0) {
    return <Typography variant="body2" color="text.secondary">No content available.</Typography>;
  }

  return (
    <Box>
      {blocks.map((block, index) => {
        const BlockComponent = BlockComponents[block.type];

        if (BlockComponent) {
          // It's crucial to use a unique `key` for list items in React
          // `block.id` is ideal if guaranteed unique, otherwise `index` is a fallback
          return <BlockComponent key={block.id || `block-${index}`} data={block.data} />;
        } else {
          // Handle unknown block types gracefully
          console.warn(`Unknown block type: ${block.type}`);
          return (
            <Typography key={block.id || `block-${index}`} variant="body2" color="error" sx={{ my: 2, p: 1, border: '1px solid red', borderRadius: '4px' }}>
              Error: Unknown block type "{block.type}"
            </Typography>
          );
        }
      })}
    </Box>
  );
}

export default PostContentRenderer;