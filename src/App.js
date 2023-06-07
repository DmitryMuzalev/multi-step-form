import { useState } from 'react';
import Layout from './containers/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar';
import Content from './containers/Content/Content';
import { Route, Routes } from 'react-router-dom';
import PersonalInfo from './containers/Content/PersonalInfo/PersonalInfo';
import SelectPlan from './containers/Content/SelectPlan/SelectPlan';
import AddOns from './containers/Content/AddOns/AddOns';
import Summary from './containers/Content/Summary/Summary';

import iconArcade from './assets/images/icon-arcade.svg';
import iconAdvanced from './assets/images/icon-advanced.svg';
import iconPro from './assets/images/icon-pro.svg';

function App() {
  const [steps] = useState([
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
  ]);

  const [plans] = useState([
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
  ]);

  const [additions] = useState([
    {
      id: 1,
      name: 'Online service',
      description: 'Access multiplayer games',
      price: { yearly: 10, monthly: 1 },
    },
    {
      id: 2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: { yearly: 20, monthly: 2 },
    },
    {
      id: 3,
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: { yearly: 20, monthly: 2 },
    },
  ]);
  const [isMonthly, setIsMonthly] = useState(true);
  const [currentPlan, setCurrentPlan] = useState(1);
  const [currentStepNumber, setCurrentStepNumber] = useState(1);
  const currentStep = steps.find((steps) => steps.id === currentStepNumber);

  const onChangeCurrentPlan = (id) => {
    setCurrentPlan(id);
  };

  const onChangePlanMode = () => {
    setIsMonthly((prev) => !prev);
  };

  const selectStep = (id) => {
    setCurrentStepNumber(id);
  };

  return (
    <Layout>
      <Sidebar
        steps={steps}
        currentStepNumber={currentStepNumber}
        selectStep={selectStep}
      />
      <Content lastStep={steps.length} {...currentStep}>
        <Routes>
          <Route path="/" element=<PersonalInfo /> />
          <Route
            path="/step2"
            element=<SelectPlan
              plans={plans}
              onChangePlanMode={onChangePlanMode}
              onChangeCurrentPlan={onChangeCurrentPlan}
              isMonthly={isMonthly}
              currentPlan={currentPlan}
            />
          />
          <Route path="/step3" element=<AddOns additions={additions} /> />
          <Route path="/step4" element=<Summary /> />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
