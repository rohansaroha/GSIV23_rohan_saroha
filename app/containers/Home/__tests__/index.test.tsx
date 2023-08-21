import React from 'react';
import { render } from '@testing-library/react';
import Home from '..';

describe('Home Container', () => {
   test('Home snapshot', () => {
      const component = render(<Home />);
      expect(component).toMatchSnapshot();
   });
});
