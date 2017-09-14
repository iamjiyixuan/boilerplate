import { connect } from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickIncrementButton: () => {
      // dispatch({ type: 'INCREMENT' });
      dispatch({ type: 'INCREMENT_ASYNC' });
    },
    onClickDcrementButton: () => {
      dispatch({ type: 'DECREMENT' });
    }
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;