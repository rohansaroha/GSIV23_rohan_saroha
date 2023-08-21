import React from 'react';
import { render } from '@testing-library/react';
import Search from '../index';

describe('Search Tests', () => {
   test('Search snapshot', () => {
      const component = render(<Search />);
      expect(component).toMatchSnapshot();
   });
});
