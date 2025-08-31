import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { 
  Search as SearchIcon, 
  OpenInNew as OpenInNewIcon,
  Code as CodeIcon,
  TrendingUp as TrendingUpIcon,
  Psychology as PsychologyIcon,
  Storage as StorageIcon,
  Analytics as AnalyticsIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  LocationOn as LocationOnIcon,
  CalendarToday as CalendarTodayIcon,
} from '@mui/icons-material';
import projectConfig from '../assets/configs/projectConfig';
import Seo from '../components/Seo';
import { withUtm } from '../utils/withUtm';
import { useLang } from '../utils/i18n';

const UI = {
  en: {
    seoTitle: 'Projects | Hassan Iftikhar',
    seoDesc: 'Data Science and AI projects by Hassan Iftikhar.',
    overline: 'Selected Work',
    title: 'Projects',
    desc:
      'A curated collection of data science, machine learning, and AI projects. Filter, search, and explore.',
    searchPlaceholder: 'Search projects',
    sortRecent: 'Recent',
    sortAZ: 'A → Z',
    ctaView: 'View Details',
    close: 'Close',
    technologies: 'Technologies Used',
    achievements: 'Key Achievements',
    role: 'Role',
    duration: 'Duration',
    company: 'Company',
    location: 'Location',
  },
  es: {
    seoTitle: 'Proyectos | Hassan Iftikhar',
    seoDesc: 'Proyectos de ciencia de datos e IA de Hassan Iftikhar.',
    overline: 'Trabajo destacado',
    title: 'Proyectos',
    desc:
      'Una colección curada de proyectos de ciencia de datos, aprendizaje automático e IA. Filtra, busca y explora.',
    searchPlaceholder: 'Buscar proyectos',
    sortRecent: 'Recientes',
    sortAZ: 'A → Z',
    ctaView: 'Ver Detalles',
    close: 'Cerrar',
    technologies: 'Tecnologías Utilizadas',
    achievements: 'Logros Clave',
    role: 'Rol',
    duration: 'Duración',
    company: 'Empresa',
    location: 'Ubicación',
  },
  ru: {
    seoTitle: 'Проекты | Хасан Ифтихар',
    seoDesc: 'Проекты в области науки о данных и ИИ от Хасана Ифтихара.',
    overline: 'Избранные работы',
    title: 'Проекты',
    desc:
      'Кураторская коллекция проектов в области науки о данных, машинного обучения и ИИ. Фильтруйте, ищите и исследуйте.',
    searchPlaceholder: 'Поиск проектов',
    sortRecent: 'Недавние',
    sortAZ: 'А → Я',
    ctaView: 'Подробнее',
    close: 'Закрыть',
    technologies: 'Используемые технологии',
    achievements: 'Ключевые достижения',
    role: 'Роль',
    duration: 'Продолжительность',
    company: 'Компания',
    location: 'Местоположение',
  },
};

// Enhanced project data with additional details from resume
const enhancedProjectConfig = [
  {
    ...projectConfig[0], // Speaker Feedback System
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Audio Processing', 'Computer Vision', 'NLP'],
    achievements: [
      'Designed and developed speaker feedback system enabling real-time verbal delivery insights',
      'Built audio-processing pipelines for feature extraction (pitch, pace, clarity)',
      'Trained ML models to assess speech quality and provide immediate feedback',
      'Integrated feedback mechanisms for pacing, tone, and clarity guidance',
      'Deployed system via interface/API for coaching and presentation tools'
    ],
    role: 'Data Scientist',
    company: 'Sberbank AI',
    location: 'Moscow, Russia',
    duration: '05/2025 - 08/2025'
  },
  {
    ...projectConfig[1], // Retinal Vessel Segmentation
    technologies: ['Python', 'PyTorch', 'UNet', 'OpenCV', 'Medical Imaging', 'Deep Learning'],
    achievements: [
      'Developed UNET-based deep learning model for retinal blood vessel segmentation',
      'Employed separate training for thick/thin vessels with fusion mechanism',
      'Enhanced thin vessel detection with optimized preprocessing and skeletonization',
      'Achieved 96.42% accuracy, 97.13% sensitivity, and 84.67% specificity on DRIVE dataset',
      'Outperformed UNET, AG-UNET, and DenseNet baselines'
    ],
    role: 'Researcher',
    company: 'Applied AI Center, Skoltech',
    location: 'Moscow, Russia',
    duration: '09/2024 - Present'
  },
  {
    ...projectConfig[2], // A/B Testing & User Segmentation
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'RFM Analysis', 'A/B Testing'],
    achievements: [
      'Performed user segmentation on mobile puzzle games (X2 and 2248) using RFM analysis',
      'Applied 20/80 rule to identify high-value players',
      'Designed and executed A/B tests on game economy parameters',
      'Increased game revenue by 2–3% while maintaining player retention rates',
      'Demonstrated effective balance between monetization and user experience'
    ],
    role: 'Data Scientist',
    company: 'Inspired Square FZE',
    location: 'Dubai, UAE',
    duration: '07/2022 - 08/2024'
  },
  {
    ...projectConfig[3], // ETL Pipeline
    technologies: ['Talend', 'Google Cloud Platform', 'BigQuery', 'Pub/Sub', 'Dataflow', 'APIs'],
    achievements: [
      'Built automated ETL pipelines to extract user and monetization data from APIs',
      'Integrated data from AppsFlyer, AppLovin, and Google Play Billing',
      'Used Talend Data Studio, Pub/Sub, and Dataflow for orchestration',
      'Delivered cloud-based data pipeline that cut manual reporting time',
      'Enhanced analyst data access and enabled real-time user metrics insights'
    ],
    role: 'Data Scientist',
    company: 'Inspired Square FZE',
    location: 'Dubai, UAE',
    duration: '07/2022 - 08/2024'
  },
  {
    ...projectConfig[4], // User Lifetime Prediction
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning', 'Predictive Modeling'],
    achievements: [
      'Developed predictive modeling framework using player\'s first 7 days of activity',
      'Forecasted 90-day lifetime value and player category',
      'Designed strategies to target high-value players with personalized offers',
      'Enabled early identification of golden users for targeted campaigns',
      'Improved personalization contributed to higher retention and revenue potential'
    ],
    role: 'Data Scientist',
    company: 'Inspired Square FZE',
    location: 'Dubai, UAE',
    duration: '07/2022 - 08/2024'
  }
];

const LinkButton = ({ link }) => (
  <Tooltip title={link.name} placement="top">
    <IconButton
      size="small"
      component="a"
      href={withUtm(link.url, 'projects_page')}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}
    >
      {link.icon ? (
        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { fontSize: 18 } }}>
          {link.icon}
        </Box>
      ) : (
        <OpenInNewIcon fontSize="inherit" />
      )}
    </IconButton>
  </Tooltip>
);

const ProjectCard = ({ project, lang = 'en', onCardClick }) => {
  const desc = project.description_i18n?.[lang] || project.description_i18n?.en || '';
  const categoryLabel =
    typeof project.category === 'string'
      ? project.category
      : project.category?.[lang] || project.category?.en;

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        }
      }}
      onClick={() => onCardClick(project)}
    >
      {/* Image placeholder 16:9 to prevent layout shift */}
      <Box sx={{ position: 'relative', pt: '56.25%', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(1.05) contrast(1.05)',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography variant="h6" fontWeight={800} sx={{ letterSpacing: -0.2 }}>
            {project.title}
          </Typography>
          {categoryLabel && <Chip size="small" label={categoryLabel} />}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1}>
          {project.links?.map((l) => (
            <LinkButton key={l.name} link={l} />
          ))}
        </Stack>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={(e) => {
            e.stopPropagation();
            onCardClick(project);
          }}
        >
          {UI[lang].ctaView}
        </Button>
      </CardActions>
    </Card>
  );
};

const ProjectDetailModal = ({ project, open, onClose, lang = 'en' }) => {
  if (!project) return null;

  const t = UI[lang];
  const details = project.details?.[lang] || project.details?.en || '';
  const categoryLabel = typeof project.category === 'string' 
    ? project.category 
    : project.category?.[lang] || project.category?.en;

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxHeight: '90vh'
        }
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: 60,
                height: 60,
                borderRadius: 2,
                objectFit: 'cover'
              }}
            />
            <Box>
              <Typography variant="h5" fontWeight={800}>
                {project.title}
              </Typography>
              {categoryLabel && (
                <Chip 
                  label={categoryLabel} 
                  color="secondary" 
                  size="small"
                  sx={{ mt: 1 }}
                />
              )}
            </Box>
          </Box>
        </Stack>
      </DialogTitle>

      <DialogContent sx={{ pt: 0 }}>
        <Stack spacing={3}>
          {/* Project Details */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {t.role}
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WorkIcon fontSize="small" color="action" />
                <Typography variant="body2">{project.company}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" color="action" />
                <Typography variant="body2">{project.location}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarTodayIcon fontSize="small" color="action" />
                <Typography variant="body2">{project.duration}</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Description */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Description
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {details}
            </Typography>
          </Box>

          {/* Technologies */}
          {project.technologies && (
            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {t.technologies}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {project.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                ))}
              </Stack>
            </Box>
          )}

          {/* Key Achievements */}
          {project.achievements && (
            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {t.achievements}
              </Typography>
              <List dense>
                {project.achievements.map((achievement, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <TrendingUpIcon color="secondary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={achievement}
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Links
              </Typography>
              <Stack direction="row" spacing={1}>
                {project.links.map((link) => (
                  <LinkButton key={link.name} link={link} />
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} variant="outlined">
          {t.close}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default function Projects() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('recent');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [lang] = useLang();
  const t = UI[lang];

  const projects = useMemo(() => {
    const filtered = enhancedProjectConfig.filter((p) => {
      if (category === 'All') return true;
      const label =
        typeof p.category === 'string' ? p.category : p.category?.[lang] || p.category?.en;
      return label === category;
    });

    const q = query.trim().toLowerCase();
    const searched = q
      ? filtered.filter(
          (p) =>
            (p.title || '').toLowerCase().includes(q) ||
            (p.description_i18n?.en || '').toLowerCase().includes(q) ||
            (p.description_i18n?.es || '').toLowerCase().includes(q)
        )
      : filtered;

    return [...searched].sort((a, b) => {
      if (sort === 'az') return (a.title || '').localeCompare(b.title || '');
      return 0; // 'recent' keeps config order
    });
  }, [category, query, sort, lang]);

  const categoryChips = useMemo(() => {
    const labels = new Set(['All']); // keep sentinel value; display text stays as-is
    enhancedProjectConfig.forEach((p) => {
      if (p.category) {
        const label =
          typeof p.category === 'string' ? p.category : p.category?.[lang] || p.category?.en;
        labels.add(label);
      }
    });
    return Array.from(labels);
  }, [lang]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDesc} />

      {/* Header */}
      <Box
        sx={{
          background: (th) =>
            `linear-gradient(180deg, ${th.palette.background.default} 0%, #ffffff 100%)`,
          borderBottom: '1px solid',
          borderColor: 'divider',
          py: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Typography variant="overline" color="secondary.main" fontWeight={800}>
              {t.overline}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: -0.8 }}>
              {t.title}
            </Typography>
            <Typography color="text.secondary" maxWidth={720}>
              {t.desc}
            </Typography>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              alignItems={{ xs: 'stretch', md: 'center' }}
            >
              {/* Category chips */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {categoryChips.map((c) => (
                  <Chip
                    key={c}
                    label={c}
                    color={c === category ? 'secondary' : 'default'}
                    variant={c === category ? 'filled' : 'outlined'}
                    onClick={() => setCategory(c)}
                    sx={{ borderRadius: 10 }}
                  />
                ))}
              </Stack>

              <Box sx={{ flexGrow: 1 }} />

              {/* Search + sort */}
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  size="small"
                  placeholder={t.searchPlaceholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Divider flexItem orientation="vertical" />
                <Select size="small" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <MenuItem value="recent">{t.sortRecent}</MenuItem>
                  <MenuItem value="az">{t.sortAZ}</MenuItem>
                </Select>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid key={p.id} item xs={12} sm={6} md={4}>
              <ProjectCard 
                project={p} 
                lang={lang} 
                onCardClick={handleProjectClick}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        open={modalOpen}
        onClose={handleCloseModal}
        lang={lang}
      />
    </>
  );
}



