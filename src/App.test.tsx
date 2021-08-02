import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import App from './App';

describe('test main', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  beforeEach(() => {
    useDispatchMock.mockClear();
  });
  // afterEach(() => {
  //   cleanup();
  // });
  test('Header renders', () => {
    // render(<App />);
    //   // useSelectorMock.mockReturnValue([{
    //   //   capital: 'Kabul',
    //   //   flag: 'https://restcountries.eu/data/afg.svg',
    //   //   name: 'Afghanistan',
    //   //   population: 27657145,
    //   //   region: 'Asia',
    //   // }]);

  //   const headerTitle = screen.getByText(/Kabul/i);
  // });
  });
});
