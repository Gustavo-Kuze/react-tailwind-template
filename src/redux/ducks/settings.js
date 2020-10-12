import theme from 'styles/theme';

export const typesPrefix = '@settings';

export const types = {
  SET_THEME: `${typesPrefix}/SET_THEME`,
};

const INITIAL_STATE = {
  theme: {
    ...theme.light,
    themeName: 'light',
  },
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SET_THEME:
      return { ...state, theme: { ...theme[payload], themeName: payload } };
    default:
      return state;
  }
};

export const setTheme = (payload) => ({
  type: types.SET_THEME,
  payload,
});
