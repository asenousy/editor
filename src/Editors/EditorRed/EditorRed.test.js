import React from 'react';
import renderer from 'react-test-renderer';
import EditorRed from './EditorRed';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../../reducers'
const store = createStore(reducers)

test('Editor renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><EditorRed /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});