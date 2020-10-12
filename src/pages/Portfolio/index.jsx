/* eslint-disable max-len */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { types } from 'redux/ducks/example';
import { works } from 'constants/works';
import WorksSection from 'components/WorksSection';
import Footer from 'components/Footer';
import Fade from 'react-reveal/Fade';

const HomeTitle = styled.h1``;

const Home = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  useEffect(() => {
    dispatch({
      type: types.FETCH_EXAMPLE,
    });
  }, []);

  return (
    <div className="h-screen pt-40">
      <Fade>
        <header className="py-4 px-12 lg:px-64 container">
          <HomeTitle
            className={`
              font-bold text-${theme.classes.whitierPrimary}
              text-4xl lg:text-6xl
            `}
          >
            Portfólio
          </HomeTitle>
          <h2
            className={`
              font-bold text-${theme.classes.whiteyPrimary}
              text-lg lg:text-2xl
            `}
          >
            Aqui você encontra alguns projetos em destaque dos quais tive
            oportunidade de desenvolver ou auxiliar no desenvolvimento
          </h2>
        </header>
      </Fade>

      <section className={`bg-${theme.classes.panels} py-8 mt-32`}>
        <div className="container max-w-5xl mx-auto m-8">
          <WorksSection
            title="Freelancer"
            description="Projetos desenvolvidos de maneira independente"
            works={works.freelancer}
          />

          <WorksSection
            title="Meu Laboratório"
            description="Pequenos projetos criados para testar e experimentar diferentes tecnologias. Não devem ser levados muito a sério ;)"
            works={works.studies}
            customDivider={<></>}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
