import { usersTwiter } from '../users/DataSocialUser.jsx'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function BotonesTwiter () {
  return (
    <>
      <h2>Twiter</h2>
      <section className='twiter'>
        {
          usersTwiter.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
    </>

  )
}
