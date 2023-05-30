import { usersInstagram } from '../users/DataSocialUser.jsx'
import { InstagramFollowCard } from './InstagramFollowCard.jsx'

export function BotonesInstagram () {
  return (
    <>
      <h2>Instagram</h2>
      <section className='instagram'>
        {
            usersInstagram.map(({ userNameT, nameT, isFollowingT }) => (
              <InstagramFollowCard
                key={userNameT}
                userNameT={userNameT}
                initialIsFollowingT={isFollowingT}
              >
                {nameT}
              </InstagramFollowCard>
            ))
        }
      </section>
    </>
  )
}
