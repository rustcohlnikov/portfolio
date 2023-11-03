import React, { FC } from 'react'
import Image from 'next/image'
import styles from '../../styles/Social.module.css'
import { SocialLink } from '@type'

interface Props {
  links: Array<SocialLink>
}

const Social: FC<Props> = ({ links = [] }) => {
  return (
    <div className={styles.root}>
      <div className={styles.social}>
        <ul className={styles.list}>
          {links && links.map((item: SocialLink) => (
            <li className={styles.item} key={item.name}>
              <a href={item.href} rel={item.rel || 'noopener'} className={styles.link} target="_blank">
                <Image
                  src={`/${item.name}.svg`}
                  alt={item.name || item.alt}
                  width={16}
                  height={16}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}


export default Social