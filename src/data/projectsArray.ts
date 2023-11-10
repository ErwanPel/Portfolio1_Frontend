import vinted from "../assets/vinted.png";
import marvel from "../assets/marvel.png";
import giveMovies from "../assets/giveMovies.png";
import snake from "../assets/snakeVsEvilSnake.png";
import tailwind from "../assets/tailwind.webp";
import typescript from "../assets/Typescript.webp";
import python from "../assets/Python.webp";
import react from "../assets/react.webp";
import sass from "../assets/sass.webp";
import nodeJs from "../assets/nodeJs.webp";
import mongoDB from "../assets/mongoDB.webp";
import pygame from "../assets/pygame.webp";
import vintedGif from "../assets/vinted.gif";
import snakeVs from "../assets/snakeVs.gif";
import marvelVideo from "../assets/marvel.gif";
import giveMoviesGif from "../assets/giveMoviesFull.gif";

type TGit = {
  link: string;
  type: "Back-end" | "Front-end";
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
  description_en: string;
  description_fr: string;
  stacks: TStacks[];
  video: string;
};

export const arrayProjects: TProjects[] = [
  {
    name: "Vinted",
    video: vintedGif,
    id: 0,
    picture: vinted,
    urlLink: "https://vinted-front-exercice.netlify.app",
    github: [
      { link: "https://github.com/ErwanPel/vinted-project", type: "Back-end" },
      {
        link: "https://github.com/ErwanPel/Vinted-frontend",
        type: "Front-end",
      },
    ],
    description_en:
      "This project is a replica of a Vinted e-commerce site. Once authenticated, users can publish, modify or delete one of their offers. Users can also consult all their sales and purchases. The API used to purchase a product is Stripe.",
    description_fr:
      "Ce projet est une réplique d'un site e-commerce Vinted. Une fois authentifié, l'utilisateur peut publier, modifier, supprimer une de ses offres. L'utilisateur peut également consulté l'ensemble de ses ventes et de ses achats. L'API utilisé dans le cadre de l'achat d'un produit est Stripe.",
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
    video: marvelVideo,
    id: 1,
    picture: marvel,
    urlLink: "https://marvel-scss.netlify.app",
    github: [
      { link: "https://github.com/ErwanPel/Marvel-backend", type: "Back-end" },
      {
        link: "https://github.com/ErwanPel/Marvel-frontend-SASS",
        type: "Front-end",
      },
    ],
    description_en:
      "This project provides information on characters and comics from the Marvel universe. The search system uses auto-completion to facilitate users' searches. Once authenticated, users can bookmark characters or comics and consult them.",
    description_fr:
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
    video: giveMoviesGif,
    id: 2,
    picture: giveMovies,
    urlLink: "",
    github: [
      {
        link: "https://github.com/ErwanPel/Backend_Movies_Typescript",
        type: "Back-end",
      },
      {
        link: "https://github.com/ErwanPel/React-Native-Movies-Typescript",
        type: "Front-end",
      },
    ],
    description_en:
      "This mobile application requires authentication to access its functions. Users can consult a list of films as well as information on each film. Users can post reviews, viewing them in antechronological order for each film or on the application's home wall. The Random Movie mode lets users choose a film at random if they need inspiration. Users can delete their account if they wish, but any reviews not deleted will appear under the username 'deleted account'.",
    description_fr:
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
    video: snakeVs,
    id: 3,
    picture: snake,
    urlLink: "",
    github: [
      {
        link: "https://github.com/ErwanPel/SnakeVs",
        type: "Back-end",
      },
    ],
    description_en:
      "This project is my first game in Python. The player controls the green snake and the computer is the red snake. To score a point, the player must eat all 10 blue marbles without being touched by the red snake and without leaving the game. Otherwise, the player returns to 0 points. The red snake can also gain points, grow and will try to attack you if you're close to its head.",
    description_fr:
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

console.log("here", arrayProjects[0].description_en);
