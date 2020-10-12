export const typesPrefix = '@tips';

const types = {
  SET_GISTS: `${typesPrefix}/SET_GISTS`,
  SET_IS_LOADING: `${typesPrefix}/SET_IS_LOADING`,
  FETCH_GISTS: `${typesPrefix}/FETCH_GISTS`,
};

const INITIAL_STATE = {
  gists: [],
  isLoadingGists: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SET_IS_LOADING:
      return { ...state, isLoadingGists: payload };
    case types.SET_GISTS:
      return { ...state, gists: payload };
    default:
      return state;
  }
};

export const fetchGistsAction = () => ({
  type: types.FETCH_GISTS,
});

export const setIsGistsLoadingAction = (isLoading) => ({
  type: types.SET_IS_LOADING,
  payload: isLoading,
});

export const setGistsAction = (payload) => ({
  type: types.SET_GISTS,
  payload,
});

export { types as tipsTypes };
