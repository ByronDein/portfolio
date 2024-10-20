import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/header.jsx'
import Container from './components/container/Container.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <Header />
    </Container>
  </StrictMode>,
)
