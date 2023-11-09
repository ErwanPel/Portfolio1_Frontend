import Title from "./Title";
import toutJavascript from "../assets/ToutJavascript.webp";
import reseauxDeZero from "../assets/ReseauDeZero.webp";
import codeGarage from "../assets/code-garage.png";
import cybersécuritéGrandMere from "../assets/cybersecuritéGrandMere.png";
import codeWars from "../assets/codeWars.webp";
import regexpCrossword from "../assets/regexpCrossword.webp";
import BlocText from "./BlocText";
import TitleLevel2 from "./TitleLevel2";
import SectionComponents from "./SectionComponents";

const booksArray = [
  {
    title: "Tout Javascript",
    author: "Olivier Hondermarck",
    description:
      "Ce livre aborde l'ensemble des fonctionnalités du JavaScript et des bonnes pratiques à mettre en oeuvre.",
    img: toutJavascript,
  },
  {
    title: "Les réseaux de zéro",
    author: "Vincent Sénétaire, Jean-Manassé Pouabou",
    description:
      "Ce livre vulgarise la partie réseau en informatique et invite le lecteur à pratiquer en utilisant le simulateur de réseau gratuit, Packet Tracer.",
    img: reseauxDeZero,
  },
];

const podcastsArray = [
  {
    title: "Code-Garage",
    author: "Nicolas Brondin-Bernard",
    description:
      "Ce podcast vulgarise des concepts très variés dans le monde de la programmation.",
    img: codeGarage,
  },
  {
    title: "La cybersécurité expliquée à ma grand-mère",
    author: "not defined",
    description:
      "Ce podcast aborde divers aspects de la cyber-sécurité, du chiffrement à la mise en place de texte réglementaire comme DORA.",
    img: cybersécuritéGrandMere,
  },
];

const ludicArray = [
  {
    title: "CodeWars",
    img: codeWars,
    url: "https://www.codewars.com",
    description:
      "Application web proposant des défis algorithmiques, le tout dans une ambiance ludique. L'avantage est qu'une fois notre solution soumise à un test, l'utilisateur peut consulter les solutions proposées par la communauté.",
  },
  {
    title: "RegExp Crossword",
    url: "https://regexcrossword.com",
    img: regexpCrossword,
    description:
      "Application web dont le but est de résoudre des énigmes de regExp dans un jeu type mots croisés.",
  },
];

export default function Resources() {
  return (
    <SectionComponents>
      <div className="flex flex-col items-center gap-y-8">
        <Title title="< Resources />" />

        <BlocText>
          <TitleLevel2 title="Books" />
          {booksArray.map((book) => {
            return (
              <div
                key={book.title}
                className="flex items-center flex-col sm:flex-row gap-y-4 sm:justify-between mb-6 sm:p-6 rounded-xl"
              >
                <figure className="w-24 sm:mr-6">
                  <img
                    src={book.img}
                    alt={`livre ${book.title}`}
                    className="object-cover h-full w-full"
                  />
                </figure>

                <div className="sm:w-40 text-center sm:text-start sm:mr-12 ">
                  <p className="font-bold">{book.title}</p>
                  <p>{book.author}</p>
                </div>
                <div className="w-80 p-2 text-justify">{book.description}</div>
              </div>
            );
          })}
        </BlocText>

        <BlocText>
          <TitleLevel2 title="Podcasts" />
          {podcastsArray.map((podcast) => {
            return (
              <div
                key={podcast.title}
                className=" flex items-center flex-col sm:flex-row gap-y-4 sm:justify-between mb-6 p-6 rounded-xl"
              >
                <figure className="w-24 sm:mr-6">
                  <img
                    src={podcast.img}
                    alt={`livre ${podcast.title}`}
                    className="object-cover h-full w-full"
                  />
                </figure>

                <div className="sm:w-40 p-4 sm:mr-12 text-center sm:text-start">
                  <p className="font-bold">{podcast.title}</p>
                  <p>{podcast.author}</p>
                </div>
                <div className="w-80 p-2 text-justify">
                  {podcast.description}
                </div>
              </div>
            );
          })}
        </BlocText>
        <BlocText>
          <TitleLevel2 title="Ludic Games" />
          {ludicArray.map((ludic) => {
            return (
              <div
                key={ludic.title}
                className=" flex items-center flex-col sm:flex-row gap-y-4 sm:justify-between mb-6 p-6 rounded-xl"
              >
                <figure className="w-24 sm:mr-6">
                  <img
                    src={ludic.img}
                    alt={`livre ${ludic.title}`}
                    className="object-cover h-full w-full"
                  />
                </figure>

                <div className="sm:w-40 p-4 sm:mr-12">
                  <a href={ludic.url} target="blank">
                    <p className="font-bold hover:bg-lgHoverSolidBackground hover:text-lgSubBackground w-fit p-2 rounded-lg">
                      {ludic.title}
                    </p>
                  </a>
                </div>
                <div className="w-80 p-2 text-justify">{ludic.description}</div>
              </div>
            );
          })}
        </BlocText>
      </div>
    </SectionComponents>
  );
}
