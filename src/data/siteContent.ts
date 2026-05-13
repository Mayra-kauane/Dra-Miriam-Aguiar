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
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Quem Somos", href: "#equipe" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const services: Service[] = [
  {
    title: "Implantes Dentários",
    description:
      "Recupera dentes perdidos com função, estética e segurança de forma duradoura.",
  },
  {
    title: "Clareamento Dental / Facetas",
    description:
      "Sorriso mais branco e alinhado, com estética refinada e resultado natural.",
  },
  {
    title: "Prótese / Restaurações Dentárias",
    description:
      "Restaura dentes danificados, devolvendo função e estética com resistência.",
  },
  {
    title: "Aparelhos Ortodônticos/invisalign",
    description:
      "Alinha os dentes com conforto, discrição e praticidade no tratamento.",
  },
  {
    title: "Tratamento de Canal",
    description: "Remove infecção interna, alivia a dor e preserva o dente.",
  },
  {
    title: "Harmonização Facial",
    description:
      "Valoriza os traços do rosto, com equilíbrio e aparência natural.",
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
    text: "Iniciei meu tratamento em janeiro de 2026 e até o momento só tenho a agradecer o trabalho da Dra. Miriam. Impecável!",
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
    text: "Atendimento maravilhoso tanto na recepção como dentro do consultório. A Dra. Miriam tem uma paciência de ouro e deixa seus pacientes à vontade e confiantes no atendimento. Minha filha adorou, pois ela estava muito nervosa e a Dra. foi impecável.",
    avatar: cliente4,
  },
  {
    name: "Elaine Machado da Rosa",
    rating: "5.0",
    text: "Admiro a profissional atenciosa, dedicada e competente que é a Dra. Miriam Aguiar. O bom atendimento começa na recepção. Tenho certeza que toda a equipe presta um ótimo serviço. A Dra. passa confiança, segurança e tranquilidade.",
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
