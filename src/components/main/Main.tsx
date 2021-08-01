/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useAppSelector } from '../../hooks/hooks';

function Main() {
  const count = useAppSelector((state) => state.countries.countryList);
  return (
    <main>
      <div>Hello</div>
    </main>
  );
}

export default Main;
