import React from 'react';
import renderer from 'react-test-renderer';
import EditorGreen from './EditorGreen';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../../reducers'
const store = createStore(reducers)

test('Editor renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><EditorGreen /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});