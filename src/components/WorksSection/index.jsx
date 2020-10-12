import React from 'react';
import Work from 'components/Work';
import { useSelector } from 'react-redux';

const WorksSection = ({
  title,
  description,
  backgroundClass,
  invert,
  customDivider,
  works = [],
  disclaimer,
}) => {
  const theme = useSelector((state) => state.settings.theme);

  return (
    <div
      className={`
      w-full mb-4
      py-5
      ${backgroundClass}
    `}
    >
      <div
        className={`
          mt-8
          mx-auto gradient
          w-64 my-0 py-0
          rounded-t
        `}
      >
        <h2
          className={`
            text-${theme.classes.sectionCaption}
            text-2xl text-center
            mb-5
          `}
        >
          {title}
        </h2>
      </div>
      <div
        className={`
          mb-12
          mx-auto gradient
          w-10/12 md:w-6/12 py-0
          rounded-t
        `}
      >
        <h3
          className={`
            text-${
              theme.themeName === 'dark'
                ? theme.classes.whiteyPrimary
                : theme.classes.primaryStronger
            }
            text-xl text-center
            mb-10
          `}
        >
          {description}
        </h3>
      </div>

      {works.map((work, i) => (
        <Work
          key={work.title}
          work={work}
          invert={invert && works.length > 2 && i % 2 === 1}
        />
      ))}

      {disclaimer && <p className="text-xl text-red-600 m-12">{disclaimer}</p>}

      {customDivider || <hr className="mt-24" />}
    </div>
  );
};

export default WorksSection;
