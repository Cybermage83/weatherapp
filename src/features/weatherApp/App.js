import React from "react";
import { globalReducer, GlobalStateContext } from './reducers'

import initialState from './reducers/initialState'
import { WeatherToday, WeekInfo } from './'
import { Container } from './styles'

function App() {
  const [globalState, dispatchToGlobal] = React.useReducer(
    globalReducer,
    initialState.state
  );

  return <GlobalStateContext.Provider value={{ state: globalState, dispatch: dispatchToGlobal }}>
    <div id="app">
      <Container>
        <WeatherToday />
        <WeekInfo />
      </Container>
    </div>
  </GlobalStateContext.Provider>
}

export default App;
