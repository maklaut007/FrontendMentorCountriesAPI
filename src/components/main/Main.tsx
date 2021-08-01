import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectCountries } from '../../store/countriesSlice';

function Main() {
  const count = useAppSelector(selectCountries);
  return (
    <main>
      <div>Hello</div>
    </main>
  );
}

export default Main;
