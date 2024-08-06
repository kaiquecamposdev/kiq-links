import Perfil from '@/assets/perfil.png'
import { useState } from 'react'

export function Header() {
  const [age, setAge] = useState(0)

  setTimeout(() => {
    const currentDate = new Date() 
    const anniversary = new Date("2005-02-19T00:00:00.000Z")

    if (currentDate.getDay() === anniversary.getDay() && currentDate.getMonth() === anniversary.getMonth()) {
      const currentAge = currentDate.getFullYear() - anniversary.getFullYear()

      setAge(currentAge)
    }
  }, 1000000) 
  

  return (
    <header className="flex flex-col items-center gap-2 p-2">
      <img
        src={Perfil}
        alt=""
        className="max-w-28 max-h-28 rounded-full border-[2px] border-zinc-400 transition-transform hover:scale-[1.1]"
      />
      <h2 className="text-center text-lg font-medium leading-relaxed">
        Tenho {age} anos, E sou <strong>Desenvolvedor Web.</strong>
      </h2>
    </header>
  )
}
