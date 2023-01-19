import SelectorLinks from "./selector-links"
import { useState } from "react"
import { VscChevronDown } from "react-icons/vsc"


const Selector = ({ posts }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={()=> setOpen(!open)} className='text-4xl flex items-end mb-24'>seleccionar docente <VscChevronDown /> </button>
      { open &&
      <SelectorLinks posts={posts}
      />
      }
      
    </div>
  )
}

export default Selector