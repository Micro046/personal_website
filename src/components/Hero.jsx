import React from 'react';
import { Box, Button, Chip, Container, Stack, Typography, Tooltip } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';
import { useLang } from '../utils/i18n';

const UI = {
  en: {
    h1_a: 'Data Scientist & ',
    h1_b: 'AI Researcher ',
    h1_c: 'Expert',
    sub: 'Specializing in Machine Learning, Deep Learning, Reinforcement Learning, and Generative AI. Building end-to-end ML solutions that drive measurable business impact.',
    bullets: [
      { icon: <RocketLaunchIcon />, label: 'ML & Deep Learning' },
      { icon: <AutoAwesomeIcon />, label: 'Reinforcement Learning' },
      { icon: <SecurityIcon />, label: 'Computer Vision & NLP' },
    ],
    ctaPrimary: 'View Projects',
    ctaSecondary: 'Contact Me',
    subject: 'Portfolio Inquiry',
    seenIn: 'Experience at',
  },
  es: {
    h1_a: 'Científico de Datos y ',
    h1_b: 'Investigador en IA',
    h1_c: 'Experto',
    sub: 'Especializado en Aprendizaje Automático, Aprendizaje Profundo, Aprendizaje por Refuerzo e IA Generativa. Construyendo soluciones ML completas que generan impacto empresarial medible.',
    bullets: [
      { icon: <RocketLaunchIcon />, label: 'ML y Aprendizaje Profundo' },
      { icon: <AutoAwesomeIcon />, label: 'Aprendizaje por Refuerzo' },
      { icon: <SecurityIcon />, label: 'Visión por Computador y PLN' },
    ],
    ctaPrimary: 'Ver Proyectos',
    ctaSecondary: 'Contactarme',
    subject: 'Consulta de Portafolio',
    seenIn: 'Experiencia en',
  },
  ru: {
    h1_a: 'Специалист по данным и ',
    h1_b: 'Исследователь ИИ',
    h1_c: 'Эксперт',
    sub: 'Специализируюсь на машинном обучении, глубоком обучении, обучении с подкреплением и генеративном ИИ. Создаю комплексные ML решения, которые обеспечивают измеримое бизнес-воздействие.',
    bullets: [
      { icon: <RocketLaunchIcon />, label: 'ML и глубокое обучение' },
      { icon: <AutoAwesomeIcon />, label: 'Обучение с подкреплением' },
      { icon: <SecurityIcon />, label: 'Компьютерное зрение и NLP' },
    ],
    ctaPrimary: 'Смотреть проекты',
    ctaSecondary: 'Связаться со мной',
    subject: 'Запрос о портфолио',
    seenIn: 'Опыт в',
  },
};

export default function Hero() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;
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
    <Box
      sx={(theme) => ({
        position: 'relative',
        color: '#fff',
        py: { xs: 8, md: 12 },
        // Layered gradients for a premium look
        background: `radial-gradient(1200px 600px at 20% -10%, ${theme.palette.secondary.main}33, transparent 60%),
                     linear-gradient(180deg, ${theme.palette.primary.main} 0%, #0b1220 60%, #08101a 100%)`,
        overflow: 'hidden',
      })}
    >
      {/* subtle glow ornament */}
      <Box sx={{
        position: 'absolute',
        width: 280,
        height: 280,
        right: -80,
        top: -80,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(6,182,212,0) 60%)',
        filter: 'blur(6px)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Headline with gradient-highlight */}
          <Typography variant="h1" sx={{ fontWeight: 900, letterSpacing: -1, lineHeight: 1.1, fontSize: { xs: 36, md: 56 } }}>
            {t.h1_a}
            <Box component="span" sx={{
              background: (th) => `linear-gradient(90deg, ${th.palette.secondary.main}, #7dd3fc)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 24px rgba(125,211,252,.25)'
            }}>
              {t.h1_b}
            </Box>
            {t.h1_c}
          </Typography>

          {/* Subheadline */}
          <Typography sx={{ maxWidth: 900, fontSize: { xs: 16, md: 18 }, color: 'rgba(255,255,255,.86)' }}>
            {t.sub}
          </Typography>

          {/* Proof points */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems="center" justifyContent="center">
            {t.bullets.map((b, i) => (
              <Chip key={i} icon={b.icon} label={b.label} color="default" sx={{
                bgcolor: 'rgba(255,255,255,0.12)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.25)',
                fontWeight: 700,
              }} />
            ))}
          </Stack>

          {/* CTAs */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component="a" href="/projects" variant="contained" color="secondary" size="large" aria-label={t.ctaPrimary}>
              {t.ctaPrimary}
            </Button>
            <Tooltip title={`Click to open Gmail compose with hassaniftikhar62@gmail.com`}>
              <Button onClick={handleContact} variant="outlined" size="large" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>
                {t.ctaSecondary}
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

