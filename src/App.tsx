import { useState } from 'react'
import { Button } from './components/common/Button'
import { ButtonVariants } from './components/common/Button/Button.constants'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant={ButtonVariants.Default} onClick={() => setCount (count + 1)}>Quero adotar</Button>

      <Button variant={ButtonVariants.Outlined} onClick={() => setCount (count + 1)}>Tenho um abrigo</Button>
      
    </>
  )
}
