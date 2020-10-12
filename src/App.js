import React from 'react';
import MainContainer from 'styles/styledComponents/MainContainer';
import './styles/tailwind-output.css';
import './styles/animations.css';
import store from 'redux/store';
import { Provider } from 'react-redux';
import { saveState } from 'redux/persist';
import Routes from './Routes';

store.subscribe(() => {
  saveState({
    settings: store.getState().settings,
  });
});

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer currentTheme={store.getState().settings.theme}>
        <Routes />
      </MainContainer>
    </Provider>
  );
};

export default App;
