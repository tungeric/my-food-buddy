import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import FoodIndexContainer from './food_index/food_index_container';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Route path='/foods' component={FoodIndexContainer} />
      </div>
    );
  }
}

export default App;