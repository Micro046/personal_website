import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiOpencv,
  SiMysql,
  SiGooglecloud,
  SiTableau,
  SiReact,
  SiDocker,
  SiGithub,
  SiJupyter,
  SiNodedotjs
} from "react-icons/si";
import { FaChartLine, FaProjectDiagram, FaCloud, FaGitAlt, FaSquareRootAlt } from "react-icons/fa";
import { GiArtificialIntelligence, GiNetworkBars } from "react-icons/gi";
import { MdOutlineTimeline } from "react-icons/md";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import React from "react";

const ICON_SIZE = 50;

const skillsConfig = {
  // ✅ Core AI & ML Skills
  coreSkills: [
    { 
      id: "skills-ml-ai", 
      icon: <GiArtificialIntelligence size={ICON_SIZE} />, 
      text: "Machine Learning / AI", 
      category: "AI & ML", 
      proficiency: "Expert" 
    },
    { 
      id: "skills-ml-supervised", 
      icon: <FaProjectDiagram size={ICON_SIZE} />, 
      text: "Supervised Learning", 
      category: "AI & ML" 
    },
    { 
      id: "skills-ml-unsupervised", 
      icon: <FaProjectDiagram size={ICON_SIZE} />, 
      text: "Unsupervised Learning", 
      category: "AI & ML" 
    },
    { 
      id: "skills-ml-rl", 
      icon: <GiNetworkBars size={ICON_SIZE} />, 
      text: "Reinforcement Learning", 
      category: "AI & ML", 
      proficiency: "Advanced" 
    },
    { 
      id: "skills-ml-generative", 
      icon: <GiArtificialIntelligence size={ICON_SIZE} />, 
      text: "Generative AI", 
      category: "AI & ML", 
      proficiency: "Advanced" 
    },
    { 
      id: "skills-ml-dl", 
      icon: <GiArtificialIntelligence size={ICON_SIZE} />, 
      text: "Deep Learning", 
      category: "AI & ML", 
      proficiency: "Expert" 
    }
  ],

  // ✅ Data Analysis & Visualization
  dataSkills: [
    { 
      id: "skills-stats", 
      icon: <MdOutlineTimeline size={ICON_SIZE} />, 
      text: "Statistics", 
      category: "Data Science" 
    },
    { 
      id: "skills-abtesting", 
      icon: <MdOutlineTimeline size={ICON_SIZE} />, 
      text: "A/B Testing", 
      category: "Data Science" 
    },
    { 
      id: "skills-pca", 
      icon: <MdOutlineTimeline size={ICON_SIZE} />, 
      text: "PCA", 
      category: "Data Science" 
    },
    { 
      id: "skills-bayes", 
      icon: <MdOutlineTimeline size={ICON_SIZE} />, 
      text: "Bayesian Methods", 
      category: "Data Science" 
    },
    { 
      id: "skills-timeseries", 
      icon: <MdOutlineTimeline size={ICON_SIZE} />, 
      text: "Time Series", 
      category: "Data Science" 
    },
    { 
      id: "skills-pandas", 
      icon: <SiPandas size={ICON_SIZE} />, 
      text: "Pandas", 
      category: "Data Analysis" 
    },
    { 
      id: "skills-numpy", 
      icon: <SiNumpy size={ICON_SIZE} />, 
      text: "NumPy", 
      category: "Data Analysis" 
    },
    { 
      id: "skills-matplotlib", 
      icon: <FaChartLine size={ICON_SIZE} />, 
      text: "Matplotlib", 
      category: "Visualization" 
    },
    { 
      id: "skills-seaborn", 
      icon: <FaChartLine size={ICON_SIZE} />, 
      text: "Seaborn", 
      category: "Visualization" 
    },
    { 
      id: "skills-tableau", 
      icon: <SiTableau size={ICON_SIZE} />, 
      text: "Tableau", 
      category: "Business Intelligence" 
    },
    { 
      id: "skills-datastudio", 
      icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, 
      text: "Google Data Studio", 
      category: "Business Intelligence" 
    }
  ],

  // ✅ Cloud & DevOps
  cloudSkills: [
    { 
      id: "skills-gcp", 
      icon: <SiGooglecloud size={ICON_SIZE} />, 
      text: "Google Cloud (GCP)", 
      category: "Cloud", 
      proficiency: "Advanced" 
    },
    { 
      id: "skills-vertex", 
      icon: <FaCloud size={ICON_SIZE} />, 
      text: "Vertex AI / Cloud Run", 
      category: "Cloud AI", 
      proficiency: "Advanced" 
    },
    { 
      id: "skills-aws", 
      icon: <FaCloud size={ICON_SIZE} />, 
      text: "AWS SageMaker", 
      category: "Cloud", 
      proficiency: "Intermediate" 
    },
    { 
      id: "skills-docker", 
      icon: <SiDocker size={ICON_SIZE} />, 
      text: "Docker", 
      category: "DevOps", 
      proficiency: "Intermediate" 
    },
    { 
      id: "skills-cron", 
      icon: <FaProjectDiagram size={ICON_SIZE} />, 
      text: "Cron Jobs", 
      category: "DevOps" 
    }
  ],

  // ✅ Programming & Development
  programmingSkills: [
    { 
      id: "skills-prog-python", 
      icon: <SiPython size={ICON_SIZE} />, 
      text: "Python", 
      category: "Programming", 
      proficiency: "Expert" 
    },
    { 
      id: "skills-prog-sklearn", 
      icon: <SiScikitlearn size={ICON_SIZE} />, 
      text: "Scikit-learn", 
      category: "Programming", 
      proficiency: "Advanced" 
    },
    { 
      id: "skills-prog-tf", 
      icon: <SiTensorflow size={ICON_SIZE} />, 
      text: "TensorFlow", 
      category: "Deep Learning", 
      proficiency: "Advanced" 
    },
    { 
      id: "skills-prog-pytorch", 
      icon: <SiPytorch size={ICON_SIZE} />, 
      text: "PyTorch", 
      category: "Deep Learning", 
      proficiency: "Advanced" 
    },
    { 
      id: "skills-prog-keras", 
      icon: <SiKeras size={ICON_SIZE} />, 
      text: "Keras", 
      category: "Deep Learning" 
    },
    { 
      id: "skills-prog-scipy", 
      icon: <FaSquareRootAlt size={ICON_SIZE} />, 
      text: "SciPy", 
      category: "Programming" 
    },
    { 
      id: "skills-prog-opencv", 
      icon: <SiOpencv size={ICON_SIZE} />, 
      text: "OpenCV", 
      category: "Computer Vision" 
    },
    { 
      id: "skills-prog-matlab", 
      icon: <FaSquareRootAlt size={ICON_SIZE} />, 
      text: "MATLAB", 
      category: "Programming" 
    },
    { 
      id: "skills-prog-cpp", 
      icon: <FaSquareRootAlt size={ICON_SIZE} />, 
      text: "C++", 
      category: "Programming" 
    },
    { 
      id: "skills-prog-react", 
      icon: <SiReact size={ICON_SIZE} />, 
      text: "React", 
      category: "Web Development" 
    },
    { 
      id: "skills-prog-node", 
      icon: <SiNodedotjs size={ICON_SIZE} />, 
      text: "Node.js", 
      category: "Web Development" 
    }
  ],

  // ✅ Databases & Warehousing
  databaseSkills: [
    { 
      id: "skills-db-bigquery", 
      icon: <SiGooglecloud size={ICON_SIZE} />, 
      text: "Google BigQuery", 
      category: "Data Warehouse", 
      proficiency: "Advanced" 
    },
    { 
      id: "skills-db-mysql", 
      icon: <SiMysql size={ICON_SIZE} />, 
      text: "MySQL / Workbench", 
      category: "Database" 
    },
    { 
      id: "skills-db-etl", 
      icon: <FaProjectDiagram size={ICON_SIZE} />, 
      text: "ETL Pipelines", 
      category: "Data Engineering" 
    },
    { 
      id: "skills-db-talend", 
      icon: <FaProjectDiagram size={ICON_SIZE} />, 
      text: "Talend", 
      category: "Data Engineering" 
    }
  ],

  // ✅ Workflow & Tools
  toolSkills: [
    { 
      id: "skills-git", 
      icon: <FaGitAlt size={ICON_SIZE} />, 
      text: "Git", 
      category: "Version Control" 
    },
    { 
      id: "skills-github", 
      icon: <SiGithub size={ICON_SIZE} />, 
      text: "GitHub", 
      category: "Version Control" 
    },
    { 
      id: "skills-jupyter", 
      icon: <SiJupyter size={ICON_SIZE} />, 
      text: "Jupyter", 
      category: "Development" 
    }
  ]
};

export default skillsConfig;
