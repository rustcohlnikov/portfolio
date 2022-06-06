
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
        <title>About | Nazym Jumadilova</title>
        <meta name="description" content="About | Nazym Jumadilova" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header dark />

      <main className={pageStyles.about}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2" />
            <div className="col-lg-5">
              <div className={pageStyles.text}>
                <h1 className={pageStyles.title}>About</h1>
                <p>
                  Etiam quis odio eu nisl luctus dignissim a sed augue. Mauris vel aliquet orci. Etiam non blandit lacus. Proin vehicula ullamcorper lectus, a euismod magna vulputate sed. Donec lacinia odio id diam sodales, in consequat enim convallis. Nunc et justo et risus condimentum facilisis. Aenean in odio non nulla placerat feugiat.
                </p>
                <p>
                  Nam commodo nulla urna, vel faucibus lectus malesuada sit amet. Donec congue nunc posuere, convallis elit imperdiet, tempor erat. Vivamus a neque convallis, dignissim nibh in, placerat eros. Praesent libero odio, feugiat id justo vitae, tempus sagittis ante. Pellentesque accumsan pulvinar eros, a elementum odio feugiat nec. Pellentesque tempus purus et massa aliquet ornare. Quisque convallis feugiat libero eget pretium. Etiam vel interdum quam. Curabitur tempor porta mauris. Phasellus quis dui vitae risus mollis fermentum.
                </p>

                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc aliquam felis et mattis dictum. Sed pretium ut odio vitae dapibus. Maecenas ac nunc quam. Vivamus lacinia ligula neque, ut tristique lectus mattis a. Morbi quis orci nec enim volutpat venenatis.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
