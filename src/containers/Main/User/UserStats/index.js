
import React, { useState } from 'react';

import UserData from './UserData';
import { Root, Fields, Ul, Li } from './styles';
import { FOLLOWERS_ENDPOINT, FOLLOWING_ENDPOINT, REPOS_ENDPOINT } from '../../../../utils/constants';

const UserStats = ({ user }) => {
  const [url, setUrl] = useState('');

  const getUserData = url => event => {
    setUrl(url);
  };

  return (
    <Root>
      <Fields>
        <Ul>
          <Li onClick={getUserData(`${user.url}${FOLLOWING_ENDPOINT}`)} >
            <b>{user.following}</b>
            <p>Following</p>
          </Li>
          <Li onClick={getUserData(`${user.url}${FOLLOWERS_ENDPOINT}`)} >
            <b>{user.followers}</b>
            <p>Followers</p>
          </Li>
          <Li onClick={getUserData(`${user.url}${REPOS_ENDPOINT}`)} >
            <b>{user.public_repos}</b>
            <p>Repos</p>
          </Li>
        </Ul>
      </Fields>
      {url && <UserData url={url} />}
    </Root>
  );
};

export default UserStats;
