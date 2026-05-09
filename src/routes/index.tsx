import { createFileRoute } from '@tanstack/react-router'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import SectionDivider from '@/components/section-divider'
import Skills from '@/components/Skills'
import ActiveSectionContextProvider from '@/context/active-section-context'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#272525]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <div className="pt-28 sm:pt-36">
        <ActiveSectionContextProvider>
          <Header />
          <main className="flex flex-col items-center px-4">
            <About />
            <SectionDivider />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </ActiveSectionContextProvider>
      </div>
    </>
  )
}
