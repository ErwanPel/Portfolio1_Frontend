import ImageTechno from "./ImageTechno";
import Title from "./Title";
import penpot from "../assets/penpot.webp";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import typescript from "../assets/Typescript.webp";
import python from "../assets/Python.webp";
import react from "../assets/react.webp";
import sass from "../assets/sass.webp";
import nodeJs from "../assets/nodeJs.webp";
import mongoDB from "../assets/mongoDB.webp";
import github from "../assets/github.webp";
import next from "../assets/next.png";
import tailwind from "../assets/tailwind.webp";

export default function AboutMe() {
  return (
    <div>
      <Title title="< About Me />" />
      <article>
        <p className="text-justify mb-4 text-lg text-lgTextMax bg-lgBackgroundElement p-4 rounded-3xl">
          Hello ! Je m'appelle Erwan Pellerin et je suis{" "}
          <strong>développeur Full-Stack Web et Mobile junior</strong>. J'ai
          exercé le métier de psychomotricien durant 8 ans au sein de structures
          médico-sociaux, un métier nécessitant de la curiosité, de
          l'adaptation, de la créativité, une gestion du stress ainsi qu'une
          bonne qualité d'écoute et d'observation.
        </p>
        <p className="text-lg text-justify text-lgTextMax bg-lgBackgroundElement p-4 rounded-3xl">
          Je suis passionné par l'informatique et les nouvelles technologies
          depuis mon enfance. Après avoir commencé à coder en python en
          autodidacte, le goût pour la programmation m'a engagé sur la voie de
          la reconversion professionnelle. Je me suis inscris au sein du club{" "}
          <a href="https://coder-pour-changer-de-vie.com/formations/">
            <strong className="hover:underline underline-offset-2 decoration-2">
              Vivre du Code
            </strong>{" "}
          </a>{" "}
          en Janvier 2023 et je me suis formé à l'école du{" "}
          <a href="https://www.lereacteur.io/?utm_source=google&utm_medium=cpc&utm_campaign=FR-SN-Brand&utm_term=le%20reacteur&utm_content=377851505166&gad_source=1&gclid=Cj0KCQjw4vKpBhCZARIsAOKHoWTYa_na93HBD-c9K8ShKsObl08sLxYvEoh9e-yT-Qiic6t9RXcSxbQaAhLBEALw_wcB">
            <strong className="hover:underline underline-offset-2 decoration-2">
              Réacteur
            </strong>{" "}
          </a>
          d'Avril à Octobre 2023. Ce bootcamp m'a permis d'obtenir de solides
          compétences en tant que développeur Full-Stack Web et Mobile.
        </p>
      </article>
      <article className="mt-16">
        <h2 className="text-center text-3xl text-lgTextMax m-8">Skills</h2>
        <div className="flex justify-between">
          <div>
            <h3 className="mb-6 text-lgTextMin font-bold ">Design</h3>
            <div className="flex flex-col gap-y-4 border-t border-lgTextMin pt-6">
              <ImageTechno
                source={penpot}
                alt="logo de Penpot"
                color="bg-white"
                name="Penpot"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-lgTextMin font-bold">Langages</h3>
            <div className="flex flex-col gap-y-4 border-t border-lgTextMin pt-6">
              <ImageTechno
                source={html}
                alt="logo de HTML"
                color="bg-orange-400"
                name="HTML"
              />
              <ImageTechno
                source={css}
                alt="Logo de CSS"
                color="bg-blue-400"
                name="CSS"
              />
              <ImageTechno
                source={typescript}
                alt="Logo de TypeScript"
                color="bg-yellow-400"
                name="TypeScript"
              />
              <ImageTechno
                source={python}
                alt="logo de Python"
                color="bg-gradient-to-br from-blue-500 to-yellow-500"
                name="Python"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-lgTextMin font-bold">Front-End</h3>
            <div className="flex flex-col gap-y-4 border-t border-lgTextMin pt-6">
              <ImageTechno
                source={react}
                alt="logo de React"
                color="bg-cyan-200"
                name="React"
              />
              <ImageTechno
                source={react}
                alt="logo de React Native"
                color="bg-purple-300"
                name="React Native"
              />
              <ImageTechno
                source={sass}
                alt="logo de Sass"
                color="bg-pink-400"
                name="SASS"
              />
              <ImageTechno
                source={tailwind}
                alt="logo de Tailwind"
                color="bg-blue-200"
                name="TailWind/ NativeWind"
              />
              <ImageTechno
                source={next}
                alt="logo de Next"
                color="bg-white"
                name="Next 12/13"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-lgTextMin font-bold">Back-End</h3>
            <div className="flex flex-col gap-y-4 border-t border-lgTextMin pt-6">
              <ImageTechno
                source={nodeJs}
                alt="Logo de Node.js"
                color="bg-green-500"
                name="Node.js"
              />
              <ImageTechno
                source={mongoDB}
                alt="logo de MongoDB"
                color="bg-yellow-600"
                name="MongoDB"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-lgTextMin font-bold">Tools</h3>
            <div className="flex flex-col gap-y-4 border-t border-lgTextMin pt-6">
              <ImageTechno
                source={github}
                alt="logo de Github"
                color="bg-white"
                name="Github"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
