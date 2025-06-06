import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Java', level: 85 },
  { name: 'Python', level: 90 },
  { name: 'C/C++', level: 80 },
  { name: 'SQL (Postgres)', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'R', level: 70 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Flask', level: 75 },
  { name: 'JUnit', level: 70 },
  { name: 'WordPress', level: 70 },
  { name: 'Material-UI', level: 80 },
  { name: 'FastAPI', level: 75 },
  { name: 'Git', level: 90 },
  { name: 'Docker', level: 70 },
  { name: 'GCP', level: 60 },
  { name: 'VS Code', level: 90 },
  { name: 'PyCharm', level: 85 },
  { name: 'Eclipse', level: 80 },
  { name: 'Linux', level: 80 },
  { name: 'Postman', level: 80 },
  { name: 'pandas', level: 85 },
  { name: 'NumPy', level: 85 },
  { name: 'Matplotlib', level: 80 },
  { name: 'HuggingFace', level: 70 },
  { name: 'scikit-learn', level: 80 },
];

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            About Me
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="center"
            sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
          >
            I am a dedicated and detail-oriented Software Engineer with a solid foundation in Computer Science, currently pursuing my B.Tech at Kalinga Institute of Industrial Technology. My academic background is complemented by hands-on experience in a range of cutting-edge technologies and frameworks. I've developed and deployed several impactful projects, including an AI-powered Travel Itinerary Planner using LangChain and Groq, a Resume Parser leveraging NLP and OCR, and a fully functional E-Commerce Website built with the MERN stack. My technical toolkit spans across Python, JavaScript, Java, C++, and includes frameworks such as React, Node.js, and FastAPI.
            <br /><br />
            Beyond my technical endeavors, I am passionate about continuous learning and have earned certifications from Google, AICTE, and AWS in domains like Advanced Data Analytics, AI/ML, and Full Stack Development. I am also enthusiastic about applying theoretical concepts to real-world challenges, as seen in my data science projects on water quality prediction and spam detection.
            <br /><br />
            Outside of software development, I enjoy going to the gym, playing basketball, and traveling. These interests help me stay active, energized, and inspired, contributing to a balanced and creative approach to both work and life.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                  },
                }}
                component={motion.div}
                whileHover={{ scale: 1.03 }}
              >
                <Typography variant="h5" gutterBottom>
                  Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, bgcolor: 'transparent', pb: 1 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill.name}
                      label={skill.name}
                      variant="outlined"
                      sx={{ color: '#fff', borderColor: '#FFD600', fontWeight: 'bold', fontSize: 16, bgcolor: 'rgba(255,255,255,0.05)' }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                  },
                }}
                component={motion.div}
                whileHover={{ scale: 1.03 }}
              >
                <Typography variant="h5" gutterBottom>
                  Education
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Kalinga Institute of Industrial Technology
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Bachelor of Technology in Computer Science
                </Typography>
                <Typography variant="body2" paragraph>
                  Sep 2022 – Aug 2026
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                  Mount Assisi School
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  ICSE (10th) and ISC (12th Science)
                </Typography>
                <Typography variant="body2" paragraph>
                  May 2020 and May 2022
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
                  Certifications
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      Google Advanced Data Analytics (Jan 2024 – May 2024)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      AICTE Full Stack Development Program (Oct 2024 – Dec 2024)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      AICTE Google AI/ML Foundations (Jan 2025 – Mar 2025)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      AICTE AWS AI-ML Virtual Training (Apr 2025 – May 2025)
                    </Typography>
                  </li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                  },
                }}
                component={motion.div}
                whileHover={{ scale: 1.03 }}
              >
                <Typography variant="h5" gutterBottom>
                  Interests
                </Typography>
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <span style={{ color: '#FFD600', fontSize: 36 }}><span role="img" aria-label="web">{`< />`}</span></span>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">Web Development</Typography>
                        <Typography>
                          I enjoy building interactive and scalable web applications, as seen in my dynamic e-commerce website and responsive Gradio interfaces.
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <span style={{ color: '#FFD600', fontSize: 36 }}><span role="img" aria-label="data">📊</span></span>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">Data Science</Typography>
                        <Typography>
                          I love extracting insights from data, demonstrated by my water quality analysis and SMS spam detection projects.
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <span style={{ color: '#FFD600', fontSize: 36 }}><span role="img" aria-label="ml">🤖</span></span>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">Machine Learning</Typography>
                        <Typography>
                          I'm passionate about creating intelligent systems, such as my spam classifier and ensemble models for real-world predictions.
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <span style={{ color: '#FFD600', fontSize: 36 }}><span role="img" aria-label="ai">💡</span></span>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">Artificial Intelligence</Typography>
                        <Typography>
                          AI fascinates me for its ability to solve complex problems, like my AI-powered travel itinerary planner and resume parser using NLP and LLMs.
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <span style={{ color: '#FFD600', fontSize: 36 }}><span role="img" aria-label="api">🔗</span></span>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">API Development</Typography>
                        <Typography>
                          I value robust backend systems, shown by my work on REST APIs for e-commerce and deploying FastAPI for NLP pipelines.
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 