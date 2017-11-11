import React from 'react';
import { Link } from 'react-router-dom';

class FoodIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllFoods();
  }

  render () {
    console.log(this.props);
    return(
      <div>
        <h1>
          hi
        </h1>
      </div>
    );
  }
}

export default FoodIndex;