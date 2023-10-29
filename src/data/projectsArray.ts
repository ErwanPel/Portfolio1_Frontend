import vinted from "../../public/vinted.png";
import marvel from "../../public/marvel.png";
import giveMovies from "../../public/giveMovies.png";
import snake from "../../public/snakeVsEvilSnake.png";
import tailwind from "../../public/tailwind.webp";
import typescript from "../../public/Typescript.webp";
import python from "../../public/Python.webp";
import react from "../../public/react.webp";
import sass from "../../public/sass.webp";
import nodeJs from "../../public/nodeJs.webp";
import mongoDB from "../../public/mongoDB.webp";
import pygame from "../../public/pygame.webp";

type TGit = {
  link: string;
  type: "back-end" | "front-end";
};

type TStacks = {
  source: string;
  alt: string;
  color: string;
  name: string;
};

export type TProjects = {
  name: string;
  id: number;
  picture: string;
  urlLink: string;
  github: TGit[];
  description: string;
  stacks: TStacks[];
};

export const arrayProjects: TProjects[] = [
  {
    name: "Vinted",

    id: 0,
    picture: vinted,
    urlLink: "https://vinted-front-exercice.netlify.app",
    github: [
      { link: "https://github.com/ErwanPel/vinted-project", type: "back-end" },
      {
        link: "https://github.com/ErwanPel/Vinted-frontend",
        type: "front-end",
      },
    ],
    description:
      "Ce projet est une réplique d'un site e-commerce Vinted. Une fois authentifié, l'utilisateur peut publier, modifier, supprimer une de ses offres. L'utilisateur peut également consulté l'ensemble de ses ventes et de ses achats. L'API utilisé dans le cadre de l'achat d'un produit est Stripe.  ",
    stacks: [
      {
        source: react,
        alt: "logo de React",
        color: "bg-cyan-200",
        name: "React",
      },
      {
        source: nodeJs,
        alt: "Logo de Node.js",
        color: "bg-green-500",
        name: "Node.js",
      },
      {
        source: mongoDB,
        alt: "logo de MongoDB",
        color: "bg-yellow-600",
        name: "MongoDB",
      },
    ],
  },
  {
    name: "Marvel",

    id: 1,
    picture: marvel,
    urlLink: "https://marvel-scss.netlify.app",
    github: [
      { link: "https://github.com/ErwanPel/Marvel-backend", type: "back-end" },
      {
        link: "https://github.com/ErwanPel/Marvel-frontend-SASS",
        type: "front-end",
      },
    ],
    description:
      "Ce projet permet de s'informer sur des personnages et des comics de l'univers Marvel. Le système de recherche utilise l'auto-complétion pour faciliter la recherche des utilisateurs. Une fois authentifié, l'utilisateur peut mettre des personnages ou des comics en favoris et les consulter.",
    stacks: [
      {
        source: react,
        alt: "logo de React",
        color: "bg-cyan-200",
        name: "React",
      },
      {
        source: sass,
        alt: "logo de Sass",
        color: "bg-pink-400",
        name: "Sass",
      },
      {
        source: nodeJs,
        alt: "Logo de Node.js",
        color: "bg-green-500",
        name: "Node.js",
      },
      {
        source: mongoDB,
        alt: "logo de MongoDB",
        color: "bg-yellow-600",
        name: "MongoDB",
      },
    ],
  },
  {
    name: "GiveMovies",

    id: 2,
    picture: giveMovies,
    urlLink: "",
    github: [
      {
        link: "https://github.com/ErwanPel/Backend_Movies_Typescript",
        type: "back-end",
      },
      {
        link: "https://github.com/ErwanPel/React-Native-Movies-Typescript",
        type: "front-end",
      },
    ],
    description:
      "Cette application mobile nécessite d'être authentifié pour accéder aux fonctionnalités. L'utilisateur·ices peut consulter une liste de film ainsi que des informations pour cahque film. Les utilisateur·ices ont la possibilité de poster des reviews, de les consulter dans l'ordre antéchronologique pour chaque film ou sur le mur d'accueil de l'application. Le mode Random Movie permet de choisir un film au hasard si besoin d'une inspiration. L'utilisateur peut supprimer son compte s'il le souhaite néanmoins, les reviews non supprimées apparaîtront sous le nom d'utilisateur 'deleted account'.",
    stacks: [
      {
        source: typescript,
        alt: "logo de TypeScript",
        color: "bg-yellow-400",
        name: "TypeScript",
      },
      {
        source: react,
        alt: "logo de React Native",
        color: "bg-purple-300",
        name: "React Native",
      },
      {
        source: tailwind,
        alt: "logo de Tailwind",
        color: "bg-blue-200",
        name: "Nativewind",
      },
      {
        source: nodeJs,
        alt: "Logo de Node.js",
        color: "bg-green-500",
        name: "Node.js",
      },
      {
        source: mongoDB,
        alt: "logo de MongoDB",
        color: "bg-yellow-600",
        name: "MongoDB",
      },
    ],
  },
  {
    name: "SnakeVs",

    id: 3,
    picture: snake,
    urlLink: "",
    github: [
      {
        link: "https://github.com/ErwanPel/SnakeVs",
        type: "back-end",
      },
    ],
    description:
      "Ce projet est mon premier jeu en Python. Le joueur contrôle le serpent vert et l'ordinateur est le serpent rouge. Pour marquer un point , le joueur doit manger les 10 billes bleus sans se faire toucher par le snake rouge et sans sortir du cadre du jeu. Autrement, le joueur revient à 0 point. Le snake rouge peut aussi gagner des points, grandir et cherchera à vous attaquer si vous êtes proches de sa tête.",
    stacks: [
      {
        source: python,
        alt: "logo de Python",
        color: "bg-gradient-to-br from-blue-500 to-yellow-500",
        name: "Python",
      },
      {
        source: pygame,
        alt: "logo de Pygame",
        color: "bg-black",
        name: "Pygame",
      },
    ],
  },
];
