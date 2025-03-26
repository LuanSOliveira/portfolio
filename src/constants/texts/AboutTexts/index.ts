import { TLanguage } from "@/shared/types";

const aboutText = {
  text1: {
    pt: "Sobre mim",
    en: "About Me",
  },
  text2: {
    pt: "Com um sólido conhecimento em uma variedade de tecnologias, estou constantemente buscando aprimorar minhas habilidades e adotar as melhores práticas do setor.",
    en: "With a solid knowledge of a variety of technologies, I am constantly striving to improve my skills and adopt industry best practices.",
  },
  text3: {
    pt: "Minha experiência se estende por várias áreas cruciais do desenvolvimento web, começando com a base sólida do HTML, CSS e SASS, que me permitem construir interfaces atraentes e responsivas. Com o Javascript e o Typescript, tenho a capacidade de criar interações dinâmicas e funcionais em meus projetos. Além disso, posso me utilizar da biblioteca React e dos frameworks Next.JS e Angular, que me permitem desenvolver aplicativos web robustos e escaláveis.",
    en: "My experience spans several key areas of web development, starting with a solid foundation in HTML, CSS, and SASS, allowing me to build attractive and responsive interfaces. With JavaScript and TypeScript, I can create dynamic and functional interactions in my projects. Additionally, I use the React library and the Next.js and Angular frameworks, which enable me to develop robust and scalable web applications.",
  },
  text4: {
    pt: "Tenho conhecimentos no uso de ferramentas como Jest para escrever testes unitários e tenho familiaridade em práticas de TDD (Test-Driven Development), o que me permite criar código mais robusto e confiável. Também sou familiarizado com a metodologia SCRUM, o que me permite colaborar efetivamente em equipes ágeis, cumprindo prazos e entregando produtos de alta qualidade.",
    en: "I have knowledge of tools like Jest for writing unit tests and am familiar with Test-Driven Development (TDD) practices, which allow me to create more robust and reliable code. I am also familiar with the SCRUM methodology, enabling me to collaborate effectively in agile teams, meet deadlines, and deliver high-quality products.",
  },
  text5: {
    pt: "Além de minha sólida formação técnica, trago consigo um histórico de pelo menos oito anos de experiência em análise de sistemas. Durante esse tempo, tive a oportunidade de trabalhar em uma variedade de projetos desafiadores, nos quais desenvolvi habilidades essenciais de análise e resolução de problemas. Minha expertise em entender as necessidades dos clientes, mapear processos, identificar requisitos e propor soluções eficientes tem sido fundamental para o sucesso dos projetos aos quais fui designado. Essa experiência em análise de sistemas me proporciona uma visão abrangente no desenvolvimento de aplicações web, garantindo que os produtos finais atendam não apenas aos requisitos técnicos, mas também às expectativas do usuário final.",
    en: "In addition to my solid technical background, I bring at least eight years of experience in systems analysis. During this time, I had the opportunity to work on a variety of challenging projects, where I developed essential analytical and problem-solving skills. My expertise in understanding client needs, mapping processes, identifying requirements, and proposing efficient solutions has been crucial to the success of the projects I have been assigned. This experience in systems analysis provides me with a broad perspective on web application development, ensuring that the final products meet both technical requirements and user expectations.",
  },
  text6: {
    pt: "Se você estiver procurando por um desenvolvedor altamente motivado e habilidoso, que possa trazer experiência em algumas das tecnologias citadas, não hesite em entrar em contato comigo.",
    en: "If you are looking for a highly motivated and skilled developer with experience in some of the mentioned technologies, do not hesitate to contact me.",
  },
  text7: {
    pt: "Minha Jornada",
    en: "My Journey",
  },
  text8: {
    pt: "2014 - O Primeiro Passo na Tecnologia",
    en: "2014 - The First Step into Technology",
  },
  text9: {
    pt: "Minha jornada na tecnologia começou em 2014, quando atuei como Analista de Sistemas. Nesse período, desenvolvi habilidades analíticas, compreensão de processos e aprimorei minha capacidade de resolver problemas complexos.",
    en: "My journey into technology began in 2014 when I worked as a Systems Analyst. During this period, I developed analytical skills, an understanding of processes, and enhanced my ability to solve complex problems.",
  },
  text10: {
    pt: "2020 - A Virada para o Desenvolvimento",
    en: "2020 - The Shift to Development",
  },
  text11: {
    pt: "Em 2020, decidi dar um novo rumo à minha carreira e mergulhei nos estudos na área de desenvolvimento de sistemas. Aprender novas linguagens, explorar frameworks modernos e construir aplicações se tornou minha paixão. Esse foi um momento de crescimento intenso e de descobertas sobre as possibilidades do desenvolvimento de sistemas.",
    en: "In 2020, I decided to take a new direction in my career and immersed myself in studying system development. Learning new languages, exploring modern frameworks, and building applications became my passion. This was a period of intense growth and discoveries about the possibilities of software development.",
  },
  text12: {
    pt: "2023 - Primeira Oportunidade como Desenvolvedor",
    en: "2023 - First Opportunity as a Developer",
  },
  text13: {
    pt: "Após anos de aprendizado e dedicação, em 2023 conquistei minha primeira vaga como Desenvolvedor Front-End. Foi um marco importante na minha trajetória, pois pude aplicar meus conhecimentos em projetos reais, colaborar com equipes multidisciplinares e evoluir constantemente na criação de interfaces intuitivas e performáticas.",
    en: "After years of learning and dedication, in 2023 I secured my first job as a Front-End Developer. It was a significant milestone in my career, as I was able to apply my knowledge in real projects, collaborate with multidisciplinary teams, and continuously evolve in creating intuitive and high-performance interfaces.",
  },
  text14: {
    pt: "Atualmente - Evolução Contínua",
    en: "Present - Continuous Evolution",
  },
  text15: {
    pt: "Hoje, atuo como Desenvolvedor Front-End, sempre buscando aprimorar minhas habilidades e explorar novas tecnologias. Meu objetivo é crescer constantemente na área, contribuindo para o desenvolvimento de soluções inovadoras e entregando experiências digitais de qualidade.",
    en: "Today, I work as a Front-End Developer, always seeking to improve my skills and explore new technologies. My goal is to continuously grow in the field, contribute to the development of innovative solutions, and deliver high-quality digital experiences.",
  },
};

type AboutText = keyof typeof aboutText;

export function ShowAboutText(language: TLanguage, text: AboutText): string {
  return aboutText[text][language] || "";
}
