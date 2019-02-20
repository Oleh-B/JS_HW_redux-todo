import React from 'react';
import Header from './components/Header';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';

const App = () => {
  return (
      <main className="App">
        <Header title="React-Redux Todo"/>
        <ListContainer  />
        <FormContainer />
      </main>
  );
}

export default App;
