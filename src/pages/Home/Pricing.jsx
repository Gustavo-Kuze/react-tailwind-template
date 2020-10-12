/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { toggleChat } from 'utils';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';
import Button from 'components/Button';
import Icon from 'components/Icon';

const Pricing = () => {
  const theme = useSelector((state) => state.settings.theme);

  const CardItem = ({ children }) => (
    <div
      className={`
        text-center border-0 border-grey-light
        border-b border-solid py-4 w-8/12
        mx-auto
        flex flex-row justify-start
      `}
    >
      <div className="flex flex-row justify-center items-center">
        <Icon svgClass="mr-3" color="text-green-500" size={4} icon="check" />
        <p className="lg:text-lg">{children}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full bg-blue pt-8 mt-12 px-12 md:px-auto">
        <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
          <Fade left>
            <div
              className={`
                sm:flex-1 lg:flex-initial lg:w-1/4
                rounded-lg md:rounded-tr-none md:rounded-br-none
                bg-white mt-4 flex flex-col
              `}
            >
              <div className="p-8 text-3xl font-bold text-center">Site</div>
              <div
                className={`
                  border-0 border-grey-light
                  border-t border-solid text-sm mb-12
                `}
              >
                <CardItem>Configuração de domínio</CardItem>
                <CardItem>Deploy</CardItem>
                <CardItem>Formulário de contato (básico)</CardItem>
                <CardItem>E-mail profissional (1GB)</CardItem>
                <CardItem>Design responsivo</CardItem>
                <CardItem>
                  SEO - Seu negócio aparecendo no Google, Bing e demais
                  buscadores
                </CardItem>
              </div>
              <div className="text-center mb-8 mt-auto">
                <Button
                  noShadow
                  onClick={toggleChat}
                  className="mt-12 md:mt-1 mb-3"
                  isResponsive={false}
                >
                  Solicite um orçamento
                </Button>
              </div>
            </div>
          </Fade>
          <Fade big>
            <div
              className={`
                flex-1 lg:flex-initial lg:w-1/4
                rounded-lg md:rounded-b-none bg-white
                mt-4 sm:-mt-4 shadow-lg
                z-30 flex flex-col
              `}
            >
              <div className="w-full p-8 text-3xl font-bold text-center">
                Sistema
              </div>
              <div
                className={`
                  w-full border-0 border-grey-light
                  border-t border-solid text-sm
                `}
              >
                <p
                  className={`
                    text-${theme.classes.primaryStronger} text-lg
                    text-center mt-5
                  `}
                >
                  + Tudo do site
                </p>
                <CardItem>Banco de dados</CardItem>
                <CardItem>Configuração de servidor</CardItem>
                <CardItem>Formulário de contato</CardItem>
                <CardItem>Painel administrativo</CardItem>
                <CardItem>Envio de E-mails</CardItem>
                <CardItem>Websockets</CardItem>
              </div>
              <div className="w-full text-center mb-8 mt-auto">
                <Button
                  onClick={toggleChat}
                  className="mt-12 md:mt-1 mb-3"
                  secondary
                  noShadow
                  isResponsive={false}
                >
                  Solicite um orçamento
                </Button>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div
              className={`
                flex-1 lg:flex-initial lg:w-1/4
                rounded-lg md:rounded-tl-none md:rounded-bl-none
                bg-white mt-4 flex flex-col
              `}
            >
              <div className="p-8 text-3xl font-bold text-center">App</div>
              <div
                className={`
                  border-0 border-grey-light border-t
                  border-solid text-sm
                `}
              >
                <CardItem>
                  Aplicativo multiplataforma, moderno e amplamente escalável,
                  desenvolvido com React Native
                </CardItem>
                <CardItem>
                  Publicação nas lojas PlayStore (Android) e AppStore (iOS)
                </CardItem>
                <CardItem>Integração com Google Analytics</CardItem>
                <CardItem>Configuração de notificações push</CardItem>
              </div>
              <div className="text-center pt-8 mb-8 mt-auto">
                <Button
                  noShadow
                  onClick={toggleChat}
                  className="mt-12 md:mt-1 mb-3"
                  isResponsive={false}
                >
                  Solicite um orçamento
                </Button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Pricing;
