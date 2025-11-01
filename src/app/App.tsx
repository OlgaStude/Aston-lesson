import './App.css'
import Header from '../widgets/LayoutHeader/Header'
import Footer from '../widgets/LayoutFooter/Footer'
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
          isModal ? <Modal>
            <Modal.Container>
              <Modal.Header></Modal.Header>
              <Modal.Body></Modal.Body>
            </Modal.Container>
          </Modal> : null
        }
        <Header></Header>
        <MainLayout></MainLayout>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
