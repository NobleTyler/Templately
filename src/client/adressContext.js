import React, from 'react';

const adress = {
  relationship: null,
  contactName: null,
  company: null,
  reffer: null,
  message: null,
  username: null
};

export const adressContext = React.createContext(adress);
