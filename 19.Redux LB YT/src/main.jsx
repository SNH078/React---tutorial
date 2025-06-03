import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './App.jsx'
import {store} from './components/MyStore.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>,
)
