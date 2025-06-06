import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Travel Itinerary Planner',
    description:
      "Developed an AI-powered travel planner using LangChain and Groq's LLM API to generate personalized day trip itineraries. Designed interactive Gradio interface with dynamic backgrounds and responsive UI. Implemented prompt engineering for detailed itineraries with time blocks, locations, and travel tips and deployed the application with proper state management for seamless user experience.",
    technologies: ['Python', 'LangChain', 'Groq', 'Gradio', 'NLP'],
    github: 'https://github.com/unfreaked/Projects/blob/main/Travelitenerary.ipynb',
    image: '/travel-itinerary-planner.png',
  },
  {
    title: 'Resume Parser AI',
    description:
      'Built NLP pipeline to extract structured data from resumes using PyPDF2 and Tesseract. Deployed using FastAPI with 85% accuracy on test dataset.',
    technologies: ['Python', 'spaCy', 'PyMuPDF', 'NLP', 'Tesseract'],
    github: 'https://github.com/unfreaked/Projects/blob/main/ResumeParser.ipynb',
    image: '/Resume-Parser-AI.png',
  },
  {
    title: 'Dynamic E-Commerce Website',
    description:
      'Built and deployed a full-featured e-commerce platform with user login, shopping cart, and admin dashboard. Developed REST APIs with Node.js/Express and used MongoDB Atlas for data persistence.',
    technologies: ['Node.js', 'React.js', 'MongoDB', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/unfreaked/dynamic-website/tree/main/server',
    image: '/Dynamic E-Commerce-Website.png',
  },
  {
    title: 'Water Quality Analysis',
    description:
      'Achieved 0.69 precision using ensemble Voting Classifier (XGBoost + Random Forest). Performed EDA, data cleaning, feature selection, and hyperparameter tuning.',
    technologies: ['Python', 'Scikit-Learn', 'XGBoost'],
    github: 'https://github.com/unfreaked/Projects/blob/main/waterqualityanalysis.ipynb',
    image: '/Water-Quality-Analysis.png',
  },
  {
    title: 'SMS Spam Detection',
    description:
      'Built spam classifier with 95.16% accuracy and 100% precision using Random Forest and NN. Implemented NLP pipeline with TF-IDF, tokenization, and stopword removal.',
    technologies: ['Python', 'NLP', 'Random Forest', 'Neural Networks'],
    github: 'https://github.com/unfreaked/Projects/blob/main/SmsSpamDetection.ipynb',
    image: '/SMS-Spam-Detection.png',
  },
];

const Projects = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            My Projects
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="center"
            sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
          >
            Here are some of the projects I've worked on. Each project is a
            unique challenge that helped me grow as a developer.
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  component={motion.div}
                  whileHover={{ y: -10, scale: 1.03 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography paragraph color="text.secondary">
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                    >
                      Code
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 