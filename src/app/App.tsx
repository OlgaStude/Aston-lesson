import './App.css'
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import Modal from '../shared/ui/Modal/Portal'
import { useModal } from '../shared/lib/modal/useModal'
import { RouterProvider } from 'react-router-dom'
import { MyRouter } from './providers/router/Router'

function App() {

  const { isModal } = useModal();

  return (
    <>
      <ThemeProvider>
        {
          isModal ? <Modal.Container>
              <Modal.Header></Modal.Header>
              <Modal.Body></Modal.Body>
            </Modal.Container>
          : null
        }
        <RouterProvider router={MyRouter}></RouterProvider>
      </ThemeProvider>
    </>
  )
}

export default App
