import Head from 'next/head'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - Kavi Pather</title>
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
      <section className="max-prose text-center">
        <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
        <p>The page you&#39;re looking for doesn&#39;t exist.</p>
        <p className="mt-4">
          <a href="/" className="text-accent underline hover:no-underline">Return home</a>
        </p>
      </section>
    </>
  )
}
