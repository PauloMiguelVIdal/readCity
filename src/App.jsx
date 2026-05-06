import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Topbar from './components/topBar'
import { CardModal } from './components/CardModal'
// import ResultPages from '../src/components/ResultPages'


function App() {
  const [saldo, setSaldo] = useState(20000)



  return (
    <div classname="fixed w-full h-full bg-black">
      <Topbar />
      <CardModal
        nome="Silo"
        custo={5000}
        categoria="sell" // producao | venda | estoque | passiva
        saldo={saldo}
        setSaldo={setSaldo}
        liberado={true}
      />
      {/* <ResultPages/> */}
      <h1 className='text-white'>  paginas = moedas = edifícios</h1>
    </div>
  )
}

export default App
