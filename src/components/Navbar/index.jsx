/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { classNames, toggleChat } from 'utils';
import BigButton from 'components/Button';
import Icon from 'components/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { types as themeTypes } from 'redux/ducks/settings';
import menuItems from 'constants/menu';
import MenuDropdown from './MenuDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location]);

  return (
    <nav
      className={`
        flex items-center justify-between flex-wrap
        bg-${theme.classes.panels}
        py-6 px-6 lg:px-32 shadow-xl mb-5 w-full fixed z-40
      `}
    >
      <Icon
        containerClass="mr-6"
        color={`text-${theme.classes.primary}`}
        size={10}
        icon="code"
      >
        <Link to="/" className="font-semibold text-2xl tracking-tight pl-3">
          React Tailwind
        </Link>
      </Icon>

      <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`
            text-${theme.classes.primary}
            flex items-center
            rounded
            px-3 py-2
            focus:outline-none
          `}
        >
          <Icon
            color={`
              text-${
                theme.themeName === 'dark'
                  ? theme.classes.whiteyPrimary
                  : theme.classes.primaryStrong
              }
              hover:text-${
                theme.themeName === 'dark'
                  ? theme.classes.primaryStrong
                  : theme.classes.whiteyPrimary
              }
            `}
            size={8}
            icon={isMenuOpen ? 'close' : 'menu'}
          />
        </button>
      </div>
      <div
        className={`
          ${isMenuOpen ? '' : 'hidden'}
          w-full block flex-grow lg:flex
          lg:items-center lg:w-auto
        `}
      >
        <div
          className={`
            text-md lg:flex-grow flex
            lg:justify-end flex-col lg:flex-row
            items-center
          `}
        >
          {menuItems
            .filter(({ items, hideInNavbar }) => !items && !hideInNavbar)
            .map(({ label, action }) => (
              <Link
                key={label}
                onClick={() => setIsMenuOpen(false)}
                to={action}
                className={classNames(
                  'block mt-4 lg:inline-block lg:mt-0',
                  location.pathname === action
                    ? `text-${theme.classes.primary}`
                    : `text-${theme.classes.paragraph}`,
                  `hover:text-${theme.classes.menuHover}`,
                  'mr-4',
                )}
              >
                {label}
              </Link>
            ))}

          {menuItems
            .filter(({ items }) => !!items)
            .map(({ label, items }) => (
              <MenuDropdown label={label} items={items} />
            ))}
          <div>
            <BigButton
              onClick={toggleChat}
              className="ml-0 mt-5 lg:mt-0 lg:ml-20"
            >
              Entre em contato
            </BigButton>
          </div>
          <button
            type="button"
            onClick={() => {
              dispatch({
                type: themeTypes.SET_THEME,
                payload: theme.themeName === 'dark' ? 'light' : 'dark',
              });
            }}
            className="focus:outline-none"
          >
            <Icon
              color={`
                mt-5 mb-3 lg:mt-0 lg:mb-0 lg:ml-5
                text-${
                  theme.themeName === 'dark'
                    ? theme.classes.whiteyPrimary
                    : theme.classes.primaryStrong
                }
                hover:text-${
                  theme.themeName === 'dark'
                    ? theme.classes.primaryStrong
                    : theme.classes.whiteyPrimary
                }
              `}
              size={8}
              icon={theme.themeName === 'dark' ? 'moon' : 'light'}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
