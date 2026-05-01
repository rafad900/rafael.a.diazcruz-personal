import React from 'react';
import { Typography, Box, Grid, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  paperStyles,
  rightGridStyles,
  descriptionBoxStyles,
  listItemStyles,
  timelineIconStyles,
  achievementIconStyles,
} from './ExperienceStyles';

const ExperienceEntry = ({ company, years, title, description, achievements }) => (
  <Paper
    elevation={3}
    sx={{
      ...paperStyles,
      position: 'relative',
      borderLeft: { xs: '4px solid', sm: '6px solid' },
      borderColor: 'primary.main',
      transition: 'transform 180ms ease, box-shadow 180ms ease',
      '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
    }}
  >
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={timelineIconStyles} aria-hidden>
            <WorkIcon fontSize="small" />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{company}</Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>({years} YOE)</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={rightGridStyles}>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>{title}</Typography>
      </Grid>
    </Grid>

    <Divider sx={{ my: 2 }} />

    <Box sx={descriptionBoxStyles}>
      <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1 }}>{description}</Typography>
    </Box>

    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Key Achievements</Typography>

    <List disablePadding>
      {achievements.map((item, index) => (
        <ListItem sx={listItemStyles} key={index}>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={achievementIconStyles} />
                <Typography variant="body1">{item}</Typography>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default ExperienceEntry;