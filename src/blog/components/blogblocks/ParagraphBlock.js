import React from 'react';
import { Typography } from '@mui/material';

// Helper function to render text with basic markdown (bold/italic)
// This function is defined outside the component to avoid recreation on every render,
// or you could move it to a shared utility file if multiple blocks use it.
const renderTextWithMarkdown = (text) => {
  // Regex to find **bold** or *italic* segments.
  // It captures the markers and the content in between.
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Bold text: remove the ** markers and wrap in <strong>
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      // Italic text: remove the * markers and wrap in <em>
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    // Regular text: return as is
    return part;
  });
};

function ParagraphBlock({ data }) {
  const { text } = data;

  return (
    <Typography variant="body1" component="p" sx={{ fontSize: '1.3rem', lineHeight: '1.5' }}>
      {renderTextWithMarkdown(text)}
    </Typography>
  );
}

export default ParagraphBlock;