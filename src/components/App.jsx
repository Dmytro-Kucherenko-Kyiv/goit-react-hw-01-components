import user from './Profile/user.json';
import data from './Statistics/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics'

export const App = () => {
  return (
    <div
      style={{
        /* height: '100vh', */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: '25px'
      }}
    >
      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

    </div>
  );
};