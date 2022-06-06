
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import pageStyles from '../styles/Page.module.css'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={pageStyles.container}>
      <Head>
        <title>Gallery | Nazym Jumadilova</title>
        <meta name="description" content="Gallery | Nazym Jumadilova" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header dark />

      <main className={pageStyles.main}>
        <div>
          gallery
        </div>
      </main>
    </div>
  )
}

export default Home
