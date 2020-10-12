/* eslint-disable max-len */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import WavySection from 'components/WavySection';
import { toggleChat } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { types } from 'redux/ducks/example';
import { works } from 'constants/works';
import WorksSection from 'components/WorksSection';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer';
import Fade from 'react-reveal/Fade';

import WhatICanDo from './WhatICanDo';
import Pricing from './Pricing';

const HomeTitle = styled.h1``;

const Home = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  useEffect(() => {
    dispatch({
      type: types.FETCH_EXAMPLE,
    });
  }, []);

  const isDarkTheme = () => theme.themeName === 'dark';

  return (
    <div className="h-screen pt-40">
      <Fade>
        <header className="py-4 px-12 lg:px-64 container">
          <h3
            className={`
              font-bold text-${theme.classes.whiteyPrimary}
              text-md lg:text-2xl
            `}
          >
            Apresente aqui sua idéia
          </h3>
          <HomeTitle
            className={`
              font-bold text-${theme.classes.whitierPrimary}
              text-4xl lg:text-6xl
            `}
          >
            Incrivelmente Sensacional
          </HomeTitle>
          <h2
            className={`
              font-bold text-${theme.classes.whiteyPrimary}
              text-lg lg:text-2xl
            `}
          >
            e diga como ela torna o <em>mundo</em>, um lugar melhor
          </h2>

          <Button
            onClick={toggleChat}
            isResponsive={false}
            secondary={isDarkTheme()}
            noShadow
            className="mt-5"
            color={
              !isDarkTheme() &&
              `
              bg-${theme.classes.secondaryStrong}
              hover:bg-${theme.classes.secondary}
              text-${theme.classes.whitierPrimary}
              hover:text-${theme.classes.whiteyPrimary}
              mt-5
              `
            }
          >
            Entre em contato
          </Button>
        </header>
      </Fade>

      <WavySection>
        <section className={`bg-${theme.classes.panels} py-12`}>
          <div className="container max-w-5xl mx-auto mt-8">
            <h1
              className={`
                w-full my-2 text-5xl
                font-bold leading-tight
                text-center text-${theme.classes.sectionTitle}
                pt-5
              `}
            >
              Projetos
            </h1>

            <WorksSection
              title="Em destaque"
              description=""
              works={works.freelancer}
              customDivider={
                <>
                  <div className="flex flex-row items-center justify-center lg:justify-end">
                    <Link
                      to="/portfolio"
                      className={`
                        shake-horizontal
                        text-right
                        text-${
                          theme.themeName === 'dark'
                            ? theme.classes.secondary
                            : theme.classes.primary
                        }
                        text-lg hover:text-${
                          theme.themeName === 'dark'
                            ? theme.classes.whiteyPrimary
                            : theme.classes.primaryStrong
                        }
                        transition-all duration-300 ease-linear
                        flex flex-row my-12
                      `}
                    >
                      <p className="text-right">Ver portfólio completo</p>
                      <Icon
                        containerClass="mr-6"
                        color={`text-${
                          theme.themeName === 'dark'
                            ? theme.classes.secondary
                            : theme.classes.primary
                        }`}
                        size={5}
                        icon="chevron-right"
                      />
                    </Link>
                  </div>
                  <hr />
                </>
              }
            />
          </div>

          <WhatICanDo />
        </section>
      </WavySection>
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
