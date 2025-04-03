import styles from './Header.module.css';

function Header({ children }) {
	return <div className={styles.logo}>Personal Journal</div>;
}

export default Header;
