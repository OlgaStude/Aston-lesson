import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import { ModalProvider } from './shared/lib/modal/ModalProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './app/providers/store/store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

    <ModalProvider>
      <App />
    </ModalProvider>
    </Provider>
  </StrictMode>,
)
