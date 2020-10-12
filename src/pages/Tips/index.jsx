/* eslint-disable camelcase */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { classNames } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { tipsTypes } from 'redux/ducks/tips';
import Footer from 'components/Footer';
import Fade from 'react-reveal/Fade';
import Icon from 'components/Icon';
import Button from 'components/Button';
import CodeBlock from 'components/CodeBlock';

const ReactMarkdown = require('react-markdown');

const TipsTitle = styled.h1``;

const Tips = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);
  const gists = useSelector((state) => state.tips.gists);
  const isLoadingGists = useSelector((state) => state.tips.isLoadingGists);
  const [currentPage, setCurrentPage] = useState(1);

  const loadNextGists = () => {
    dispatch({
      type: tipsTypes.FETCH_GISTS,
      payload: currentPage,
    });
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    loadNextGists();
  }, []);

  const isDarkTheme = () => theme.themeName === 'dark';

  return (
    <div className="h-screen min-h-screen pt-40">
      <Fade>
        <header className="py-4 px-12 lg:px-64 container">
          <TipsTitle
            className={`
              font-bold text-${theme.classes.whitierPrimary}
              text-4xl lg:text-6xl
            `}
          >
            Minhas Anotações
          </TipsTitle>
          <h2
            className={`
              font-bold text-${theme.classes.whiteyPrimary}
              text-lg lg:text-2xl
            `}
          >
            Aqui você encontra alguns dos meus{' '}
            <em>
              {' '}
              <a
                href="https://gist.github.com/Gustavo-Kuze"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gists
              </a>{' '}
            </em>{' '}
            públicos. <br /> Tem de tudo, desde configurações de projetos até
            scripts que facilitam meu dia-a-dia.
          </h2>
        </header>
      </Fade>
      <section
        className={`
          bg-${theme.classes.panels} pt-8 pb-12
          mt-32 min-h-screen
        `}
      >
        <div
          className={`
            lg:grid lg:grid-cols-2
            bg-${theme.classes.panels}
            py-12 lg:mx-32
          `}
        >
          {gists.map(({ content, raw_url, description }) => (
            <div className="lg:col-span-1 lg:mx-12">
              <h3
                className={`
                  w-full
                  text-3xl px-12 sm:px-8 mt-8 mb-1
                  text-${theme.classes.sectionTitle}
                `}
              >
                {description}
              </h3>
              <hr
                className={`
                  border-b border-${theme.classes.primary}
                  opacity-75 mb-8
                  w-6/12 sm:w-64 mx-12
                `}
              />
              <ReactMarkdown
                key={raw_url}
                source={content}
                className={classNames(
                  `text-${theme.classes.paragraph}`,
                  `mx-12 lg:mx-0 px-12 py-8 border transition-all duration-300`,
                  `overflow-auto`,
                  isDarkTheme()
                    ? `hover:border-${theme.classes.secondary}`
                    : `shadow-xs hover:shadow-xl`,
                )}
                renderers={{ code: CodeBlock }}
              />
            </div>
          ))}
        </div>

        {!isLoadingGists && (
          <div className="w-full flex flex-row justify-center">
            <Button
              isResponsive={false}
              secondary={isDarkTheme()}
              noShadow={!isDarkTheme()}
              className="mt-12"
              onClick={loadNextGists}
              color={
                !isDarkTheme() &&
                `
                  bg-${theme.classes.secondaryStrong}
                  hover:bg-${theme.classes.secondary}
                  text-${theme.classes.whitierPrimary}
                  hover:text-${theme.classes.primaryStrong}
                `
              }
            >
              Carregar mais
            </Button>
          </div>
        )}

        {isLoadingGists && (
          <>
            <Icon
              containerClass="mr-6"
              svgClass="animate-spin mx-auto mt-12"
              color={`text-${
                theme.themeName === 'dark'
                  ? theme.classes.secondary
                  : theme.classes.primary
              }`}
              size={8}
              icon="loader"
            />
            <p
              className={classNames(
                `text-${
                  theme.themeName === 'dark'
                    ? theme.classes.secondary
                    : theme.classes.primary
                }`,
                `mx-auto text-center mb-12 mt-2 pr-5`,
              )}
            >
              Carregando notas...
            </p>
          </>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Tips;
