// import { useState } from 'react'
import './App.css'
import Header from '../widgets/LayoutHeader/Header'
import Footer from '../widgets/LayoutFooter/Footer'
import MainLayout from '../shared/layouts/MainLayout'

function App() {

  return (
    <>
      <Header></Header>
      <MainLayout></MainLayout>
      <Footer></Footer>
    </>
  )
}

export default App
