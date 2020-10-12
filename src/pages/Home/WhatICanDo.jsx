import React from 'react';
import mapsImg from 'assets/imgs/maps.svg';
import pwaImg from 'assets/imgs/pwa.svg';
import responsiveImg from 'assets/imgs/responsive.svg';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

const WhatICanDo = () => {
  const theme = useSelector((state) => state.settings.theme);

  return (
    <>
      <div
        className={`
          w-full xl:w-11/12 xl:mx-auto
          flex flex-col items-center
        `}
      >
        <div
          className={`
            w-full px-12 md:px-32 xl:px-64 flex flex-col lg:flex-row 
            items-center justify-between lg:justify-center
          `}
        >
          <img src={mapsImg} alt="teste" className="lg:w-6/12" />
          <div className="lg:w-5/12">
            <h3
              className={`
                text-3xl md:text-4xl
                text-${theme.classes.sectionTitle}
              `}
            >
              <Fade top cascade>
                Integração com Maps
              </Fade>
            </h3>

            <p
              className={`
                w-full
                text-lg
                text-${theme.classes.paragraph}
              `}
            >
              <Fade>
                Integração com Google Maps, MapBox ou qualquer serviço de
                geolocalização de sua escolha. Mostre aos seus clientes onde sua
                empresa está!
              </Fade>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`
          w-full xl:w-11/12 xl:mx-auto flex flex-col items-center
          my-16 lg:my-3
        `}
      >
        <div
          className={`
            w-full px-12 md:px-32 xl:px-64 flex flex-col-reverse lg:flex-row 
            items-center justify-between lg:justify-center
          `}
        >
          <div className="lg:w-5/12">
            <h3
              className={`
                w-full
                text-3xl md:text-4xl
                text-${theme.classes.sectionTitle}
              `}
            >
              <Fade top cascade>
                Aplicativos Progressivos
              </Fade>
            </h3>

            <p
              className={`
                w-full
                text-lg
                text-${theme.classes.paragraph}
              `}
            >
              <Fade>
                Crie uma experiência totalmente customizada para seu negócio,
                sem se prender à nenhuma loja de aplicativos, com tecnologias
                modernas e de alta escalabilidade
              </Fade>
            </p>
          </div>
          <Fade>
            <img
              src={pwaImg}
              alt="teste"
              className="lg:w-5/12 mb-12 lg:mb-2 lg:ml-12"
            />
          </Fade>
        </div>
      </div>

      <div
        className={`
          w-full xl:w-11/12 xl:mx-auto  flex flex-col items-center
          mt-16
        `}
      >
        <div
          className={`
            w-full px-12 md:px-32 xl:px-64 flex flex-col lg:flex-row 
            items-center justify-between lg:justify-center
          `}
        >
          <Fade>
            <img
              src={responsiveImg}
              alt="teste"
              className={`
                w-9/12 sm:w-6/12 lg:w-4/12
                mb-12 lg:mb-2
              `}
            />
          </Fade>
          <div className="lg:w-5/12 lg:pl-20">
            <h3
              className={`
                text-3xl md:text-4xl
                text-${theme.classes.sectionTitle}
              `}
            >
              <Fade top cascade>
                Design Responsivo
              </Fade>
            </h3>

            <p
              className={`
                w-full
                text-lg 
                text-${theme.classes.paragraph}
              `}
            >
              <Fade>
                Conteúdo adaptado a todos os tamanhos de tela para os mais
                diversos tipos de dispositivos
              </Fade>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatICanDo;
