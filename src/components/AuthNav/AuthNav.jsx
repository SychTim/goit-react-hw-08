import { Link } from "react-router-dom";
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.box}>
      <Link to="/register">Registr</Link>
      <Link to="/logIn">Log in</Link>
    </div>
  );
}
