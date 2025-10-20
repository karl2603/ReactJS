import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/* import {Rendering} from './ConRendering.jsx'
import {Map} from './map.jsx' */
import{DisplayStudents} from "./mapCon.jsx"


createRoot(document.getElementById('root')).render(
  // <Rendering />
  // <Map />
  <DisplayStudents />
)
