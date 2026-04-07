import cliente1 from "../assets/cliente1.png";
import cliente2 from "../assets/cliente2.png";
import cliente3 from "../assets/cliente3.png";
import cliente4 from "../assets/cliente4.png";
import cliente5 from "../assets/cliente5.png";
import type {
  ContactCard,
  Differential,
  NavItem,
  Review,
  Service,
} from "../types/content";

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const services: Service[] = [
  {
    title: "Implantodontia",
    description:
      "Especialidade da Dra. Miriam Aguiar, com planejamento cuidadoso para devolver função, estética e confiança ao sorriso.",
  },
  {
    title: "Avaliação personalizada",
    description:
      "Cada caso é analisado de forma individual para construir um plano de tratamento alinhado às necessidades do paciente.",
  },
  {
    title: "Odontologia clínica",
    description:
      "Atendimento completo com foco em saúde bucal, prevenção, diagnóstico preciso e acompanhamento próximo.",
  },
  {
    title: "Reabilitação oral",
    description:
      "Soluções pensadas para recuperar mastigação, conforto e harmonia do sorriso com qualidade técnica.",
  },
  {
    title: "Tratamentos com tecnologia",
    description:
      "O consultório conta com tecnologia de ponta para oferecer mais precisão, segurança e melhores resultados.",
  },
  {
    title: "Agendamento flexível",
    description:
      "A clínica organiza o atendimento para que você sorria no seu tempo, com praticidade e acolhimento.",
  },
];

export const differentials: Differential[] = [
  {
    title: "Mais de 30 anos de experiência",
    description:
      "A Dra. Miriam atua há mais de três décadas na odontologia, sempre em constante aprimoramento e evolução.",
  },
  {
    title: "Tecnologia de ponta",
    description:
      "Equipamentos modernos e avançados ajudam a entregar diagnósticos mais precisos e tratamentos de excelência.",
  },
  {
    title: "Localização de fácil acesso",
    description:
      "Consultório localizado nos Ingleses, no Norte da Ilha, em Florianópolis, com acesso prático para os pacientes.",
  },
];

export const reviews: Review[] = [
  {
    name: "Talita Matos",
    rating: "5.0",
    text: "Dentista precisa ser de confiança e a experiência tem que ser boa. A Miriam é maravilhosa nos detalhes e faz com que a experiência seja a melhor possível. Super recomendo!!",
    avatar: cliente1,
  },
  {
    name: "Francielli Soares",
    rating: "5.0",
    text: "Iniciei meu tratamento em Janeiro de 2026 e até o momento só tenho a agradecer o trabalho da Dra. Miriam. Impecável!",
    avatar: cliente2,
  },
  {
    name: "Rafael Aguirre",
    rating: "5.0",
    text: "Conheço a Dra. Miriam há bom tempo, sendo seu paciente e de sua equipe também, sempre muito atenciosos, após quase uma década fora, prestativos em manutenção e restaurações. Recomendo!!",
    avatar: cliente3,
  },
    {
    name: "Neysi Alvariza",
    rating: "5.0",
    text: "Atendimento MARAVILHOSO tanto na recepção como dentro do consultório. A Dra Miriam tem uma paciência de ouro e deixa seus pacientes a vontade e confiantes no atendimento. Minha filha adorou, pois ela estava muito nervosa e a Dra foi impecável.",
    avatar: cliente4,
  },
    {
    name: "Elaine Machado da Rosa",
    rating: "5.0",
    text: "Admiro a profissional atenciosa, dedicada, competente que é a Dra Miriam Aguiar. O bom atendimento ali, começa na recepção!! Tenho certeza que toda a equipe presta um bom serviço. Agradeço e super Indico. Ambiente gostoso. Minha prima,levou de emergência na temporada,a filha criança de 5 anos,e foi super tranquilo,a Dra passa confiança, segurança,Tranquilidade, acalma o medo normal que até alguns adultos tem em relação a Dentista. PARABÉNS.",
    avatar: cliente5,
  },
];

export const contactCards: ContactCard[] = [
  {
    title: "WhatsApp",
    detail: "(48) 3369-3265",
    helper: "Canal para agendamento e informações sobre consultas.",
  },
  {
    title: "Horário de atendimento",
    detail: "Segunda a sexta, 09h às 12h e 13h30 às 17h30",
    helper: "Atendimento com agendamento no consultório da clínica.",
  },
];
