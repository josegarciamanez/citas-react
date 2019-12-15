import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header className="text-center bg-primary p-2">
    <h1 className="mt-3">{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header;