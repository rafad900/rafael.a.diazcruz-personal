import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * A React component for displaying an image with an optional caption, styled with MUI.
 *
 * @param {object} props - The component props.
 * @param {string} props.src - The URL of the image (JPG or PNG).
 * @param {string} props.alt - The alternative text for the image, important for accessibility.
 * @param {string} [props.caption] - An optional caption to display below the image.
 */
function ImageBlock({ data }) {
  const { src, alt, caption } = data;
  // Fallback image URL in case the provided src fails to load.
  // Using a placeholder service for dynamic placeholder images.
  const fallbackSrc = `https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found`;
  return (
    <Box
      component="figure" // Use figure semantic HTML element
      sx={{
        my: 3, // Margin top and bottom
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2, // Padding around the image and caption
        backgroundColor: 'background.paper', // Use theme's background color
        borderRadius: '8px', // Rounded corners
        boxShadow: 3, // MUI shadow for depth
        mx: 'auto', // Center the block
        maxWidth: '100%', // Ensure responsiveness
        width: 'fit-content', // Adjust width to content
      }}
    >
      {/* Image element with responsive styling and error handling */}
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          // If the original image fails to load, replace its src with a fallback
          e.currentTarget.onerror = null; // Prevent infinite loop if fallback also fails
          e.currentTarget.src = fallbackSrc;
          console.error(`Failed to load image from: ${src}. Displaying fallback.`);
        }}
        style={{
          maxWidth: '100%', // Ensure image scales down on smaller screens
          height: 'auto', // Maintain aspect ratio
          borderRadius: '4px', // Slightly rounded corners for the image itself
          display: 'block', // Ensures no extra space below image
        }}
      />

      {/* Optional caption */}
      {caption && (
        <Typography
          variant="caption" // Smaller text for captions
          component="figcaption" // Use figcaption semantic HTML element
          sx={{
            mt: 1, // Margin top for spacing from image
            textAlign: 'center',
            color: 'text.secondary', // Use theme's secondary text color
          }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
}

export default ImageBlock;
