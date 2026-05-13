import type {
  ContactCard,
  Differential,
  NavItem,
  Service,
} from "../types/content";

export const navItems: NavItem[] = [
  { label: "Início", href: "/inicio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Tratamentos", href: "/tratamentos" },
  { label: "Quem Somos", href: "/equipe" },
  { label: "Diferenciais", href: "/diferenciais" },
  { label: "Contato", href: "/contato" },
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
    title: "Aparelhos Ortodônticos / Invisalign",
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
