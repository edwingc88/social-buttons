import { useState } from 'react'
import { ModalFollowInstagram } from './ModalFollowInstagram'

export function InstagramFollowCard ({ userNameT, initialIsFollowingT, children }) {
  const [isFollowingT, setIsFollowingT] = useState(initialIsFollowingT)
  const [isShown, setIsShown] = useState(false)
  const textT = isFollowingT ? 'Solicitado' : 'Seguir'
  const handleClick = () => {
    setIsFollowingT(!isFollowingT)
  }

  const buttonClassName = isFollowingT
    ? 'ins-followCard-button ins-following'
    : 'ins-followCard-button'

  const modalClassName = isShown
    ? 'card-modal'
    : 'modal-close'

  const cambioEstado = (value) => {
    console.log('mousoe LEAVE')
    setIsShown(value)
  }

  return (
    <>
      <div className='inst-card' key={userNameT}>
        <article className='inst-card-follow'>
          <div className='foto'><img src={`https://unavatar.io/${userNameT}`} alt='Avatar user' /></div>
          <div className='info'>
            <strong onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>{userNameT}</strong>
            <span>{children}</span>
          </div>
        </article>
        <aside className='inst-card-boton' onClick={handleClick}>
          <span className={buttonClassName}>{textT}</span>
        </aside>
        <ModalFollowInstagram
          modalClass={modalClassName} modalCambio={cambioEstado}
        />
      </div>
    </>
  )
}
