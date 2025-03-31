import { useContext, useState } from 'react'
import { Button } from '@/components/ui/button.tsx'
// import './App.css'
import AlertDialogDemo from './myComponents/AlertDialogDemo'
import FormAchat from './myComponents/FormAchat'
import AvatarDemo from './myComponents/AvatarDemo'
import { SheetDemo } from './myComponents/SheetDemo'
import PopoverDemo from './myComponents/PopoverDemo'
import { Context } from '../context/apiContext'

function App() {

  const [apiData, setApiData] = useState([])
  const [produitAdditionner, setProduitAdditionner] = useState(0)
  const [nombreDeProduit, setNombreDeProduit] = useState(0)
  const [totalAchat, setTotalAchat] = useState(0)
  return (
    <>
      <header className='border shadow-md'>
        <div className=' flex p-5 bg-[#fff]'>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
            </svg>
          </span>
          <span className='ml-auto'>
            <PopoverDemo />
          </span>
        </div>
      </header>
      <Context.Provider value={{
        apiData, setApiData, produitAdditionner,
        setProduitAdditionner, nombreDeProduit, setNombreDeProduit,
        totalAchat, setTotalAchat
      }}>

        <main className=' mt-11'>
          <FormAchat />
        </main>
      </Context.Provider>
    </>
  )
}

export default App
