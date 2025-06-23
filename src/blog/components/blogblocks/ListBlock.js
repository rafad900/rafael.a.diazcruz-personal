// src/components/blog/ListBlock.js
import React from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

// Helper function to render text with basic markdown (bold/italic)
const renderTextWithMarkdown = (text) => {
  // Regex to find **bold** or *italic*
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g); // Split by bold/italic markers

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const ListBlock = ({ data }) => {
  const { type, items } = data;

  // Choose the appropriate MUI List component
  const ListComponent = type === 'ordered' ? 'ol' : 'ul';

  return (
    <Box sx={{ my: 2 }}> {/* Add some vertical margin around the list */}
      <List component={ListComponent} sx={{ pl: type === 'ordered' ? 4 : 2 }}> {/* Adjust padding for ol/ul */}
        {items.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ alignItems: 'flex-start' }}>
            {type === 'unordered' && ( // For unordered, use a bullet point or icon
              <Typography component="span" sx={{ mr: 1, lineHeight: 'inherit' }}>
                •
              </Typography>
            )}
            <ListItemText
              primary={
                <Typography component="span"> {/* Use span to allow inline elements */}
                  {renderTextWithMarkdown(item.text)}
                </Typography>
              }
              sx={{ m: 0 }} // Remove default ListItemText margins
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListBlock;