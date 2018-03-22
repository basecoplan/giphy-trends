import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <section>
      <Link to='/gifs'>Gifs</Link>
      <Link to='/about'>About</Link>
    </section>
  );
}