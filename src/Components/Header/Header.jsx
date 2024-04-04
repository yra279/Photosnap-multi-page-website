import React from "react";
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="./logo.svg" alt="" className={styles.header__logo} />
            <nav className={styles.header__nav}>
                <a href="" className={styles.header__link}>STORIES</a>
                <a href="" className={styles.header__link}>FEATURES</a>
                <a href="" className={styles.header__link}>PRICING</a>
            </nav>
            <button type="button" className={styles.header__button}>GET AN INVITE</button>
        </header>
    );
}