/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { isMobileOS } from 'utils';
import Button from 'components/Button';
import Fade from 'react-reveal/Fade';

const Work = ({
  className,
  invert,
  work: {
    projectLink,
    sourceCodeLink,
    title,
    img,
    description,
    year,
    experiences = [],
  },
}) => {
  const { theme } = useSelector((state) => state.settings);

  const renderImageColumn = () => {
    return (
      <div
        className={`
          col-span-1 md:col-span-4  
          lg:col-span-6
          flex flex-col justify-center items-center
          transition duration-500 ease-out
          my-8
        `}
      >
        <Fade>
          <div
            className={`
              rounded lg:shadow-xl lg:hover:shadow-xs
              transition duration-500 ease-out
            `}
          >
            <img
              src={img}
              alt="teste"
              className={`
                object-contain
                mx-auto w-3/4 lg:px-0
                lg:w-auto
                shadow-xl lg:shadow-none
              `}
            />
          </div>
        </Fade>
      </div>
    );
  };

  const renderInfoColumn = () => {
    return (
      <div
        className={`
          col-span-1  mt-5 
          md:col-span-4
          lg:col-span-6 lg:mt-0 lg:${invert ? 'pr' : 'pl'}-32
        `}
      >
        <div
          className={`
            flex flex-col h-full
            items-center justify-center
          `}
        >
          <div
            className={`
              flex flex-row items-center
              justify-center w-full
            `}
          >
            <p
              className={`
                text-4xl font-bold text-center lg:px-3
                text-${theme.classes.sectionTitle}
              `}
            >
              {title}
            </p>
            <span
              className={`
              bg-${theme.classes.primary}
              px-1 ml-3 rounded text-sm text-white
            `}
            >
              {year}
            </span>
          </div>
          <div className="w-3/4">
            <p
              className={`
                text-base mt-3 mb-5
                text-${theme.classes.paragraph}
              `}
            >
              {description}
            </p>
            {!!experiences.length && (
              <ul className="my-8">
                {experiences.map((experience) => (
                  <li
                    className={`
                      list-disc text-sm text-${theme.classes.paragraph}
                    `}
                    key={experience}
                  >
                    {experience}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-row mt-4">
              {sourceCodeLink && (
                <a
                  href={sourceCodeLink}
                  className="mr-3 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button secondary block>
                    Ver código
                  </Button>
                </a>
              )}
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 w-full"
                >
                  <Button block>Visitar</Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`
        grid grid-cols-1
        md:grid-cols-8 lg:grid-cols-12
        gap-0 lg:gap-1 w-full
        ${className}
      `}
    >
      {invert && !isMobileOS() ? (
        <>
          {renderInfoColumn()}
          {renderImageColumn()}
        </>
      ) : (
        <>
          {renderImageColumn()}
          {renderInfoColumn()}
        </>
      )}
    </div>
  );
};

export default Work;
