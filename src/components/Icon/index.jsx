/* eslint-disable max-len */
import React from 'react';
import iconConfig from 'assets/entypo/icons.json';

const Icon = ({
  icon,
  containerClass,
  svgClass,
  color = 'text-gray-800',
  size = 4,
  children,
}) => {
  return (
    <div
      className={`
        flex items-center flex-shrink-0 ${color}
        ${containerClass}
      `}
    >
      <svg
        version="1.1"
        id="Code"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        className={`
          fill-current ${color} h-${size} w-${size} font-light
          ${svgClass}
        `}
        viewBox="0 0 20 20"
        xmlSpace="preserve"
      >
        <path d={iconConfig[icon]} />
      </svg>
      {children}
    </div>
  );
};

export default Icon;
