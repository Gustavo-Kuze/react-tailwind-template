export const loadState = () => {
  try {
    const state = localStorage.getItem('global_state');
    if (state === null) return undefined;
    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const stateJson = JSON.stringify(state);
    localStorage.setItem('global_state', stateJson);
  } catch (err) {
    //
  }
};

export const deleteState = () => {
  try {
    localStorage.removeItem('state');
    localStorage.clear();
  } catch (err) {
    console.log('Ocorreu um erro ao limpar o estado');
    console.error(err);
  }
};
