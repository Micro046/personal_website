import React from 'react';
import { Container, Box, Typography, Button, Stack, Tooltip } from '@mui/material';
import FooterItems from './FooterItems';
import { useLang } from '../../utils/i18n';

const COPY = {
  en: {
    headline: "Exploring the future of AI & Data Science",
    sub: "From machine learning and deep learning to generative AI — building impactful solutions that solve real-world problems.",
    cta: "Get in Touch",
    projects: "View Projects",
    subject: "Collaboration Inquiry",
  },
  es: {
    headline: "Explorando el futuro de la IA y la Ciencia de Datos",
    sub: "Desde el aprendizaje automático y profundo hasta la IA generativa — creando soluciones con impacto real.",
    cta: "Contactar",
    projects: "Ver proyectos",
    subject: "Consulta de colaboración",
  },
  ru: {
    headline: "Исследуем будущее ИИ и науки о данных",
    sub: "От машинного обучения и глубокого обучения до генеративного ИИ — создаем эффективные решения для реальных проблем.",
    cta: "Связаться",
    projects: "Смотреть проекты",
    subject: "Запрос о сотрудничестве",
  },
};

export default function Footer() {
  const [lang] = useLang();
  const t = COPY[lang] || COPY.en;

  // 👉 Replace with your email or set EMAIL in .env
  const EMAIL = process.env.EMAIL || 'hassaniftikhar62@gmail.com';

  const handleContact = () => {
    const subject = encodeURIComponent(t.subject);
    const body = encodeURIComponent(`Hi Hassan,\n\nI came across your portfolio and would like to connect with you.\n\nBest regards,`);
    
    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`;
    
    // Try to open Gmail in new window/tab only
    try {
      // Method 1: Try window.open with specific features
      const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer,width=800,height=600');
      
      // Check if popup was blocked
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Method 2: Create a temporary link and click it
        const tempLink = document.createElement('a');
        tempLink.href = gmailUrl;
        tempLink.target = '_blank';
        tempLink.rel = 'noopener noreferrer';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      }
    } catch (error) {
      // Method 3: Create a temporary link and click it
      try {
        const tempLink = document.createElement('a');
        tempLink.href = gmailUrl;
        tempLink.target = '_blank';
        tempLink.rel = 'noopener noreferrer';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      } catch (linkError) {
        // Method 4: Fallback to clipboard copy
        navigator.clipboard.writeText('hassaniftikhar62@gmail.com').then(() => {
          alert(`Gmail couldn't open automatically.\n\nEmail copied to clipboard: hassaniftikhar62@gmail.com\n\nPlease:\n1. Go to gmail.com\n2. Click Compose\n3. Paste this email: hassaniftikhar62@gmail.com\n4. Add subject: ${t.subject}`);
        }).catch(() => {
          // Final fallback: show detailed instructions
          alert(`Contact me at: hassaniftikhar62@gmail.com\n\nSince Gmail couldn't open automatically:\n\n1. Go to gmail.com\n2. Click "Compose"\n3. Add To: hassaniftikhar62@gmail.com\n4. Add Subject: ${t.subject}\n5. Add your message\n\nOr copy this email: hassaniftikhar62@gmail.com`);
        });
      }
    }
  };

  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', mt: 6 }}>
      <Container maxWidth="lg" sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
          {t.headline}
        </Typography>
        <Typography sx={{ opacity: 0.9, mb: 2 }}>
          {t.sub}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
                                  <Tooltip title={`Click to open Gmail compose with hassaniftikhar62@gmail.com`}>
              <Button
                onClick={handleContact}
                variant="contained"
                color="secondary"
                aria-label={t.cta}
              >
                {t.cta}
              </Button>
            </Tooltip>
            <Button
              href="/projects"
              variant="outlined"
              sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}
            >
              {t.projects}
            </Button>
        </Stack>
        <FooterItems />
        <Typography variant="caption" sx={{ display: 'block', mt: 2, opacity: 0.75 }}>
          © {new Date().getFullYear()} Hassan Iftikhar
        </Typography>
      </Container>
    </Box>
  );
}
