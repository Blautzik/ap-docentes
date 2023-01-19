import { CMS_NAME, CMS_URL } from '../lib/constants'
import SectionSeparator from './section-separator'

export default function Intro() {
  return (
    <>
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-8xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Docentes.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        informes de supervisión de Argentina Programa 4ta edición.   
      </h4>
      
    </section>
    <SectionSeparator />
    </>
  )
}
