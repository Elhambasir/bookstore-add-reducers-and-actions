import { NavLink } from 'react-router-dom';
import styles from '../styles/navigation.module.css';

const links = [
  { path: '/', text: 'BOOKLIST' },
  { path: '/Categories', text: 'CATEGORIES' },
];
const Navbar = () => (
  <>
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarWrapperNav}>
        <div className={styles.navbarBrand}>
          <h2>Bookstore CMS</h2>
        </div>
        <div className={styles.navbarNav}>
          <nav className={styles.navbar}>
            <ul className={styles.ul}>
              {links.map((link) => (
                <li className={styles.li} key={link.text}>
                  <NavLink className={styles.navItem} to={link.path}>{link.text}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.navbarWrapperProfile}>
          <span>
            <i className="uil uil-user-circle" />
          </span>
        </div>
      </div>
    </div>
  </>
);
export default Navbar;
