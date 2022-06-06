
import { SocialLink } from '@type'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Social from '../components/SocialLinks'
import Header from '../components/Header'
import pageStyles from '../styles/Page.module.css'
import styles from '../styles/Home.module.css'
import { SOCIAL_LINKS } from '../constants'
import background from '../public/bg2.webp'

const Home: NextPage = () => {
  return (
    <div className={pageStyles.container}>
      <Head>
        <title>Nazym Jumadilova | Frontend and Photography</title>
        <meta name="description" content="Nazym Jumadilova | Frontend and Photography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.background}>
        <Image
          alt="hand touching pink flowers"
          src={background}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          quality={100}
          priority
        />
      </div>

      <div className="container">
        <div className={styles.vertical} />
      </div>

      <Header />

      <main className={pageStyles.main}>
        <div className={styles.content}>
          <div className="row">
            <div className="col-2 col-md-4"><Social links={SOCIAL_LINKS} /></div>
            <div className="col-6 col-md-4" />
            <div className="col-4 col-md-4">
              <div className={styles.titleContainer}>
                <div className={styles.titleWrapper}>
                  <span className={styles.subtitle}>Software Engineer and Photographer</span>
                  <h1 className={styles.title}>
                    Nazym Jumadilova
                  </h1>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Home
