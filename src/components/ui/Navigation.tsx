import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink
        className={(navData) => (navData.isActive ? 'active' : 'link')}
        end
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? 'active' : 'link')}
        to="/about"
        end
      >
        about
      </NavLink>
    </div>
  );
};

export default React.memo(Navigation);
