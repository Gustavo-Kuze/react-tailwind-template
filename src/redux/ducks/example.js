export const typesPrefix = '@example';

export const types = {
  SET_EXAMPLE: `${typesPrefix}/SET_EXAMPLE`,
  SET_IS_LOADING: `${typesPrefix}/SET_IS_LOADING`,
  FETCH_EXAMPLE: `${typesPrefix}/FETCH_EXAMPLE`,
};

const INITIAL_STATE = {
  example: null,
  isLoading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SET_IS_LOADING:
      return { ...state, isLoading: payload };
    case types.SET_EXAMPLE:
      return { ...state, example: payload };
    default:
      return state;
  }
};

export const fetchExampleAction = () => ({
  type: types.FETCH_EXAMPLE,
});

export const setExampleAction = (payload) => ({
  type: types.SET_EXAMPLE,
  payload,
});
