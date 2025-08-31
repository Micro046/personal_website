import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box, Avatar } from '@mui/material';

const About = ({ about }) => {
  const { start, exit } = about || {};

  return (
    <Box id="about" sx={{ my: 4 }}>
      <Card sx={{ backgroundColor: '#263238', color: '#f5f5f5' }}>
        <CardHeader
          avatar={
            <Avatar alt="Hassan Iftikhar" src="/profile.jpg" /> // replace with your image
          }
          title="About Me"
          titleTypographyProps={{ sx: { color: '#f5f5f5', fontWeight: 600 } }}
        />
        <CardContent
          sx={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            backgroundColor: '#F6F6F6',
            color: '#444',
            p: { xs: '1rem', sm: '2rem' },
          }}
        >
          <Typography variant="body1" paragraph>
            {start}
          </Typography>
          <Typography variant="body1">{exit}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
