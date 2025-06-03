import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Formulario } from './Componentes/Formulario.jsx'
import Pessoas from './Pessoas.jsx'

let rotas={
  "/pessoas" : <Pessoas/>,
  "/form" : <Formulario/>
}
let pagina = rotas[window.location.pathname] ?? <App />;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {pagina}
  </StrictMode>,
)