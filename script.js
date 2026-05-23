const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const languageLabel = document.querySelector(".translate-label");

const translations = {
  en: {
    nav_work: "Work",
    nav_about: "About",
    nav_contact: "Contact",

    hero_title: "HI, I AM <br />JOREL REIS.",
    hero_description:
      "I create web interfaces, automations and digital solutions using HTML, CSS, JavaScript, React, Node.js and Python.",
    contact_me: "Contact Me",

    projects_title: "FEATURED PROJECTS",
    projects_description:
      "Here are some projects that represent my journey in web development, automation and interactive digital experiences.",

    technologies_label: "Technologies",
    year_label: "Year",
    role_label: "Role",
    github_button: "View on GitHub",

    about_title: "ABOUT ME",
    about_headline:
      "I am a developer based in Portugal, focused on building clean web interfaces, automations and practical digital solutions.",
    about_description:
      "My background combines technology, process analysis and creative development. I have experience working with AI tools, automations, web projects and interactive experiences with UEFN. Today, I am focused on improving my skills with HTML, CSS, JavaScript, React, Node.js and Python, building real projects that solve practical problems and help me grow as a developer.",
    linkedin_button: "View LinkedIn",

    contact_title: "LET’S CONNECT",
    form_name: "Name",
    form_email: "Email",
    form_subject: "Subject",
    form_message: "Message",
    form_submit: "Submit",

    form_alert: "Thank you for your message! This form will be connected later.",
    project_1_title: "Shopping Cart & Checkout System",
project_1_description:
  "A full-stack shopping cart application built to simulate an online store experience, including product listing, cart management, item quantity control and a checkout flow with real-time payment simulation.",

project_2_title: "AI Chat Application",
project_2_description:
  "An AI-powered chat application that allows users to send questions and receive dynamic responses through an OpenAI API integration, using a modular frontend and backend structure.",

project_3_title: "Pokedex Web App",
project_3_description:
  "A responsive front-end application that consumes the PokéAPI to display Pokémon data, including images, types, stats, pagination and search by name or ID.",

contact_email_text: "Say hello at",
nav_certificates: "Certificates",

certificates_title: "CERTIFICATES",
certificates_description:
  "Here are some certifications and courses I have completed during my development journey.",
logic_category: "LOGIC",
frontend_category: "FRONT-END",
backend_category: "BACK-END",
ai_category: "AI",

  },

  pt: {
    nav_work: "Projetos",
    nav_about: "Sobre",
    nav_contact: "Contato",

    hero_title: "OLÁ, EU SOU <br />JOREL REIS.",
    hero_description:
      "Crio interfaces web, automações e soluções digitais utilizando HTML, CSS, JavaScript, React, Node.js e Python.",
    contact_me: "Fale Comigo",

    projects_title: "PROJETOS EM DESTAQUE",
    projects_description:
      "Aqui estão alguns projetos que representam minha jornada em desenvolvimento web, automação e experiências digitais interativas.",

    technologies_label: "Tecnologias",
    year_label: "Ano",
    role_label: "Função",
    github_button: "Ver no GitHub",

    about_title: "SOBRE MIM",
    about_headline:
      "Sou um desenvolvedor baseado em Portugal, focado em criar interfaces web limpas, automações e soluções digitais práticas.",
    about_description:
      "Minha trajetória combina tecnologia, análise de processos e desenvolvimento criativo. Tenho experiência com ferramentas de IA, automações, projetos web e experiências interativas com UEFN. Atualmente, estou focado em aprimorar minhas habilidades com HTML, CSS, JavaScript, React, Node.js e Python, criando projetos reais que resolvem problemas práticos e me ajudam a evoluir como desenvolvedor.",
    linkedin_button: "Ver LinkedIn",

    contact_title: "VAMOS CONVERSAR",
    form_name: "Nome",
    form_email: "E-mail",
    form_subject: "Assunto",
    form_message: "Mensagem",
    form_submit: "Enviar",

    form_alert: "Obrigado pela mensagem! Este formulário será conectado em breve.",

    project_1_title: "Sistema de Carrinho e Checkout",
project_1_description:
  "Uma aplicação full-stack de carrinho de compras criada para simular a experiência de uma loja online, incluindo listagem de produtos, gestão do carrinho, controle de quantidade dos itens e fluxo de checkout com simulação de pagamento em tempo real.",

project_2_title: "Aplicação de Chat com IA",
project_2_description:
  "Uma aplicação de chat com inteligência artificial que permite ao usuário enviar perguntas e receber respostas dinâmicas por meio de uma integração com a API da OpenAI, utilizando uma estrutura modular de frontend e backend.",

project_3_title: "Aplicação Web Pokedex",
project_3_description:
  "Uma aplicação front-end responsiva que consome a PokéAPI para exibir dados dos Pokémon, incluindo imagens, tipos, estatísticas, paginação e busca por nome ou ID.",

contact_email_text: "Entre em contato pelo e-mail",
nav_certificates: "Certificados",

certificates_title: "CERTIFICADOS",
certificates_description:
  "Aqui estão alguns certificados e cursos que concluí durante minha jornada de desenvolvimento.",
logic_category: "LÓGICA",
frontend_category: "FRONT-END",
backend_category: "BACK-END",
ai_category: "IA",

  },
};

let currentLanguage = localStorage.getItem("language") || "en";
let currentTheme = localStorage.getItem("theme") || "dark";

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  localStorage.setItem("theme", theme);
  themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
}

function applyLanguage(language) {
  const selectedTranslations = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (selectedTranslations[key]) {
      element.textContent = selectedTranslations[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");

    if (selectedTranslations[key]) {
      element.innerHTML = selectedTranslations[key];
    }
  });

  languageLabel.textContent = language === "en" ? "PT" : "EN";

  localStorage.setItem("language", language);
  document.documentElement.lang = language;
}

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
});

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "pt" : "en";
  applyLanguage(currentLanguage);
});


applyTheme(currentTheme);
applyLanguage(currentLanguage);