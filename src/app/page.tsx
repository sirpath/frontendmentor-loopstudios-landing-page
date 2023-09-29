import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import GridGallery from '@/components/GridGallery'
import NavBar from '@/components/NavBar'
import Problem from '@/components/Problem'

export const metadata: Metadata = {
  title: 'Frontendmentor | Loopstudios Landing Page',
  description: 'Challenge',
}

const PageHome = () => (
  <main className="max-w-7xl">
    <NavBar />
    <main>
      <Problem />
      <GridGallery />
      <Footer />
    </main>
  </main>
)

export default PageHome
