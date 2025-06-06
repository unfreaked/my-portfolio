import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/unfreaked',
      label: 'GitHub',
    },
    {
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/ritik-ranjan-372710244/',
      label: 'LinkedIn',
    },
    {
      icon: <EmailIcon />,
      url: 'mailto:28ritikranjan@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="center"
            sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
          >
            Feel free to reach out to me for any questions or opportunities. I'm
            always open to discussing new projects and ideas.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{ p: 4 }}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
              >
                <Typography variant="h5" gutterBottom>
                  Send me a message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{ p: 4, height: '100%' }}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
              >
                <Typography variant="h5" gutterBottom>
                  Connect with me
                </Typography>
                <Box sx={{ mt: 4 }}>
                  {socialLinks.map((link) => (
                    <IconButton
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      sx={{ mr: 2, mb: 2 }}
                      size="large"
                    >
                      {link.icon}
                    </IconButton>
                  ))}
                </Box>
                <Typography variant="body1" sx={{ mt: 4 }}>
                  Location: Bhubaneswar, India
                </Typography>
                <Typography variant="body1">
                  Email: 28ritikranjan@gmail.com
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 