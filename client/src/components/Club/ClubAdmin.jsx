import React from 'react';
import classnames from 'classnames';
import ClubInfo from './ClubInfo';
import Button from '../Button';

export default function ClubAdmin() {
  return (
    <div>
      {/* 
          admin buttons and features will probably be where normal user
          actions for the club are, we can switch later and refactor components as we go  
        */}
      <section className="book-club__header-admin">
        <Button>Change Book</Button>
        <Button>Schedule a Meeting</Button>
        <br/>
        <span>Announce Message:</span>
      </section>
      <section>
        <ClubInfo />
      </section>
    </div>
  );
}
