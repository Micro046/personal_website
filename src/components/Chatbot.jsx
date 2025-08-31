import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Chip,
  CircularProgress,
  Fade,
  Zoom
} from '@mui/material';
import {
  Send as SendIcon,
  SmartToy as BotIcon,
  Person as UserIcon,
  Close as CloseIcon,
  Chat as ChatIcon
} from '@mui/icons-material';
import { useLang } from '../utils/i18n';

const UI = {
  en: {
    title: 'Chat with Hassan',
    subtitle: 'Ask me about my experience, skills, or projects',
    placeholder: 'Type your message...',
    send: 'Send',
    close: 'Close',
    open: 'Open Chat',
    thinking: 'Thinking...',
    error: 'Sorry, I encountered an error. Please try again.',
    welcome: 'Hi! I\'m Hassan. How can I help you today?',
    tip: '💡 Try asking about my ML projects, experience, or skills!'
  },
  es: {
    title: 'Chatea con Hassan',
    subtitle: 'Pregúntame sobre mi experiencia, habilidades o proyectos',
    placeholder: 'Escribe tu mensaje...',
    send: 'Enviar',
    close: 'Cerrar',
    open: 'Abrir Chat',
    thinking: 'Pensando...',
    error: 'Lo siento, encontré un error. Por favor, inténtalo de nuevo.',
    welcome: '¡Hola! Soy Hassan. ¿Cómo puedo ayudarte hoy?',
    tip: '💡 ¡Intenta preguntarme sobre mis proyectos de ML, experiencia o habilidades!'
  },
  ru: {
    title: 'Чат с Хасаном',
    subtitle: 'Спросите меня о моем опыте, навыках или проектах',
    placeholder: 'Введите ваше сообщение...',
    send: 'Отправить',
    close: 'Закрыть',
    open: 'Открыть чат',
    thinking: 'Думаю...',
    error: 'Извините, произошла ошибка. Пожалуйста, попробуйте снова.',
    welcome: 'Привет! Я Хасан. Как я могу помочь вам сегодня?',
    tip: '💡 Попробуйте спросить о моих ML проектах, опыте или навыках!'
  }
};

const Chatbot = () => {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // API configuration
  const API_BASE_URL = process.env.REACT_APP_CHATBOT_API_URL || 'http://localhost:8000';

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          role: 'assistant',
          content: t.welcome,
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length, t.welcome]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        const botMessage = {
          id: Date.now() + 1,
          role: 'assistant',
          content: data.response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('API returned error');
      }
    } catch (err) {
      console.error('Chat error:', err);
      setError(t.error);
      
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: t.error,
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setError(null);
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([lang === 'ru' ? 'ru-RU' : lang === 'es' ? 'es-ES' : 'en-US'], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Fade in={!isOpen}>
        <Box
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1000,
          }}
        >
          <IconButton
            onClick={toggleChat}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              width: 60,
              height: 60,
              boxShadow: 3,
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <ChatIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>
      </Fade>

      {/* Chat Interface */}
      <Zoom in={isOpen}>
        <Paper
          elevation={8}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: { xs: 'calc(100vw - 48px)', sm: 400 },
            height: 600,
            zIndex: 1001,
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
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <BotIcon />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {t.title}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  {t.subtitle}
                </Typography>
              </Box>
            </Box>
            <IconButton
              onClick={toggleChat}
              size="small"
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              overflow: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              bgcolor: 'grey.50',
            }}
          >
            {messages.map((message) => (
              <Box
                key={message.id}
                sx={{
                  display: 'flex',
                  justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                  gap: 1,
                }}
              >
                {message.role === 'assistant' && (
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: 'primary.main',
                    }}
                  >
                    <BotIcon fontSize="small" />
                  </Avatar>
                )}
                
                <Box
                  sx={{
                    maxWidth: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5,
                  }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 1.5,
                      bgcolor: message.role === 'user' ? 'primary.main' : 'white',
                      color: message.role === 'user' ? 'white' : 'text.primary',
                      borderRadius: 2,
                      borderTopLeftRadius: message.role === 'user' ? 2 : 0,
                      borderTopRightRadius: message.role === 'assistant' ? 2 : 0,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        color: message.isError ? 'error.main' : 'inherit',
                      }}
                    >
                      {message.content}
                    </Typography>
                  </Paper>
                  
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                      fontSize: '0.7rem',
                    }}
                  >
                    {formatTime(message.timestamp)}
                  </Typography>
                </Box>

                {message.role === 'user' && (
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: 'secondary.main',
                    }}
                  >
                    <UserIcon fontSize="small" />
                  </Avatar>
                )}
              </Box>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: 'primary.main',
                  }}
                >
                  <BotIcon fontSize="small" />
                </Avatar>
                <Paper
                  elevation={1}
                  sx={{
                    p: 1.5,
                    bgcolor: 'white',
                    borderRadius: 2,
                    borderTopLeftRadius: 0,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CircularProgress size={16} />
                    <Typography variant="body2" color="text.secondary">
                      {t.thinking}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            )}

            {/* Tip */}
            {messages.length === 1 && !isLoading && (
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Chip
                  label={t.tip}
                  size="small"
                  sx={{
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                    fontSize: '0.75rem',
                  }}
                />
              </Box>
            )}

            <div ref={messagesEndRef} />
          </Box>

          {/* Input */}
          <Box
            sx={{
              p: 2,
              bgcolor: 'white',
              borderTop: 1,
              borderColor: 'divider',
            }}
          >
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                ref={inputRef}
                fullWidth
                size="small"
                placeholder={t.placeholder}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                multiline
                maxRows={3}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              <IconButton
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                  '&:disabled': {
                    bgcolor: 'grey.300',
                    color: 'grey.500',
                  },
                }}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Zoom>
    </>
  );
};

export default Chatbot;
