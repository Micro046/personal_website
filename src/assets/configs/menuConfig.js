import React from "react";
import { AiFillCode, AiFillHome, AiOutlineGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { BiBot } from "react-icons/bi";  // chatbot icon

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      title_i18n: { en: "Home", es: "Inicio", ru: "Главная" },
      path: "/",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      title_i18n: { en: "Projects", es: "Proyectos", ru: "Проекты" },
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Blogs",
      title_i18n: { en: "Blogs", es: "Blog", ru: "Блог" },
      path: "/blogs",
      icon: <BsMedium size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Skills",
      title_i18n: { en: "Skills", es: "Habilidades", ru: "Навыки" },
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-4",
      title: "Chatbot",
      title_i18n: { en: "Chatbot", es: "Chatbot", ru: "Чат-бот" },
      path: "/chatbot",   // we'll link this to a chatbot page/section
      icon: <BiBot size={35} />,
      className: "nav-text",
    },
  ],
};

export default menuConfig;
