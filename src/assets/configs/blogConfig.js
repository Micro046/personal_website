import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { SiMedium } from "react-icons/si";

const blogConfig = [
  {
    id: "blog-1",
    title: "Improved Retinal Vessel Segmentation using UNet",
    category: { en: "Deep Learning", es: "Aprendizaje profundo", ru: "Глубокое обучение" },
    description_i18n: {
      en: "A UNet-based approach with preprocessing and fusion to enhance retinal vessel segmentation, crucial for diabetic retinopathy detection.",
      es: "Un enfoque basado en UNet con preprocesamiento y fusión para mejorar la segmentación de vasos retinianos, crucial para la detección de retinopatía diabética.",
      ru: "Подход на основе UNet с предобработкой и слиянием для улучшения сегментации сосудов сетчатки, критически важный для обнаружения диабетической ретинопатии."
    },
    links: [
      {
        name: "article",
        url: "https://medium.com/@hassaniftikhar_84120/improved-retinal-vessel-segmentation-using-unet-7f83890713e6",
        icon: <SiMedium/>
      },
      {
        name: "repo",
        url: "https://github.com/Micro046/Retinal_Vessel_Segmentation",
        icon: <AiFillGithub/>
      }
    ],
    image: require("../../assets/images/blog-thumbnail.png"),
    target: "_blank",
    date: "2023-08-01"
  }
];

export default blogConfig;
