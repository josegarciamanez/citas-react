import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="text-center bg-primary p-2">
      <h1 className="mt-3">{title}</h1>
    </header>
  );
}

export default Header;