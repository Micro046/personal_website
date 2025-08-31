import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/Micro046",   // ✅ your GitHub
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/hassan-iftikhar-92449120b",  // ✅ your LinkedIn
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "https://medium.com/@hassaniftikhar_84120",  // ✅ your Medium
            className: "social-icon",
            target: "_blank",
            icon: <BsMedium size={50}/>
        }
    ]
}

export default footerConfig;
