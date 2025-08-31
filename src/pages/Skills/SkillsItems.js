import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';

const SkillsItems = ({ config }) => {
  if (!config || config.length === 0) return null;

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
      {config.map((item) => (
        <Tooltip 
          key={item.id} 
          title={item.category ? `Category: ${item.category}` : ''} 
          arrow
        >
          <Box
            sx={{
              color: '#263238',
              textAlign: 'center',
              p: '1.5rem',
              bgcolor: '#ffffff',
              m: { xs: '0.5rem', sm: '1rem', md: '1.5rem' },
              borderRadius: '15px',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              minWidth: '100px',
              maxWidth: '140px',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.15)',
                cursor: 'pointer',
                bgcolor: '#f9f9f9'
              }
            }}
          >
            <Box sx={{ fontSize: 50 }}>{item.icon}</Box>
            <Typography 
              variant="body2" 
              sx={{ mt: '0.6rem', fontWeight: 'bold', color: 'text.primary' }}
            >
              {item.text}
            </Typography>
            {item.proficiency && (
              <Typography 
                variant="caption" 
                sx={{ display: 'block', mt: 0.3, fontStyle: 'italic', color: 'text.secondary' }}
              >
                {item.proficiency}
              </Typography>
            )}
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SkillsItems;
