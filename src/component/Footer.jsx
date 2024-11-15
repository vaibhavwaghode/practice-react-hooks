import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Footer = () => {

    const phone = useContext(AppContext)
  return (
    <div>
        <h1>Footer</h1>
        <h1>{phone}</h1>

    </div>
  )
}

export default Footer
