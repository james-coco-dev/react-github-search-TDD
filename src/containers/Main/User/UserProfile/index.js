
import React from 'react';
import { Root, VisitButton } from './styles';

const UserProfile = ({ name, href }) => {

  return (
    <Root>
      <h4 className='user-name'>{name}</h4>
      <VisitButton className='btn-visit' href={href} >Visit Profile</VisitButton>
    </Root>
  );
};

export default UserProfile;
