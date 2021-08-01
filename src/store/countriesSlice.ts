/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface Country {
    name: string,
    flag: string,
    capital: string,
    region: string,
    population: number
}

interface CountriesState {
  countryList: Country[];
}

const initialState: CountriesState = {
  countryList: [],
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addCountries: (state, action: PayloadAction<Country[]>) => {
      state.countryList = state.countryList.concat(action.payload);
    },
  },
});

export const { addCountries } = countriesSlice.actions;

export const selectCount = (state: RootState) => state.countries;

export default countriesSlice.reducer;
