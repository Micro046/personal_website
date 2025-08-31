import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Hassan Iftikhar</strong>
      </h1>
    ),
    es: (
      <h1 className="heading">
        ¡Hola! Soy <strong className="main-name"> Hassan Iftikhar</strong>
      </h1>
    ),
    ru: (
      <h1 className="heading">
        Привет! Я <strong className="main-name"> Хасан Ифтихар</strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "Data Scientist",
      "AI Researcher",
      "Machine Learning Engineer",
      "Reinforcement Learning Enthusiast",
      "Generative AI Specialist",
      "Python Developer",
      "Deep Learning Expert",
      "Computer Vision Specialist",
    ],
    es: [
      "Científico de Datos",
      "Investigador en IA",
      "Ingeniero de Machine Learning",
      "Entusiasta del Aprendizaje por Refuerzo",
      "Especialista en IA Generativa",
      "Desarrollador en Python",
      "Experto en Aprendizaje Profundo",
      "Especialista en Visión por Computador",
    ],
    ru: [
      "Специалист по данным",
      "Исследователь ИИ",
      "Инженер машинного обучения",
      "Энтузиаст обучения с подкреплением",
      "Специалист по генеративному ИИ",
      "Разработчик на Python",
      "Эксперт по глубокому обучению",
      "Специалист по компьютерному зрению",
    ],
  },

  about_i18n: {
    en: {
      start:
        "I'm a passionate Data Scientist with extensive experience in machine learning, deep learning, reinforcement learning, and generative AI. I specialize in building end-to-end data solutions that drive measurable business impact, from ETL pipelines to production-ready ML models.",
      middle:
        "My expertise spans computer vision, natural language processing, predictive analytics, and A/B testing. I've successfully delivered projects that increased revenue by 2-3% while maintaining user engagement, and developed medical imaging models achieving 96.42% accuracy.",
      exit:
        "I'm proficient in Python, ML frameworks like TensorFlow and PyTorch, cloud platforms (GCP, AWS), and have hands-on experience with data engineering tools including Talend, BigQuery, and Docker.",
    },
    es: {
      start:
        "Soy un Científico de Datos apasionado con amplia experiencia en aprendizaje automático, aprendizaje profundo, aprendizaje por refuerzo e IA generativa. Me especializo en construir soluciones de datos completas que generan impacto empresarial medible.",
      middle:
        "Mi experiencia abarca visión por computador, procesamiento de lenguaje natural, análisis predictivo y pruebas A/B. He entregado exitosamente proyectos que aumentaron los ingresos en 2-3% manteniendo el compromiso del usuario.",
      exit:
        "Soy competente en Python, frameworks de ML como TensorFlow y PyTorch, plataformas en la nube (GCP, AWS), y tengo experiencia práctica con herramientas de ingeniería de datos incluyendo Talend, BigQuery y Docker.",
    },
    ru: {
      start:
        "Я страстный специалист по данным с обширным опытом в машинном обучении, глубоком обучении, обучении с подкреплением и генеративном ИИ. Я специализируюсь на создании комплексных решений для данных, которые обеспечивают измеримое бизнес-воздействие.",
      middle:
        "Мой опыт охватывает компьютерное зрение, обработку естественного языка, прогнозную аналитику и A/B тестирование. Я успешно реализовал проекты, которые увеличили доход на 2-3%, сохраняя вовлеченность пользователей.",
      exit:
        "Я владею Python, фреймворками ML, такими как TensorFlow и PyTorch, облачными платформами (GCP, AWS), и имею практический опыт работы с инструментами инженерии данных, включая Talend, BigQuery и Docker.",
    },
  },

  workTimeline: [
    {
      id: "work-4",
      title: "Data Scientist",
      title_i18n: { en: "Data Scientist", es: "Científico de Datos", ru: "Специалист по данным" },
      company: "Sberbank AI (Moscow, Russia)",
      description_i18n: {
        en: "Designed and developed speaker feedback system for real-time verbal delivery insights. Built audio-processing pipelines, trained ML models for speech quality assessment, and deployed the system via interface/API for coaching tools.",
        es: "Diseñé y desarrollé sistema de retroalimentación para oradores con insights en tiempo real. Construí pipelines de procesamiento de audio, entrené modelos de ML para evaluación de calidad del habla.",
        ru: "Спроектировал и разработал систему обратной связи для ораторов с анализом выступлений в реальном времени. Создал конвейеры обработки аудио, обучил ML-модели для оценки качества речи.",
      },
      date: "05/2025 - 08/2025",
      icon: <MdWork />,
      tags: ["python", "tensorflow", "opencv", "audio-processing", "nlp", "computer-vision"],
    },
    {
      id: "work-3",
      title: "Researcher",
      title_i18n: { en: "Researcher", es: "Investigador", ru: "Исследователь" },
      company: "Applied AI Center, Skoltech (Moscow, Russia)",
      description_i18n: {
        en: "Conducting research on Umbrella Reinforcement Learning (URL), developing offline RL variants and algorithms for efficient policy learning. Contributing to theoretical understanding of advanced RL and generative AI techniques.",
        es: "Investigación en Aprendizaje por Refuerzo Umbrella (URL), desarrollando variantes offline y algoritmos para aprendizaje eficiente de políticas. Contribuyendo al entendimiento teórico de técnicas avanzadas de RL e IA generativa.",
        ru: "Провожу исследования в области обучения с подкреплением Umbrella (URL), разрабатываю офлайн варианты RL и алгоритмы для эффективного обучения политик. Вношу вклад в теоретическое понимание продвинутых техник RL и генеративного ИИ.",
      },
      date: "09/2024 - Present",
      icon: <BiRocket />,
      tags: ["reinforcement-learning", "generative-ai", "python", "pytorch", "research"],
    },
    {
      id: "work-2",
      title: "Data Scientist",
      title_i18n: { en: "Data Scientist", es: "Científico de Datos", ru: "Специалист по данным" },
      company: "Inspired Square FZE (Dubai, UAE)",
      description_i18n: {
        en: "Led data science initiatives for mobile gaming, including A/B testing, user segmentation, predictive modeling, and ETL pipeline development. Increased game revenue by 2-3% through data-driven optimization.",
        es: "Lideré iniciativas de ciencia de datos para juegos móviles, incluyendo pruebas A/B, segmentación de usuarios, modelado predictivo y desarrollo de pipelines ETL. Aumenté los ingresos del juego en 2-3%.",
        ru: "Руководил инициативами в области науки о данных для мобильных игр, включая A/B тестирование, сегментацию пользователей, прогнозное моделирование и разработку ETL конвейеров. Увеличил доход от игр на 2-3%.",
      },
      date: "07/2022 - 08/2024",
      icon: <FaMobileAlt />,
      tags: ["etl", "python", "bigquery", "tableau", "ab-testing", "predictive-modeling", "user-segmentation"],
    },
    {
      id: "work-1",
      title: "Data Engineer",
      title_i18n: { en: "Data Engineer", es: "Ingeniero de Datos", ru: "Инженер данных" },
      company: "DCUBE Tech (Islamabad, Pakistan)",
      description_i18n: {
        en: "Worked on data migration and pipeline design for AI-driven OCR and computer vision solutions. Handled batch processing of 360-degree image data for server migration projects.",
        es: "Trabajé en migración de datos y diseño de pipelines para soluciones de OCR e inteligencia artificial en visión por computador. Manejé procesamiento por lotes de данных изображений 360°.",
        ru: "Работал над миграцией данных и проектированием конвейеров для решений OCR и компьютерного зрения на базе ИИ. Обрабатывал пакетные данные изображений 360° для проектов миграции серверов.",
      },
      date: "01/2022 - 05/2022",
      icon: <DiCodeigniter />,
      tags: ["data-engineering", "ocr", "computer-vision", "batch-processing"],
    },
  ],

  education: [
    {
      id: "edu-2",
      title: "Masters in Data Science",
      title_i18n: { en: "Masters in Data Science", es: "Maestría en Ciencia de Datos", ru: "Магистр по науке о данных" },
      institution: "Skolkovo Institute of Science and Technology",
      location: "Moscow, Russia",
      description_i18n: {
        en: "Specialized in advanced machine learning, deep learning, and AI research. Currently conducting research on reinforcement learning and generative AI.",
        es: "Especializado en aprendizaje automático avanzado, aprendizaje profundo e investigación en IA. Actualmente investigando aprendizaje por refuerzo e IA generativa.",
        ru: "Специализируюсь на продвинутом машинном обучении, глубоком обучении и исследованиях ИИ. В настоящее время провожу исследования в области обучения с подкреплением и генеративного ИИ.",
      },
      date: "09/2024 - 06/2026",
      icon: <FaUniversity />,
      tags: ["data-science", "machine-learning", "deep-learning", "ai-research"],
    },
    {
      id: "edu-1",
      title: "Bachelor of Science in Electrical Engineering",
      title_i18n: { en: "Bachelor of Science in Electrical Engineering", es: "Licenciatura en Ingeniería Eléctrica", ru: "Бакалавр наук по электротехнике" },
      institution: "Namal University",
      location: "Mianwali, Pakistan",
      description_i18n: {
        en: "Foundation in engineering principles with focus on electrical systems and technology. Graduated with strong analytical and problem-solving skills.",
        es: "Fundamentos en principios de ingeniería con enfoque en sistemas eléctricos y tecnología. Graduado con fuertes habilidades analíticas y de resolución de problemas.",
        ru: "Основы инженерных принципов с фокусом на электрические системы и технологии. Окончил с сильными аналитическими навыками и навыками решения проблем.",
      },
      date: "09/2018 - 06/2022",
      icon: <FaUniversity />,
      tags: ["electrical-engineering", "engineering", "problem-solving"],
    },
  ],

  keySkills: {
    en: [
      "Machine Learning & Deep Learning",
      "Reinforcement Learning & Generative AI",
      "Computer Vision & NLP",
      "Data Engineering & ETL",
      "Predictive Analytics & A/B Testing",
      "Python, TensorFlow, PyTorch",
      "Cloud Platforms (GCP, AWS)",
      "Big Data & Analytics",
    ],
    es: [
      "Aprendizaje Automático y Profundo",
      "Aprendizaje por Refuerzo e IA Generativa",
      "Visión por Computador y PLN",
      "Ingeniería de Datos y ETL",
      "Análisis Predictivo y Pruebas A/B",
      "Python, TensorFlow, PyTorch",
      "Plataformas en la Nube (GCP, AWS)",
      "Big Data y Analítica",
    ],
    ru: [
      "Машинное обучение и глубокое обучение",
      "Обучение с подкреплением и генеративный ИИ",
      "Компьютерное зрение и NLP",
      "Инженерия данных и ETL",
      "Прогнозная аналитика и A/B тестирование",
      "Python, TensorFlow, PyTorch",
      "Облачные платформы (GCP, AWS)",
      "Big Data и аналитика",
    ],
  },

  achievements: {
    en: [
      "Increased mobile game revenue by 2-3% through data-driven optimization",
      "Achieved 96.42% accuracy in medical image segmentation",
      "Developed real-time speaker feedback system using AI",
      "Built automated ETL pipelines reducing manual reporting time",
      "Published research on improved retinal vessel segmentation",
      "Certified in Machine Learning, NLP, and Data Analytics",
    ],
    es: [
      "Aumenté los ingresos de juegos móviles en 2-3% mediante optimización basada en datos",
      "Logré 96.42% de precisión en segmentación de imágenes médicas",
      "Desarrollé sistema de retroalimentación para oradores en tiempo real usando IA",
      "Construí pipelines ETL automatizados reduciendo tiempo de reportes manuales",
      "Publiqué investigación sobre segmentación mejorada de vasos retinianos",
      "Certificado en Aprendizaje Automático, PLN y Análisis de Datos",
    ],
    ru: [
      "Увеличил доход от мобильных игр на 2-3% благодаря оптимизации на основе данных",
      "Достиг 96.42% точности в сегментации медицинских изображений",
      "Разработал систему обратной связи для ораторов в реальном времени с использованием ИИ",
      "Создал автоматизированные ETL конвейеры, сократив время ручной отчетности",
      "Опубликовал исследование по улучшенной сегментации сосудов сетчатки",
      "Сертифицирован в области машинного обучения, NLP и анализа данных",
    ],
  },
};

export default homeConfig;
