import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import React from 'react';

const projectConfig = [
  {
    id: "project-5",
    title: "Speaker Feedback System",
    category: { en: "AI System", es: "Sistema de IA", ru: "ИИ система" },
    description_i18n: {
      en: "ML system analyzing presentation videos for speech, clarity, tone, gaze, emotions, and attire, providing real-time speaker feedback.",
      es: "Sistema de ML que analiza videos de presentaciones para evaluar claridad, tono, mirada, emociones y vestimenta, brindando retroalimentación en tiempo real.",
      ru: "ML система, анализирующая видео презентаций для оценки речи, ясности, тона, взгляда, эмоций и одежды, предоставляющая обратную связь оратору в реальном времени."
    },
    details: {
      en: "Developed at Sberbank AI, this system analyzes recorded speeches and presentations. Using audio and video processing, it measures speech clarity, tone, gaze direction, facial emotion recognition, and attire analysis. It provides automated coaching feedback in real time to help speakers improve public speaking skills. The system was deployed internally and presented as an innovative AI solution for training and HR departments.",
      es: "Desarrollado en Sberbank AI, este sistema analiza discursos y presentaciones grabadas. Usando procesamiento de audio y video, mide claridad del habla, tono, dirección de la mirada, reconocimiento de emociones faciales y análisis de vestimenta. Proporciona retroalimentación automatizada en tiempo real para ayudar a los oradores a mejorar sus habilidades de comunicación.",
      ru: "Разработано в Sberbank AI, эта система анализирует записанные выступления и презентации. Используя обработку аудио и видео, она измеряет ясность речи, тон, направление взгляда, распознавание мимических эмоций и анализ одежды. Предоставляет автоматизированную обратную связь в реальном времени для помощи ораторам в улучшении навыков публичных выступлений."
    },
    links: [
      { name: "repo", url: "https://github.com/Micro046/Speaker_Feedback_System", icon: <AiFillGithub/> }
    ],
    image: require("../../assets/images/project1.png"),
    target: "_blank"
  },
  {
    id: "project-4",
    title: "Retinal Vessel Segmentation",
    category: { en: "Deep Learning", es: "Aprendizaje Profundo", ru: "Глубокое обучение" },
    description_i18n: {
      en: "UNet-based segmentation model with preprocessing & fusion to enhance thin vessel detection for early diabetic retinopathy diagnosis.",
      es: "Modelo de segmentación basado en UNet con preprocesamiento y fusión para mejorar la detección de vasos finos en la retinopatía diabética temprana.",
      ru: "Модель сегментации на основе UNet с предобработкой и слиянием для улучшения обнаружения тонких сосудов при ранней диагностике диабетической ретинопатии."
    },
    details: {
      en: "This project applies deep learning for medical imaging. Using UNet with preprocessing steps (CLAHE, vessel enhancement filtering), the model achieved high accuracy in segmenting thin retinal vessels crucial for early diabetic retinopathy detection. The work included experimentation with loss functions and fusion techniques to boost thin vessel detection metrics.",
      es: "Este proyecto aplica deep learning para imágenes médicas. Usando UNet con pasos de preprocesamiento (CLAHE, filtros de realce de vasos), el modelo logró alta precisión en segmentar vasos retinianos delgados, cruciales para la detección temprana de retinopatía diabética.",
      ru: "Этот проект применяет глубокое обучение для медицинской визуализации. Используя UNet с шагами предобработки (CLAHE, фильтрация усиления сосудов), модель достигла высокой точности в сегментации тонких сосудов сетчатки, критически важных для раннего обнаружения диабетической ретинопатии."
    },
    links: [
      { name: "article", url: "https://medium.com/@hassaniftikhar_84120/improved-retinal-vessel-segmentation-using-unet-7f83890713e6", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/Micro046/Retinal_Vessel_Segmentation", icon: <AiFillGithub/> }
    ],
    image: require("../../assets/images/project2.png"),
    target: "_blank"
  },
  {
    id: "project-3",
    title: "A/B Testing & User Segmentation for Mobile Games",
    category: { en: "Data Science", es: "Ciencia de Datos", ru: "Наука о данных" },
    description_i18n: {
      en: "Performed RFM analysis & A/B testing on mobile games (X2, 2248) to optimize monetization & player retention.",
      es: "Análisis RFM y pruebas A/B en juegos móviles (X2, 2248) para optimizar monetización y retención de jugadores.",
      ru: "Провел RFM анализ и A/B тестирование мобильных игр (X2, 2248) для оптимизации монетизации и удержания игроков."
    },
    details: {
      en: "Worked at Inspired Square to analyze millions of player activity events. Applied Recency-Frequency-Monetary (RFM) segmentation and designed controlled A/B experiments to measure retention and monetization improvements. The insights boosted game revenue by ~2–3% and optimized in-app purchase offers for different user cohorts.",
      es: "En Inspired Square analicé millones de eventos de actividad de jugadores. Apliqué segmentación RFM y diseñé experimentos A/B para medir mejoras en retención y monetización. Los resultados aumentaron los ingresos del juego en ~2–3%.",
      ru: "Работал в Inspired Square, анализируя миллионы событий активности игроков. Применил RFM сегментацию и спроектировал контролируемые A/B эксперименты для измерения улучшений в удержании и монетизации. Результаты увеличили доход от игр на ~2-3%."
    },
    links: [],
    image: require("../../assets/images/project3.png"),
    target: "_blank"
  },
  {
    id: "project-2",
    title: "ETL Pipeline for Mobile Analytics",
    category: { en: "Data Engineering", es: "Ingeniería de Datos", ru: "Инженерия данных" },
    description_i18n: {
      en: "Automated ETL pipelines using Talend, GCP, and BigQuery to integrate user & monetization data from APIs like AppsFlyer and AppLovin.",
      es: "Pipelines ETL automatizados con Talend, GCP y BigQuery para integrar datos de usuarios y monetización desde APIs como AppsFlyer y AppLovin.",
      ru: "Автоматизированные ETL конвейеры с использованием Talend, GCP и BigQuery для интеграции данных пользователей и монетизации из API, таких как AppsFlyer и AppLovin."
    },
    details: {
      en: "Built automated ETL pipelines at Inspired Square to handle mobile game analytics data. Integrated APIs such as AppsFlyer, AppLovin, and Google Play Billing. Used Talend for data orchestration and Google BigQuery for storage/analysis. Designed dashboards in Tableau and Data Studio to monitor player KPIs and monetization flows.",
      es: "Construí pipelines ETL automatizados en Inspired Square para manejar datos analíticos de juegos móviles. Integré APIs como AppsFlyer, AppLovin y Google Play Billing. Usé Talend para orquestación de datos y Google BigQuery para almacenamiento/análisis.",
      ru: "Создал автоматизированные ETL конвейеры в Inspired Square для обработки аналитических данных мобильных игр. Интегрировал API, такие как AppsFlyer, AppLovin и Google Play Billing. Использовал Talend для оркестрации данных и Google BigQuery для хранения/анализа."
    },
    links: [],
    image: require("../../assets/images/project4.jpg"),
    target: "_blank"
  },
  {
    id: "project-1",
    title: "User Lifetime Prediction & Segmentation",
    category: { en: "Machine Learning", es: "Aprendizaje Automático", ru: "Машинное обучение" },
    description_i18n: {
      en: "Predicted 90-day player lifetime value from first 7 days of activity to identify golden users for targeted offers & personalization.",
      es: "Predijo el valor de vida de 90 días de un jugador desde sus primeros 7 días de actividad para identificar usuarios valiosos y personalizar ofertas.",
      ru: "Предсказал 90-дневную ценность жизненного цикла игрока на основе первых 7 дней активности для выявления ценных пользователей для целевых предложений и персонализации."
    },
    details: {
      en: "Developed a player lifetime value (LTV) model using supervised ML at Inspired Square. Input features were extracted from the first 7 days of gameplay. Model predictions allowed identifying 'golden users' early and tailoring personalized offers to maximize retention and revenue.",
      es: "Desarrollé un modelo de valor de vida (LTV) de jugadores usando ML supervisado en Inspired Square. Se usaron como entrada las primeras 7 días de actividad. El modelo permitió identificar 'usuarios valiosos' temprano y personalizar ofertas.",
      ru: "Разработал модель ценности жизненного цикла игрока (LTV) с использованием контролируемого ML в Inspired Square. Входные признаки извлекались из первых 7 дней игрового процесса. Предсказания модели позволили рано выявлять 'золотых пользователей' и адаптировать персонализированные предложения."
    },
    links: [],
    image: require("../../assets/images/project5.jpeg"),
    target: "_blank"
  }
];

export default projectConfig;
