import Head from 'next/head'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - Kavi Pather</title>
      </Head>
      <header className="container py-lg">
        <h1 className="text-5xl font-bold leading-tight mt-8 mb-4">Kavi Pather</h1>
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <a href="/blog" className="hover:text-accent underline">Blog</a>
          <a href="/media" className="hover:text-accent underline">Media Links</a>
          <a href="/cv" className="hover:text-accent underline">CV</a>
        </nav>
      </header>
      <section className="container text-center">
        <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <p className="mt-4">
          <a href="/" className="text-accent underline hover:no-underline">Return home</a>
        </p>
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
