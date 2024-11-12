const data = {
  en: {
    name: "Özge",
    birthDate: "18.06.1995",
    residence: "Debrecen, Hungary",
    education: "ITU Meteorological Eng., 2018",
    role: "Frontend, UI",
    gitHub: "https://github.com/ozgedogru",
    linkedin: "https://www.linkedin.com/in/%C3%B6zge-karademir/",
    aboutMeText:
      "During three years, I gained experience in engineering and management in the aviation sector. This enabled me to significantly enhance my skills in analytical thinking, adaptation, and solution-oriented approaches. My curiosity about software and my interest in technology have led me to embark on a new career journey. After undergoing an intensive six-month software training, I decided to focus my career as a web developer. With my ability to adapt to teamwork and effective communication skills, I believe I will thrive in a dynamic work environment.",
    skills: [
      { name: "JAVASCRIPT", src: "./icons/js-logo.png", alt: "JavaScript" },
      { name: "REACT", src: "./icons/react-logo.png", alt: "React" },
      { name: "REDUX", src: "./icons/redux-logo.png", alt: "Redux" },
      {
        name: "VSCODE",
        src: "./icons/vscode-logo.png",
        alt: "Visual Studio Code",
      },
      { name: "FIGMA", src: "./icons/figma-logo.png", alt: "Figma" },
      {
        name: "SPRING BOOT",
        src: "./icons/spring-logo.png",
        alt: "Spring Boot",
      },
      { name: "JAVA", src: "./icons/java-logo.png", alt: "Java" },
      {
        name: "POSTGRESQL",
        src: "./icons/postgresql-logo.png",
        alt: "PostgreSQL",
      },
    ],

    projects: {
      project1: {
        name: "E-commerce Project",
        text: "This e-commerce project provides a dynamic platform where users can register as either a store or a customer. Stores can showcase their products for sale, while customers can browse, add items to their wishlist and cart, and make purchases. Users have the capability to categorize products and store their payment and address information securely within their accounts.",
        hashtag: ["react", "redux", "java", "spring boot", "postgresql"],
        linkGitHub: "https://github.com/ozgedogru/e-commerce",
        linkApp: "https://shop-swiftly-five.vercel.app/",
      },
      project2: {
        name: "POS App for Coffee Houses",
        text: "Designed to streamline operations for coffee houses and similar businesses, this POS app simplifies order management and sales tracking. Built with React, JavaScript, and Express, it features a responsive interface with Tailwind CSS and Ant Design, while Redux Toolkit ensures smooth state management for optimal performance.",
        hashtag: [
          "react",
          "express",
          "redux toolkit",
          "tailwind css",
          "ant design",
        ],
        linkGitHub: "https://github.com/ozgedogru/pos-app",
        linkApp: "https://pos-app-2zsa.onrender.com/",
      },
    },
  },
  tr: {
    name: "Özge",
    birthDate: "18.06.1995",
    residence: "Debrecen, Macaristan",
    education: "İTÜ Meteoroloji Müh., 2018",
    role: "Frontend, UI",
    gitHub: "https://github.com/ozgedogru",
    linkedin: "https://www.linkedin.com/in/%C3%B6zge-karademir/",
    aboutMeText:
      "Üç yıl boyunca, havacılık sektöründe mühendislik ve yöneticilik yaparak deneyim kazandım. Bu sayede analitik düşünme, adaptasyon ve çözüm odaklı yaklaşım konusunda yeteneklerimi önemli ölçüde geliştirdim. Yazılıma olan merakım ve teknolojiye duyduğum ilgi beni yeni bir kariyer yolculuğuna yönlendirdi. Altı ay süren yoğun bir yazılım eğitimi aldıktan sonra web geliştirici olarak kariyerime odaklanmaya karar verdim. Takım çalışmasına uyum sağlama ve etkili iletişim becerilerimle, dinamik bir çalışma ortamında başarılı olacağıma inanıyorum.",
    projects: {
      project1: {
        name: "E-Ticaret Projesi",
        text: "Bu proje, kullanıcıların mağaza veya müşteri olarak kaydolabileceği dinamik bir platform sunar. Mağazalar, ürünlerini satışa sunarken, müşteriler ürünleri farklı filtrelerle arayabilir. Kullanıcılar ödeme ve adres bilgilerini hesaplarında saklayabilir ve alışveriş deneyimlerini kolayca yönetebilirler.",
        hashtag: ["react", "redux", "java", "spring boot", "postgresql"],
        linkGitHub: "https://github.com/ozgedogru/e-commerce",
        linkApp: "https://shop-swiftly-five.vercel.app/",
      },
      project2: {
        name: "POS Uygulaması",
        text: "Kahve dükkanları ve benzeri işletmeler için operasyonları kolaylaştırmak amacıyla tasarlanmış bu POS uygulaması, sipariş yönetimini ve satış takibini basitleştirir. React ve Express ile geliştirilmiş olan uygulama, Tailwind CSS ve Ant Design ile duyarlı bir arayüz sunar.",
        hashtag: [
          "react",
          "express",
          "redux toolkit",
          "tailwind css",
          "ant design",
        ],
        linkGitHub: "https://github.com/ozgedogru/pos-app",
        linkApp: "https://pos-app-2zsa.onrender.com/",
      },
    },
  },
};

export default data;
