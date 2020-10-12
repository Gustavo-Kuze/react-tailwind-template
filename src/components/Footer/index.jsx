/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Icon from 'components/Icon';
import Button from 'components/Button';
import React from 'react';
import { toggleChat } from 'utils';

import { useSelector } from 'react-redux';
import menuItems from 'constants/menu';
import { Link } from 'react-router-dom';

const Footer = () => {
  const theme = useSelector((state) => state.settings.theme);

  return (
    <footer
      className={`
          text-gray-700 body-font
          mt-48
          bg-${theme.classes.panels}
      `}
    >
      <div
        className={`
            container px-5 py-24
            md:flex-no-wrap flex-wrap flex-col
            lg:items-start md:flex-row
            mx-auto flex md:items-center
        `}
      >
        <div
          className={`
            w-6/12 flex flex-col items-center
            content-center md:mx-0
            mx-auto text-center md:text-left
          `}
        >
          <a
            className={`
                flex title-font font-medium
                items-center md:justify-start
                justify-center text-${theme.classes.sectionTitle}
            `}
          >
            <img
              src="/img/logo_preto_vermelho_transparent.png"
              alt="Logo"
              className="w-12 h-12"
            />
            <span className="ml-3 text-xl">Gustavo Kuze</span>
          </a>
          <p
            className={`
                mt-2 text-md 
                text-${theme.classes.paragraph}
            `}
          >
            Vamos trocar uma ideia!
          </p>
          <Button
            onClick={toggleChat}
            isResponsive={false}
            className="mt-5 w-full md:w-6/12 lg:4/12"
          >
            Entre em contato
          </Button>
        </div>
        <div className="flex-grow flex flex-wrap justify-end md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="w-full lg:w-3/5 px-4">
            <h2
              className={`
                title-font font-medium text-${theme.classes.sectionTitle}
                tracking-widest text-sm mb-3
                md:mt-8 lg:mt-2
              `}
            >
              ATALHOS
            </h2>
            <nav className="list-none mb-10 md:flex md:flex-row lg:items-center md:justify-between lg:mt-6">
              {menuItems
                .filter(({ items, hideInFooter }) => !items && !hideInFooter)
                .map(({ label, action }) => (
                  <li>
                    <Link
                      to={action}
                      className={`  
                          text-${theme.classes.paragraph}
                          hover:text-${theme.classes.menuHover}
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
            </nav>
          </div>
        </div>
      </div>
      <div className={`bg-${theme.classes.footerBottomBackground}`}>
        <div className="container h-full mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left pt-3">
            © Gustavo Kuze - {new Date().getFullYear()}
          </p>
          <span
            className={`
              inline-flex sm:ml-auto sm:mt-0 mt-2 
              justify-center sm:justify-start
            `}
          >
            <a
              href="mailto:gustavoksilva@gmail.com?subject=Preciso%20de%20um%20desenvolvedor&body=Conte-me%20mais%20sobre%20seu%20projeto"
              target="_blank"
              rel="noopener noreferer"
              className={`
                text-gray-500
                hover:text-purple-500
                border rounded-full p-2 border-transparent hover:border-purple-800
                mx-1
                transition-all duration-300 ease-linear
              `}
            >
              <Icon
                containerClass=""
                color={`
                    text-gray-500 hover:text-purple-500
                    transition-all duration-300 ease-linear
                `}
                size={5}
                icon="mail"
              />
            </a>
            <a
              href="https://github.com/Gustavo-Kuze"
              target="_blank"
              rel="noopener noreferer"
              className={`
                  text-gray-500
                  hover:text-purple-500
                  border rounded-full p-2 border-transparent hover:border-purple-800
                  mx-1
                  transition-all duration-300 ease-linear
              `}
            >
              <Icon
                containerClass=""
                color={`
                    text-gray-500 hover:text-purple-500
                    transition-all duration-300 ease-linear
                `}
                size={5}
                icon="github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-kuze/"
              target="_blank"
              rel="noopener noreferer"
              className={`
                  text-gray-500
                  hover:text-purple-500
                  border rounded-full p-2 border-transparent hover:border-purple-800
                  mx-1
                  transition-all duration-300 ease-linear
              `}
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
