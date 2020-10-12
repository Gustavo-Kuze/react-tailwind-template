/* eslint-disable max-len */
import Footer from 'components/Footer';
import React from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';

const About = () => {
  const theme = useSelector((state) => state.settings.theme);

  const AboutSection = ({ title, items = [] }) => (
    <div className="mx-12 lg:mx-64">
      <h3
        className={`
          text-${theme.classes.sectionTitle}
          text-3xl lg:text-4xl mb-8
        `}
      >
        {title}
      </h3>
      {!!items.length && (
        <ul className="mb-8">
          {items.map(({ label, description }) => (
            <li
              className={`
                mb-8 list-disc
                text-${theme.classes.whiteyPrimary}
              `}
            >
              <p
                className={`
                  text-${theme.classes.paragraph}
                  text-lg lg:text-2xl
                `}
              >
                <strong>{label}</strong> – {description}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="h-screen pt-40">
      <header
        className={`
          py-4 px-12 lg:px-64
          flex flex-col
          items-center justify-center w-full
        `}
      >
        <h1
          className={`
            font-bold text-${theme.classes.whitierPrimary}
            text-3xl lg:text-5xl
          `}
        >
          Sobre mim...
        </h1>

        <div
          className={`
            flex flex-row
            items-center justify-center w-full
          `}
        >
          <Fade>
            <img
              src="/img/gustavo_kuze.jpg"
              alt="Minha foto"
              className="rounded-full w-64 height-64 my-8"
            />
          </Fade>
        </div>

        <Fade>
          <h2
            className={`
              font-bold text-${theme.classes.whiteyPrimary}
              text-lg lg:text-xl text-center
              max-w-lg
            `}
          >
            Sou um desenvolvedor <em>Fullstack</em>, formado em
            <br />
            <em>Análise e Desenvolvimento de Sistemas</em> e fico muito feliz
            que você tenha escolhido esse{' '}
            <a
              href="https://github.com/Gustavo-Kuze/react-tailwind-template"
              target="_blank"
              rel="noopener noreferer"
              className={`text-${theme.classes.secondaryStrong}`}
            >
              <strong>template</strong>
            </a>{' '}
          </h2>
        </Fade>
      </header>

      <p className={`text-center mt-32 text-${theme.classes.whitierPrimary}`}>
        Aqui a gente aponta para baixo
      </p>
      <p className="text-center mt-12 text-lg shake-vertical">
        <span role="img" aria-label="apontando para baixo" className="text-3xl">
          👇
        </span>
      </p>

      <section className={`bg-${theme.classes.panels} py-12 mt-32`}>
        <AboutSection
          title="Experiências"
          items={[
            {
              label: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
              description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Illum provident eaque fugiat nostrum deleniti iure id.
              Quasi praesentium ullam porro quas incidunt voluptatum quaerat reprehenderit eius,
              fugit suscipit explicabo sit?`,
            },
          ]}
        />

        <hr className="my-12" />

        <AboutSection
          title="Formação Acadêmica"
          items={[
            {
              label: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
              description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Illum provident eaque fugiat nostrum deleniti iure id.
              Quasi praesentium ullam porro quas incidunt voluptatum quaerat reprehenderit eius,
              fugit suscipit explicabo sit?`,
            },
          ]}
        />
      </section>
      <Footer />
    </div>
  );
};

export default About;
