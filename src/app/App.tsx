// import { useState } from 'react'
import './App.css'
import Header from '../widgets/LayoutHeader/Header'
import Footer from '../widgets/LayoutFooter/Footer'
import MainLayout from '../shared/layouts/MainLayout'
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import Modal from '../shared/ui/Modal/Portal'
import Button from '../shared/ui/Button/Button'
import styles from "./styles.module.css"
import { useModal } from '../shared/lib/modal/useModal'
import { ModalProvider } from '../shared/lib/modal/ModalProvider'

function App() {

  // const [ isModal, switchModal ] = useState(false)

  // const handleClick = () => {
  //     switchModal(!isModal)
  //     document.body.style.overflow = isModal ? 'auto' : 'hidden'
  // }

  const { isModal, handleClick } = useModal();

  return (
    <>
      <ThemeProvider>
        {
          isModal ? <Modal>
            <div className={styles.modalContainer}>
              <Button handleClick={handleClick} title='close' buttonClass="close-modal"></Button>
              <h2>Учебный проект</h2>
              <p>Сувориной Ольги</p>
            </div>
          </Modal> : null
        }
        <Header>
              <Button handleClick={handleClick} title='About' buttonClass="about"></Button>
        </Header>
        <MainLayout></MainLayout>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
