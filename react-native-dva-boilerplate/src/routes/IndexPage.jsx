import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage(props) {
  console.log('IndexPage props', props);
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <hr />
      <h2>计数器</h2>
      <button onClick={() => {
        console.log('onClick +');
        props.dispatch({ type: 'count/add' });
      }}>+</button>
      <button onClick={() => {
        console.log('onClick +');
        props.dispatch({ type: 'count/addDelay' });
      }}>*+</button>
      <button onClick={() => {
        console.log('onClick -');
        props.dispatch({ type: 'count/minus' });
      }}>-</button>
      {props.count}
      <hr />
    </div>
  );
}

IndexPage.propTypes = {
};

const mapStateToProps = ({ count }) => ({ count });

export default connect(mapStateToProps)(IndexPage);
