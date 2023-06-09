import React, { useContext, useState } from 'react';

import iconArcade from '../../assets/images/icon-arcade.svg';
import iconAdvanced from '../../assets/images/icon-advanced.svg';
import iconPro from '../../assets/images/icon-pro.svg';

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState({
    userInfo: {
      name: null,
      email: null,
      phone: null,
    },
    isMonthly: true,

    steps: [
      {
        id: 1,
        label: 'your info',
        title: 'Personal info',
        subtitle: 'Please provide your name, email address, and phone number.',
      },
      {
        id: 2,
        label: 'select plan',
        title: 'Select your plan',
        subtitle: 'You  have the option of monthly or yearly billing.',
      },
      {
        id: 3,
        label: 'add-ons',
        title: 'Pick add-ons',
        subtitle: 'Add-ons help enhance your gaming experience.',
      },
      {
        id: 4,
        label: 'summary',
        title: 'Finishing up',
        subtitle: 'Double-check everything looks OK before confirming.',
      },
    ],

    plans: [
      {
        id: 1,
        label: 'Arcade',
        icon: iconArcade,
        price: { yearly: 90, monthly: 9 },
      },
      {
        id: 2,
        label: 'Advanced',
        icon: iconAdvanced,
        price: { yearly: 120, monthly: 12 },
      },
      {
        id: 3,
        label: 'Pro',
        icon: iconPro,
        price: { yearly: 150, monthly: 15 },
      },
    ],

    additions: [
      {
        id: 1,
        title: 'Online service',
        description: 'Access multiplayer games',
        price: { yearly: 10, monthly: 1 },
      },
      {
        id: 2,
        title: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        price: { yearly: 20, monthly: 2 },
      },
      {
        id: 3,
        title: 'Customizable profile',
        description: 'Custom theme on your profile',
        price: { yearly: 20, monthly: 2 },
      },
    ],
  });
  const setValue = (value) => {
    setData((prevData) => ({ ...prevData, ...value }));
  };
  return (
    <AppContext.Provider value={{ data, setValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useDate = () => useContext(AppContext);
