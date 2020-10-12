/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const BigButtonStyle = styled.button`
  transition: all 300ms ease-in-out;
  box-shadow: ${({ themeColors, secondary }) =>
    secondary ? themeColors.secondaryBoxShadow : themeColors.boxShadow};
  :hover {
    box-shadow: ${({ themeColors, secondary }) =>
      secondary
        ? themeColors.secondaryBoxShadowHover
        : themeColors.boxShadowHover};
  }
`;

const Button = (props) => {
  const theme = useSelector((state) => state.settings.theme);

  const {
    className,
    noShadow,
    secondary,
    color,
    isResponsive = true,
    block = false,
  } = props;

  const buttonColor =
    color ||
    (secondary
      ? `bg-${theme.classes.secondary} hover:bg-${theme.classes.secondaryStrong}`
      : `bg-${theme.classes.primary} hover:bg-${theme.classes.primaryStrong}`);

  return (
    <BigButtonStyle
      {...props}
      themeColors={!noShadow && theme.colors}
      className={`
      ${buttonColor}
      text-${
        theme.themeName === 'dark'
          ? theme.classes.whitierPrimary
          : theme.classes.panels
      }
      font-bold py-2 px-4 rounded-full focus:outline-none
      ${isResponsive && !block ? 'w-full lg:' : ''}w-auto
      ${block ? 'w-full' : ''}
      ${className}
      `}
    />
  );
};

export default Button;
