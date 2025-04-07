import { memo } from 'react';
import styles from './Logo.module.css';

export function Logo({ image }) {
	return <img className={styles.logo} src={image} alt="Логотип журнала"></img>;
}

export default memo(Logo);
