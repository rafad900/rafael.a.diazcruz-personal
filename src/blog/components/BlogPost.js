import React from 'react';

import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom'; // To demonstrate reading state
import PostContentRenderer from './PostContentRenderer';


export default function BlogPost() {

  const location = useLocation();
  const stateFromNavigation = location.state;

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant="h1" gutterBottom>
          {stateFromNavigation.title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
          <AvatarGroup max={3}>
            {stateFromNavigation.authors.map((author, index) => (
              <Avatar key={index} alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
            ))}
          </AvatarGroup>
          <Typography variant="caption">{stateFromNavigation.authors.map(author => author.name).join(', ')}</Typography>
        </Box>
        <CardMedia component="img" image={stateFromNavigation.img} alt={stateFromNavigation.title} />
        <CardContent>
            <PostContentRenderer blocks={stateFromNavigation.content_blocks} />
        </CardContent>
      </Box>
    </Container>
  )
}