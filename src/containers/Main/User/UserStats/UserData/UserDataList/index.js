
import React from 'react';
import { Root, UserDataImage, UserDataLoginButton } from './styles';

const UserReposList = ({ data }) => {

  return (
    <ul >
      {data.map(({ id, full_name, stargazers_count, html_url }) => (
        <li key={id}>
          <h3><a href={html_url}>{full_name}</a></h3>
          <div>
            {stargazers_count}
          </div>
        </li>
      ))}
    </ul>
  );
};

const UserFollowList = ({ data }) => {

  return (
    <ul>
      {data.map(({ id, login, avatar_url, html_url }, index) => (
        <li key={id + index}>
          <UserDataImage src={avatar_url} alt='' />
          <h3><UserDataLoginButton href={html_url}>{login}</UserDataLoginButton></h3>
        </li>
      ))}
    </ul>
  );
};

const UserDataList = ({ repos, data }) => {

  return (
    <Root>
      {repos ? <UserReposList data={data} /> : <UserFollowList data={data} />}
    </Root>
  );
};

export default UserDataList;
