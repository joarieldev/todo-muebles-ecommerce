import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/ui/Navbar'
import Inicio from './pages/Inicio'
import Dormitorio from './pages/Dormitorio'
import Jardin from './pages/Jardin'
import Living from './pages/Living'
import Oficina from './pages/Oficina'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/dormitorio" element={<Dormitorio />} />
          <Route path="/jardin" element={<Jardin />} />
          <Route path="/living" element={<Living />} />
          <Route path="/Oficina" element={<Oficina />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
