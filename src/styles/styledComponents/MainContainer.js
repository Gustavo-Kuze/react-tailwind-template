import styled from 'styled-components';

const MainContainer = styled.div.attrs({
  className: 'w-full mx-auto',
})`
  background: ${({ currentTheme }) => currentTheme.colors.background};
  background: -webkit-linear-gradient(
    to right,
    ${({ currentTheme }) => currentTheme.colors.gradient.from},
    ${({ currentTheme }) => currentTheme.colors.gradient.to}
  );
  background: linear-gradient(
    to right,
    ${({ currentTheme }) => currentTheme.colors.gradient.from},
    ${({ currentTheme }) => currentTheme.colors.gradient.to}
  );
`;

export default MainContainer;
