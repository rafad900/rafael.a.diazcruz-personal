import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContentCard from './ContentCard';
import blog_posts from '../blogcontent/BlogCollector';

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      
      <Typography variant="h1" gutterBottom > Rafael A. Diaz Cruz </Typography>
      
      <Grid container spacing={2} columns={12}>
        {blog_posts.map((card, index) => (
          <ContentCard cardData={card} key={card.title} 
            focusedCardIndex={focusedCardIndex}
            handleFocus={() => handleFocus(index)}
            handleBlur={handleBlur}
          />
        ))}
      </Grid>
    </Box>
  );
}
