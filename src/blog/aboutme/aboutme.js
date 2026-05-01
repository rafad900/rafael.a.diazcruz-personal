import { Paper, Container, Box, Typography, Grid, Avatar, Stack, Button } from '@mui/material';
import React from 'react';
import ExperienceEntry from './experience';
import aboutStyles from './AboutMeStyles';

const AboutMe = () => {
  const { heroPaper, avatarBox, introBox, quotePaper, sectionPaper, eduImage } = aboutStyles;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Paper sx={heroPaper} variant="outlined">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h1" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
              Software engineer — web, ML, HPC, security, and finance.
            </Typography>
            <Box sx={introBox}>
              <Typography variant="body1" paragraph sx={{ fontWeight: 300 }}>
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

              <Paper elevation={1} sx={quotePaper}>
                <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 300 }}>
                  “It ain’t what you don’t know that gets you into trouble. It’s what you know for sure that just ain’t so.“
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'bold' }}>
                  – Mark Twain
                </Typography>
              </Paper>

              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Button variant="contained" color="primary" size="small" href="#">
                  Resume
                </Button>
                <Button variant="outlined" color="primary" size="small" href="#contact">
                  Contact
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={avatarBox}>
              <Avatar sx={{ width: 140, height: 140, fontSize: '2.25rem', boxShadow: 3, bgcolor: 'primary.main' }}>RD</Avatar>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ mt: 4 }}>
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
      </Box>

      <Paper sx={sectionPaper} variant="outlined">
        <Typography variant="h3" gutterBottom>
          Education
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Masters of Science in Computer Science
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  UC Davis
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: 'secondary.main', fontWeight: 'bold' }}>
                  GPA: 3.5
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src="https://theaggie.org/wp-content/uploads/2021/10/rankings_ca_-1920x1280.jpg"
                  alt="UC Davis"
                  sx={eduImage}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1436/2025/03/28162040/ssu-library_rp.webp"
                  alt="Sonoma State University"
                  sx={eduImage}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Bachelors of Science in Computer Science
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  Sonoma State University
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: 'secondary.main', fontWeight: 'bold' }}>
                  GPA: 3.2
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

    </Container>
  );
};

export default AboutMe;