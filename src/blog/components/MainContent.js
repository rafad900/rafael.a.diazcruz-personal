import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContentCard from './ContentCard';

const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description:
      'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [
      { name: 'Rafael A. Diaz Cruz', avatar: '/static/images/avatar/1.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description:
      'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
    authors: [{ name: 'Rafael A. Diaz Cruz', avatar: '/static/images/avatar/6.jpg' }],
  },
];

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom> Rafael A. Diaz Cruz </Typography>
      </div>

      <Grid container spacing={2} columns={12}>
        {cardData.map((card, index) => (
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
