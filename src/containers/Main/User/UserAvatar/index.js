
import React from 'react';

import { Root, Avatar } from './styles';

const UserAvatar = ({ avatarUrl }) => {

  return (
    <Root>
      {avatarUrl && <Avatar src={avatarUrl} alt='' />}
    </Root>
  );
};

export default UserAvatar;
