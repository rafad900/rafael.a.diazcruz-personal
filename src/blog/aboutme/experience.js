import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  Avatar,
  Paper,
  Stack,
  useTheme,
  useMediaQuery,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const ExperienceEntry = ({ company, years, title, description, achievements }) => (
  <Paper elevation={8} sx={{ p: 4, my: 4, borderRadius: 2 }}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            {company}
          </Typography>
          <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>
            ({years} YOE)
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
        <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Grid>
    </Grid>

    <Divider sx={{ my: 2 }} />

    <Box sx={{ mb: 2 }}>
      <Typography variant='body1' sx={{ fontStyle: 'italic', mb: 1 }}>
        {description}
      </Typography>
    </Box>

    <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1 }}>
      Key Achievements
    </Typography>

    <List disablePadding>
      {achievements.map((item, index) => (
        <ListItem sx={{ pl: 0, py: 0.5 }} key={index}>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip label="Achievement" size="small" color="secondary" />
                <Typography variant="body1">
                  {item}
                </Typography>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default ExperienceEntry;