import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SkillsItems from './SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';
import { useLang } from '../../utils/i18n';

const UI = {
  en: {
    core: 'Core AI & ML Skills',
    data: 'Data Analysis & Visualization',
    cloud: 'Cloud & DevOps',
    programming: 'Programming & Development',
    database: 'Databases & Warehousing',
    tools: 'Workflow & Tools',
  },
  es: {
    core: 'Habilidades principales en IA y ML',
    data: 'Análisis de datos y visualización',
    cloud: 'Nube y DevOps',
    programming: 'Programación y desarrollo',
    database: 'Bases de datos y almacenamiento',
    tools: 'Flujo de trabajo y herramientas',
  },
  ru: {
    core: 'Основные навыки ИИ и МО',
    data: 'Анализ данных и визуализация',
    cloud: 'Облачные технологии и DevOps',
    programming: 'Программирование и разработка',
    database: 'Базы данных и хранилища',
    tools: 'Рабочие процессы и инструменты',
  },
};

const Section = ({ title, children }) => (
  <Box
    sx={(theme) => ({
      textAlign: 'center',
      py: 4,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 3,
      boxShadow: '0 6px 20px rgba(15,18,32,0.08), 0 1px 2px rgba(15,18,32,0.04)',
      border: `1px solid ${theme.palette.divider}`,
      mb: 6,
    })}
  >
    <Typography
      variant="h3"
      component="h2"
      sx={{ color: 'text.primary', py: 2, fontWeight: 900, letterSpacing: -0.4 }}
    >
      <strong>{title}</strong>
    </Typography>
    {children}
  </Box>
);

export default function Skills() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;

  return (
    <section id="skills">
      <Container maxWidth="lg">
        <Section title={t.core}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
            <SkillsItems config={skillsConfig.coreSkills} />
          </Box>
        </Section>

        <Section title={t.data}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
            <SkillsItems config={skillsConfig.dataSkills} />
          </Box>
        </Section>

        <Section title={t.cloud}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
            <SkillsItems config={skillsConfig.cloudSkills} />
          </Box>
        </Section>

        <Section title={t.programming}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
            <SkillsItems config={skillsConfig.programmingSkills} />
          </Box>
        </Section>

        <Section title={t.database}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
            <SkillsItems config={skillsConfig.databaseSkills} />
          </Box>
        </Section>

        <Section title={t.tools}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
            <SkillsItems config={skillsConfig.toolSkills} />
          </Box>
        </Section>
      </Container>
    </section>
  );
}
