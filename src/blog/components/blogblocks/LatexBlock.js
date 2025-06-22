import React from 'react';
import { BlockMath } from 'react-katex'; // For display mode LaTeX
import { Box, Typography } from '@mui/material';
import 'katex/dist/katex.min.css'; // Don't forget to import KaTeX CSS!

function LatexBlock({ data }) {
  const { formula, caption } = data;

  if (!formula) {
    return (
      <Box sx={{ my: 2, p: 1, border: '1px solid orange', borderRadius: '4px', bgcolor: 'warning.light' }}>
        <Typography variant="body2" color="warning.contrastText">
          Warning: LaTeX block missing formula.
        </Typography>
      </Box>
    );
  }

  // BlockMath always renders in display mode, so 'displayMode' prop is more for clarity of data.
  // We'll primarily use BlockMath for this dedicated block.
  return (
    <Box sx={{ my: 3, p: 2, bgcolor: 'background.paper', borderRadius: '8px', textAlign: 'center' }}>
      <BlockMath math={formula} />
      {caption && (
        <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
          {caption}
        </Typography>
      )}
    </Box>
  );
}

export default LatexBlock;