import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Image from 'next/image'

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
        <title>Kavi Pather — AI & Analytics Leader</title>
        <meta
          name="description"
          content="Kavi Pather is an AI and analytics leader focused on enterprise transformation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="container py-lg">
        <h1 className="text-5xl font-bold leading-tight mt-8 mb-4">Kavi Pather</h1>
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <a href="/blog" className="hover:text-accent underline">Blog</a>
          <a href="/media" className="hover:text-accent underline">Media Links</a>
          <a href="/cv" className="hover:text-accent underline">CV</a>
        </nav>
      </header>

      <div className="container my-6">
        <Image
          src="/images/hero.jpg"
          alt="Johannesburg city skyline at dusk"
          width={1920}
          height={1080}
          className="w-full h-auto"
          placeholder="blur"
          blurDataURL="/images/hero.jpg"
        />
      </div>

      <section className="container">
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

      <section className="container mt-12">
        <h2 className="text-3xl font-semibold mb-4">Updates</h2>
        <ul className="pt-8 pb-12">
          {posts.slice(0, 6).map((post) => (
            <li key={post.date} className="grid grid-cols-[auto,1fr] gap-4 border-b py-2">
              <span className="text-sm text-gray-500 w-24 font-mono">{post.date}</span>
              <span>{post.title}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <a href="/blog" className="hover:text-accent">More…</a>
        </div>
      </section>

      <section className="container">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <ul className="space-y-2">
          <li>
            <span className="font-semibold">Name:</span> Kavi Pather
          </li>
          <li>
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:someone@example.com" className="hover:text-accent">
              someone@example.com
            </a>
          </li>
          <li>
            <span className="font-semibold">Affiliation:</span> EY
          </li>
          <li>
            <span className="font-semibold">Location:</span> Johannesburg
          </li>
        </ul>
      </section>

      <footer className="container border-t border-gray-200 mt-xl pt-lg text-sm text-gray-500">
        <div className="flex flex-wrap justify-between items-center gap-6 md:gap-8">
          <span>© Kavi Pather</span>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/kavipather/" aria-label="LinkedIn">🔗</a>
            <a href="https://x.com/kavi_pather" aria-label="X">✖️</a>
            <a href="https://youtube.com/channel/UChMl5Ua89sbb9ie10bVbHTQ" aria-label="YouTube">▶️</a>
          </div>
        </div>
      </footer>
    </>
  )
}
