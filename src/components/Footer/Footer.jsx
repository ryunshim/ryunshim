import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <svg onClick={() => window.open("mailto:rs2279@cornell.edu", "_blank")} width="16" height="15" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#757575" />
          </svg>
          <svg onClick={() => window.open("https://www.linkedin.com/in/ryunshim/", "_blank")} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.63269 15V4.87953H0.202386V15H3.63269ZM1.91798 3.49692C3.11419 3.49692 3.85877 2.71978 3.85877 1.74862C3.83648 0.755565 3.11423 0 1.94068 0C0.767312 0 0 0.75558 0 1.74862C0 2.71983 0.744398 3.49692 1.89559 3.49692H1.91787H1.91798ZM5.53135 15H8.96165V9.34824C8.96165 9.04576 8.98394 8.7436 9.07452 8.52738C9.32251 7.92304 9.88693 7.29712 10.8345 7.29712C12.0758 7.29712 12.5724 8.2252 12.5724 9.5857V14.9999H16.0025V9.19695C16.0025 6.08834 14.3101 4.64193 12.0532 4.64193C10.2027 4.64193 9.39021 5.65626 8.93883 6.34712H8.96173V4.87932H5.53143C5.57644 5.82897 5.53143 14.9998 5.53143 14.9998L5.53135 15Z" fill="#757575" />
          </svg>
        </div>
        <div className={styles.right}>
          <nav className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : null)}>Work</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : null)}>About</NavLink>
            <NavLink to="/art" className={({ isActive }) => (isActive ? styles.active : null)}>Art</NavLink>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? styles.active : null)}>Resume/CV</NavLink>
          </nav>
        <p className={styles.copyright}>© 2023 Ryun Shim</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;