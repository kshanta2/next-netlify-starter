import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { fetchEntries } from '../utils/contentfulPosts';
import Post from '@components/Post'

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div className="posts">
          {props.posts.map((p) => {
          return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
           })}
        </div>
      </main>

      <Footer />
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}