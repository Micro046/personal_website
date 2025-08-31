import React from 'react';
import { Container, Box, Typography, Paper, Chip, TextField, IconButton } from '@mui/material';
import { SmartToy as BotIcon, Psychology as BrainIcon, Email as EmailIcon, Send as SendIcon } from '@mui/icons-material';
import { useLang } from '../utils/i18n';
import Chatbot from '../components/Chatbot';

const UI = {
  en: {
    title: 'Chat with Hassan',
    subtitle: 'Your AI-powered portfolio assistant',
    description: 'Have questions about my experience, skills, or projects? Chat with my AI assistant that knows everything about my professional background.',
    features: [
      'Ask about my ML projects and experience',
      'Learn about my technical skills',
      'Get insights about my research work',
      'Discuss collaboration opportunities'
    ],
    tip: '💡 The chatbot uses my actual resume and professional summary to provide accurate information about my background.',
    seoTitle: 'Chat with Hassan Iftikhar - AI Portfolio Assistant',
    seoDesc: 'Chat with Hassan\'s AI assistant to learn about his ML projects, skills, and experience. Get instant answers about his professional background.',
  },
  es: {
    title: 'Chatea con Hassan',
    subtitle: 'Tu asistente de portafolio con IA',
    description: '¿Tienes preguntas sobre mi experiencia, habilidades o proyectos? Chatea con mi asistente de IA que conoce todo sobre mi experiencia profesional.',
    features: [
      'Pregunta sobre mis proyectos de ML y experiencia',
      'Conoce mis habilidades técnicas',
      'Obtén información sobre mi trabajo de investigación',
      'Discute oportunidades de colaboración'
    ],
    tip: '💡 El chatbot usa mi CV real y resumen profesional para proporcionar información precisa sobre mi experiencia.',
    seoTitle: 'Chatea con Hassan Iftikhar - Asistente de Portafolio IA',
    seoDesc: 'Chatea con el asistente de IA de Hassan para conocer sus proyectos de ML, habilidades y experiencia. Obtén respuestas instantáneas sobre su experiencia profesional.',
  },
  ru: {
    title: 'Чат с Хасаном',
    subtitle: 'Ваш ИИ-помощник для портфолио',
    description: 'Есть вопросы о моем опыте, навыках или проектах? Пообщайтесь с моим ИИ-помощником, который знает все о моем профессиональном опыте.',
    features: [
      'Спросите о моих ML проектах и опыте',
      'Узнайте о моих технических навыках',
      'Получите информацию о моей исследовательской работе',
      'Обсудите возможности сотрудничества'
    ],
    tip: '💡 Чат-бот использует мое реальное резюме и профессиональное резюме для предоставления точной информации о моем опыте.',
    seoTitle: 'Чат с Хасаном Ифтихаром - ИИ-помощник портфолио',
    seoDesc: 'Пообщайтесь с ИИ-помощником Хасана, чтобы узнать о его ML проектах, навыках и опыте. Получите мгновенные ответы о его профессиональном опыте.',
  },
};

export default function ChatbotPage() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <BotIcon sx={{ fontSize: 60, color: 'primary.main', mr: 2 }} />
            <BrainIcon sx={{ fontSize: 60, color: 'secondary.main' }} />
          </Box>
          
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            {t.title}
          </Typography>
          
          <Typography variant="h5" sx={{ color: 'text.secondary', mb: 3 }}>
            {t.subtitle}
          </Typography>
          
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary', mb: 4 }}>
            {t.description}
          </Typography>

          {/* Features */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 4 }}>
            {t.features.map((feature, index) => (
              <Chip
                key={index}
                label={feature}
                icon={<EmailIcon />}
                sx={{
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>

          <Paper
            elevation={2}
            sx={{
              p: 3,
              bgcolor: 'info.light',
              border: '1px solid',
              borderColor: 'info.main',
              borderRadius: 2,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            <Typography variant="body2" sx={{ color: 'info.contrastText' }}>
              {t.tip}
            </Typography>
          </Paper>
        </Box>

        {/* Chatbot Interface */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            elevation={8}
            sx={{
              width: { xs: '100%', sm: 600 },
              height: 700,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              borderRadius: 3,
            }}
          >
            {/* Header */}
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 3,
                textAlign: 'center',
              }}
            >
              <BotIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {t.title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t.subtitle}
              </Typography>
            </Box>

            {/* Chat Messages Area */}
            <Box
              sx={{
                flex: 1,
                overflow: 'auto',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                bgcolor: 'grey.50',
              }}
            >
              {/* Welcome Message */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  <BotIcon />
                </Box>
                
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    bgcolor: 'white',
                    borderRadius: 2,
                    borderTopLeftRadius: 0,
                    maxWidth: '80%',
                  }}
                >
                  <Typography variant="body1">
                    Hi! I'm Hassan's AI assistant. I have access to his complete professional background, including his resume, projects, and experience. How can I help you today?
                  </Typography>
                </Paper>
              </Box>

              {/* Tip */}
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Chip
                  label="💡 Try asking: 'Tell me about your ML projects' or 'What are your key skills?'"
                  size="small"
                  sx={{
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                    fontSize: '0.75rem',
                  }}
                />
              </Box>
            </Box>

                         {/* Chat Input Area */}
             <Box
               sx={{
                 p: 3,
                 bgcolor: 'white',
                 borderTop: 1,
                 borderColor: 'divider',
               }}
             >
               <Box sx={{ display: 'flex', gap: 1 }}>
                 <TextField
                   fullWidth
                   size="small"
                   placeholder="Type your message..."
                   multiline
                   maxRows={3}
                   sx={{
                     '& .MuiOutlinedInput-root': {
                       borderRadius: 2,
                     },
                   }}
                 />
                 <IconButton
                   sx={{
                     bgcolor: 'primary.main',
                     color: 'white',
                     '&:hover': {
                       bgcolor: 'primary.dark',
                     },
                   }}
                 >
                   <SendIcon />
                 </IconButton>
               </Box>
               
                                  <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'text.secondary' }}>
                     💡 Type a message above or use the floating chat button for the full interactive experience!
                   </Typography>
             </Box>
          </Paper>
        </Box>
      </Container>
      
      {/* Floating Chatbot Component */}
      <Chatbot />
    </>
  );
}
