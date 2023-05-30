import { BotonesTwiter } from './components/BotonesTwiter'
import { BotonesInstagram } from './components/BotonesInstagram'

export function BotonesRedes () {
  return (
    <main className='social-buttons'>
      <BotonesInstagram />
      <hr />
      <BotonesTwiter />
    </main>
  )
}
