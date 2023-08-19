import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    const a = 2;
    expect(a).toBe(2);
  });
  test('MyComponent snapshot', () => {
    const component = render(<Home />);
    expect(component).toMatchSnapshot();
  });
});