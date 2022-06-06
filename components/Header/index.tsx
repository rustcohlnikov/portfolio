import React, { FC } from 'react'
import Link from 'next/link'
import listStyles from '../../styles/List.module.css'
import styles from '../../styles/Header.module.css'

interface Props {
  dark?: boolean;
}

const Header: FC<Props> = ({ dark }) => {
  return (
    <header>
      <div className={styles.container}>
        <div className="row">
          <div className="col-12">
            <div className={styles.header}>
              <div className={dark ? styles.dark : styles.light}>
                <ul className={listStyles.list}>
                  <li className={listStyles.item}><Link href="/"><a>Home</a></Link></li>
                  <li className={listStyles.item}><Link href="/gallery"><a>Gallery</a></Link></li>
                  <li className={listStyles.item}><Link href="/about"><a>About</a></Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

    </header>
  )
}


export default Header