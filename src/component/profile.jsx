import React from 'react';
import Contact from './Contact';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Profile = () => {

    const phone = useContext(AppContext)
  return (
    <div>
        <h1>profile</h1>
        <h1>contact no: {phone}</h1>
        <Contact/>
    </div>
  )
}

export default Profile
