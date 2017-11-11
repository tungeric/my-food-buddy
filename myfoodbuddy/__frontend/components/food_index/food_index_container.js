import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FoodIndex from './food_index';
import { merge } from 'lodash';
import { getAllFoods } from '../../actions/foodActions';

const mapStateToProps = (state, props) => {
  return {
    foods: state.foods
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllFoods: () => dispatch(getAllFoods()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FoodIndex));
