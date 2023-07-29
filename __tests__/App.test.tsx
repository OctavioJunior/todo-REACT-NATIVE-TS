import React from 'react';
import App from '../App';
import {it} from '@jest/globals';
import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  const {debug} = render(<App />);

  debug();
});
