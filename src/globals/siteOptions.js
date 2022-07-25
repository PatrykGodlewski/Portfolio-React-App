import GitHubLogo from "../images/GitHub-Mark.svg";
import BehanceLogo from "../images/Behance-Mark.svg";
import LinkedInLogo from "../images/LinkedIn-Mark.svg";
import PortfolioPNG from "../images/portfolio.png";
import TodoAppPNG from "../images/todoApp.png";
import SplitterAppPNG from "../images/splitterApp.png";

export const MENU_LINKS = [
  { link: "https://github.com/PatrykGodlewski", icon: GitHubLogo },
  { link: "https://www.behance.net/Godlew", icon: BehanceLogo },
  { link: "https://www.linkedin.com/in/patrykgodlewski/", icon: LinkedInLogo },
];

export const PROJECTS = [
  {
    title: "Portfolio - React Site",
    description: "Used: React.js, Three.js, Gsap.js, Styled Components",
    img: PortfolioPNG,
    link: "#",
  },
  {
    title: "Todo App - React Site",
    description: "Simple CRUD based app",
    img: TodoAppPNG,
    link: "https://patrykgodlewski.github.io/todo-app-frontend-mentor/",
  },
  {
    title: "Splitter - Calculator app",
    description: "My first project using javascript",
    img: SplitterAppPNG,
    link: "https://patrykgodlewski.github.io/tip-calculator-app/",
  },
];
