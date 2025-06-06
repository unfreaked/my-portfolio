import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const experiences = [
  {
    title: 'Your Job Title',
    company: 'Your Company',
    period: 'Your Period',
    description: [
      'Your achievement or responsibility 1',
      'Your achievement or responsibility 2',
      'Your achievement or responsibility 3',
    ],
    type: 'work',
  },
  {
    title: 'Your Education Title',
    company: 'Your University',
    period: 'Your Education Period',
    description: [
      'Your educational achievement 1',
      'Your educational achievement 2',
      'Your educational achievement 3',
    ],
    type: 'education',
  },
];

const Resume = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Resume
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="center"
            sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
          >
            Download my latest resume to see a detailed overview of my education, projects, skills, and certifications.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/resume.pdf"
              target="_blank"
            >
              Download Resume (PDF)
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Resume; 