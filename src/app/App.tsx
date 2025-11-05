import './App.css'
import MainLayout from '../shared/layouts/MainLayout'
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import Modal from '../shared/ui/Modal/Portal'
import { useModal } from '../shared/lib/modal/useModal'

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
        
        <MainLayout></MainLayout>
      </ThemeProvider>
    </>
  )
}

export default App
