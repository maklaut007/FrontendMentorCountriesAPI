import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Main from './Main';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('test main', () => {
  const somethingSpy = jest.spyOn(reactRedux, 'useSelector');
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('Header renders', () => {
    render(<Main />);
    expect(somethingSpy).toBeCalled();
  });
});
