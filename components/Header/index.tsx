import React, { FC } from "react";
import Link from "next/link";
import pageStyles from "../../styles/Page.module.css";
import listStyles from "../../styles/List.module.css";
import styles from "../../styles/Header.module.css";

interface Props {
  dark?: boolean;
}

const Header: FC<Props> = ({ dark = true }) => {
  return (
    <header className={pageStyles.header}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={dark ? styles.dark : styles.light}>
            <ul className={listStyles.list}>
              <li className={listStyles.item}><Link className={styles.link} href="/">Home</Link></li>
            </ul>
          </div>
        </div>
      </div>

    </header>
  );
};


export default Header;