export function ModalFollowInstagram ({ modalClass, modalCambio }) {
  return (
    <>
      <div className={modalClass} onMouseLeave={() => modalCambio(false)} onMouseEnter={() => modalCambio(true)}>
        <div className='perfil'>
          <div className='pefil-foto'>
            <img src='https://unavatar.io/instagram/edwin.gc_88' alt='foto' />
          </div>
          <div className='pefil-info'>
            <span>YOHanamontes</span>
            <p>Yohana Veliz</p>
          </div>
        </div>
        <div className='follows'>
          <div className='follows-values'>
            <p>20</p>
            <p>Publicaciones</p>
          </div>
          <div className='follows-values'>
            <p>214</p>
            <p>Seguidores</p>
          </div>
          <div className='follows-values'>
            <p>219</p>
            <p>Siguiendo</p>
          </div>
        </div>
        <div className='fotos'>
          <div className='fotos-img'>
            <img src='https://random.imagecdn.app/150/150' alt='foto1' />
          </div>
          <div className='fotos-img'>
            <img src='https://random.imagecdn.app/150/151' alt='foto1' />
          </div>
          <div className='fotos-img'>
            <img src='https://random.imagecdn.app/150/149' alt='foto1' />
          </div>
        </div>
        <div className='botonModal'>
          <button className='botonModal-seguir ins-followCard-button'>Seguir</button>
        </div>
      </div>
    </>
  )
}
