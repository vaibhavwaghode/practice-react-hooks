import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Contact = () => {

  const phoneNumber = useContext(AppContext);
  return (
    <div>
        <h1>Phone Number in Another child component:{phoneNumber}</h1>
    </div>
  )
}

export default Contact
