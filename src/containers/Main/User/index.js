
import React from 'react';

import UserAvatar from './UserAvatar';
import UserProfile from './UserProfile';
import UserStats from './UserStats';
import { Root, UserDetail } from './styles';

const User = ({ user }) => {

  return (
    user ? (
      <Root>
        <UserAvatar avatarUrl={user.avatar_url} />
        <UserDetail>
          <UserProfile name={user.name} href={user.html_url} />
          <div>
            <p>{user.bio}</p>
          </div>
          <UserStats user={user} />
        </UserDetail>
      </Root>
    ) : <></>
  )
};

export default User;
