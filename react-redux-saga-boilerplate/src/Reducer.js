export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('action INCREMENT => reducer', state + 1);
      return state + 1;
    case 'DECREMENT':
      console.log('action DECREMENT => reducer', state - 1);
      return state - 1;
    default:
      return state;
  }
}