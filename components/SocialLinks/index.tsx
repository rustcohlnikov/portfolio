import React, { FC } from 'react'
import Image from 'next/image'
import listStyles from '../../styles/List.module.css'
import styles from '../../styles/Social.module.css'
import { SocialLink } from '@type'

interface Props {
    links: Array<SocialLink>
}

const Social: FC<Props> = ({ links = [] }) => {
    return (
        <div className={styles.root}>
            <div className={styles.social}>
                <ul className={listStyles.list}>
                    {links && links.map((item: SocialLink) => (
                        <li className={listStyles.item} key={item.name}>
                            <a href={item.href} target="_blank">
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