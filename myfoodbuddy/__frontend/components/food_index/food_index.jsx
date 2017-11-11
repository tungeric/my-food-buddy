import React from 'react';
import { Link } from 'react-router-dom';

class FoodIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      food: this.props.food
    };
  }

  componentDidMount() {
    this.props.getAllFoods();
  }

  render () {
    console.log(this.props);
    const { foods } = this.props;
    console.log(foods);

    return(
      <div>
        
      </div>
    );
  }
}

export default FoodIndex;