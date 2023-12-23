
import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'

function App() {
  const [thememode,setThememode]=useState('light')
  const lighttheme=()=>{
    setThememode("light")
  }
  const darktheme=()=>{
    setThememode("dark")
  }
  useEffect(() => {
    const hold=document.querySelector('html')
    hold.classList.remove("light","dark")
    hold.classList.add(thememode)
  }, [thememode])
  return (
    <>
    <ThemeProvider value={{thememode,darktheme,lighttheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    {/* THeme Button */}
                    <ThemeBtn/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                       <Card/>
                    </div>
                </div>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
