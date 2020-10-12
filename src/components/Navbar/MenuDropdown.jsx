/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { classNames, isMobileOS } from 'utils';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuDropdown = ({ label, items = [] }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const theme = useSelector((state) => state.settings.theme);

  return (
    <>
      <a
        href="#dropdown"
        onTouchStart={() => setIsMoreOpen(!isMoreOpen)}
        onBlur={() => {
          if (!isMobileOS()) setIsMoreOpen(false);
        }}
        onMouseEnter={() => setIsMoreOpen(true)}
        className={`
            text-${theme.classes.paragraph}
            hover:text-${theme.classes.menuHover}
            mt-4 lg:mt-0
            flex flex-row items-center
            lg:justify-center w-auto
        `}
      >
        <p>{label}</p>
        <Icon
          containerClass="mr-6"
          color="text-gray-800"
          size={4}
          icon="chevron-down"
        />
      </a>
      <div className="ml-3 relative">
        <div
          className={`
          ${isMoreOpen ? '' : 'hidden'}
          lg:absolute lg:right-0 mt-6
          rounded-md lg:shadow-lg
          relative w-64 px-8 lg:px-0
          text-center lg:text-left
        `}
        >
          <div
            className={`
              bg-${theme.classes.panels}
              rounded-md shadow-xs
            `}
            onMouseLeave={() => setIsMoreOpen(false)}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            {items.map(({ label: itemLabel, action }, index) => (
              <Link
                key={`${itemLabel}--${index}`}
                to={typeof action === 'string' ? action : '#'}
                onClick={typeof action === 'function' ? action : () => {}}
                className={classNames(
                  `block px-4 py-2 text-sm leading-5 `,
                  `text-${theme.classes.paragraph}`,
                  `hover:bg-${theme.classes.primary}`,
                  `focus:outline-none focus:bg-${theme.classes.primary}`,
                  `hover:text-${theme.classes.panels} transition duration-150`,
                  `ease-in-out h-full`,
                  !index
                    ? `${items.length > 1 ? 'rounded-t-md' : 'rounded-md'}`
                    : `${index === items.length - 1 ? 'rounded-b-md' : ''}`,
                )}
                role="menuitem"
              >
                {itemLabel}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDropdown;
