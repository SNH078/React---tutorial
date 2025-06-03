// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import YESref from './YESref.jsx'
import NOref from '../../13.useREF/src/NOref.jsx'
import Timer from './Timer.jsx'
import DomColor from './DomColor.jsx'

createRoot(document.getElementById('root')).render(
<>
    <NOref/>
    <YESref />    
    <DomColor/>
    <Timer/>
    </>

)
