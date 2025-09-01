import { Paper, Container, Box, Typography, Stack, Grid, Divider, List, ListItem, Chip, ListItemText } from '@mui/material';
import React from 'react';
import ExperienceEntry from './experience';

const AboutMe = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Box sx={{
          borderBottom: '1px solid',
          pb: 1, // Add some padding at the bottom
          mb: 1, // Add some margin at the bottom
        }}> 
        <Typography variant="h1" gutterBottom>
          About Me
        </Typography>
      </Box>
      <Box sx={{  alignItems: 'center', m: 2, p: 2 }} >
        <Typography variant='paragraph' sx={{ fontWeight: 'light' }}>
          I'm a software engineer working on several domains ranging from web development, 
          mobile development, machine learning, high performance computing, cybersecurity, 
          operating systems, and finance. All of them related to computer science of course. 
          Before my interests were purely in computer science. But as I've gained experience,
          and learned new applications of computer science, I've expanded my interests.
          It's been a fun and exciting journey so far and I'm always eager to learn more.
          Its practically impossible to know everything in just computer science, much less
          know how to apply it to every problem in the real world. But I try!
          I keep in mind that I'm still young and don't have all the answers. As Mark Twain said,
        </Typography>
        <Paper elevation={8} sx={{ p: 1, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 'light' }}>
            “It ain’t what you don’t know that gets you into trouble. It’s what you know for sure that just ain’t so.“
          </Typography>
          <Typography variant="subtitle1" sx={{ m: 1, fontWeight: 'bold' }}>
            – Mark Twain
          </Typography>
        </Paper>
      </Box>
      
      <ExperienceEntry 
        company="American Express"
        years="3"
        title="Software Engineer"
        description="Working on AMEX's Cloud Communications Platform"
        achievements={[
          "Implemented new databases for customer facing applications",
          "Converted SOAP to REST API with Spring Boot and Spring Security",
          "Selected for two presentations about High Performance Computing and vulnerability analysis automation",
        ]}
      />

      <ExperienceEntry 
        company="General Motors"
        years="1"
        title="Software Engineer"
        description="Member of GM's Visualization Products Team"
        achievements={[
          "Worked on implementing visualizers using React",
          "Implemented automated testing framework with Jest and Cypress",
        ]}
      />

      <Box sx={{ m: 2, p: 2 }}>
        <Box>
          <Typography variant='h3'>Education</Typography>
        </Box>

        <Box sx={{ m:1, p:1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center', borderRadius: 1 }}>

          <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'right' }}}>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
              Masters of Science in Computer Science
            </Typography>
            <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>
              UC Davis
            </Typography>
            <Typography variant='body2' sx={{ mt: 1, color: 'secondary.main', fontWeight: 'bold' }}>
              GPA: 3.5
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
              <Box
                component="img"
                src="https://theaggie.org/wp-content/uploads/2021/10/rankings_ca_-1920x1280.jpg"
                alt="Placeholder Image"
                sx={{ maxWidth: '100%', height: 'auto', display: 'block', borderRadius: 1 }}
              />
          </Box>
        </Box>
        <Box sx={{ m:1, p:1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center', borderRadius: 1 }}>
          <Box sx={{ flex: 1 }}>
              <Box 
                component="img"
                src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1436/2025/03/28162040/ssu-library_rp.webp"
                alt="Placeholder Image"
                sx={{ maxWidth: '100%', height: 'auto', display: 'block', borderRadius: 1 }}
              />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
              Bachelors of Science in Computer Science
            </Typography>
            <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>
              Sonoma State University
            </Typography>
            <Typography variant='body2' sx={{ mt: 1, color: 'secondary.main', fontWeight: 'bold' }}>
              GPA: 3.2
            </Typography>
          </Box>

        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;