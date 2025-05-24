import fs from 'fs'
import path from 'path'
import Head from 'next/head'

interface Post {
  date: string
  title: string
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'blog')
  const posts: Post[] = fs.readdirSync(dir).map((name) => {
    const content = fs.readFileSync(path.join(dir, name), 'utf8')
    const dateMatch = content.match(/date:\s*(.*)/)
    const titleMatch = content.match(/title:\s*"(.*)"/)
    return {
      date: dateMatch ? dateMatch[1] : '',
      title: titleMatch ? titleMatch[1] : name.replace('.md', '')
    }
  })
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  return { props: { posts } }
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Kavi Pather</title>
      </Head>
      <header className="flex justify-between items-center py-lg max-prose">
        <h1 className="text-3xl font-bold leading-tight">
          <span className="block">Kavi</span>
          <span className="block">Pather</span>
        </h1>
        <nav className="flex items-center space-x-4">
          <div className="flex space-x-2 mr-4">
            <a href="https://www.linkedin.com/in/kavipather/" aria-label="LinkedIn">🔗</a>
            <a href="https://x.com/kavi_pather" aria-label="X">✖️</a>
            <a href="https://youtube.com/channel/UChMl5Ua89sbb9ie10bVbHTQ" aria-label="YouTube">▶️</a>
          </div>
          <a href="/blog" className="hover:text-accent">Blog</a>
          <a href="/media" className="hover:text-accent">Media Links</a>
          <a href="/cv" className="hover:text-accent">CV</a>
        </nav>
      </header>

      <img src="/images/hero.jpg" alt="Cityscape" className="w-full h-auto" />

      <section className="max-prose">
        <p>
          I'm an <strong>AI and analytics leader</strong> working at the intersection of
          technology, business, and human potential. With a foundation in
          consulting and a passion for systems thinking, I help organizations not
          just adopt AI—but integrate it meaningfully to reimagine how they
          operate, compete, and serve. My work spans agentic AI, enterprise
          transformation, and real-world deployment across emerging markets, with
          a particular focus on financial services. I’m driven by a belief that
          the right combination of design, data, and judgement can unlock not
          only performance—but purpose.
        </p>
      </section>

      <section className="max-prose">
        <h2 className="text-xl font-semibold mb-4">Updates</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.date} className="flex justify-between border-b py-2">
              <span className="text-sm text-right w-32 font-mono">{post.date}</span>
              <span className="flex-1 ml-4">{post.title}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <a href="/blog" className="hover:text-accent">More…</a>
        </div>
      </section>

      <section className="max-prose">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <p><strong>Kavi Pather</strong></p>
        <p><a href="mailto:someone@example.com">someone@example.com</a></p>
        <p><strong>Affiliation:</strong> EY</p>
        <p>Johannesburg</p>
      </section>

      <footer className="text-center text-sm text-gray-500 py-lg">
        © Kavi Pather
      </footer>
    </>
  )
}
