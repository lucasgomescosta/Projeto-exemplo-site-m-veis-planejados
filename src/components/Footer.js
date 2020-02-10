import React from 'react';
import BtnWhatsapp from '../components/BtnWhatsapp';

const Footer = () => {
  return (
    <div className='p-4 bg-indigo-800 sm:flex justify-between items-center'>
      <div>
        <h5>Lima Móveis</h5>
        <p> Rua tal, bairro y.</p>
      </div>
      <BtnWhatsapp />
    </div>
  )
}

export default Footer;