import Title from "./Title";
import logoReacteur from "../assets/leReacteur.webp";
import SectionComponents from "./SectionComponents";
import BlocText from "./BlocText";

export default function Courses() {
  return (
    <SectionComponents>
      <Title title="< Courses />" />
      <BlocText>
        <div className="flex gap-x-2 items-center mb-4">
          <img src={logoReacteur} className="w-6 h-6" />
          <h2 className="text-xl text-lgTextMax dark:text-blTextMax">
            Bootcamp :{" "}
            <a href="https://www.lereacteur.io/?utm_source=google&utm_medium=cpc&utm_campaign=FR-SN-Brand&utm_term=le%20reacteur&utm_content=377851505166&gad_source=1&gclid=Cj0KCQjw4vKpBhCZARIsAOKHoWTYa_na93HBD-c9K8ShKsObl08sLxYvEoh9e-yT-Qiic6t9RXcSxbQaAhLBEALw_wcB">
              <strong className="hover:underline underline-offset-2 decoration-2">
                Le Réacteur
              </strong>
            </a>
          </h2>
        </div>
        <p className="italic">
          Concepteur d'Application Web et Mobile · Avril à Octobre 2023 · Temps
          partiel
        </p>
        <p className="my-4 font-bold underline underline-offset-4 text-lgTextMin dark:text-blTextMin">
          Compétences acquises :{" "}
        </p>
        <ul>
          <li className="text-lgTextMin dark:text-blTextMin mb-1">
            Algorithmie,
          </li>
          <li className="text-lgTextMin dark:text-blTextMin mb-1">
            JavaScript,
          </li>
          <li className="text-lgTextMin dark:text-blTextMin mb-1">
            TypeScript,
          </li>
          <li className="text-lgTextMin dark:text-blTextMin mb-1">
            Dévelopement et déploiement d'un projet back-end Node.js,
          </li>
          <li className="text-lgTextMin dark:text-blTextMin mb-1">
            Création d'une API REST,
          </li>
          <li className="text-lgTextMin dark:text-blTextMin mb-1">
            Gestion de bases de données MongoDB,
          </li>
          <li className="text-lgTextMin dark:text-blTextMin mb-1">
            Développement et déploiement d'un projet front-end web React.js,
          </li>
          <li className="text-lgTextMin dark:text-blTextMin mb-1">
            Développement et déploiement d'un projet front-end mobile React
            Native,
          </li>
          <li className="text-lgTextMin dark:text-blTextMin mb-1">
            Création d'un projet web avec le framework Next 12 / 13,
          </li>
          <li className="text-lgTextMin dark:text-blTextMin mb-1">
            Mise en place de test unitaire avec Jest.js,
          </li>
        </ul>
      </BlocText>
    </SectionComponents>
  );
}
