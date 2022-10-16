import { NavLink } from 'react-router-dom';
import { Navlink } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <>
      <Navlink to="/register">Register</Navlink>
      <Navlink to="/login">Log in</Navlink>
    </>
  );
};
