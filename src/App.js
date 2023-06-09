import { useState } from 'react';
import Layout from './containers/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar';
import Content from './containers/Content/Content';
import { Route, Routes } from 'react-router-dom';
import PersonalInfo from './containers/Content/PersonalInfo/PersonalInfo';
import SelectPlan from './containers/Content/SelectPlan/SelectPlan';
import AddOns from './containers/Content/AddOns/AddOns';
import Summary from './containers/Content/Summary/Summary';
import { useDate } from './containers/AppContext/AppContext';

function App() {
  const { data, setValue } = useDate();
  const { steps, plans, additions, isMonthly } = { ...data };
  const [currentPlan, setCurrentPlan] = useState(1);
  const [currentStepNumber, setCurrentStepNumber] = useState(1);

  const currentStep = steps.find((steps) => steps.id === currentStepNumber);

  const onChangeCurrentPlan = (id) => {
    setCurrentPlan(id);
  };

  const onChangePlanMode = () => {
    setValue({ isMonthly: !isMonthly });
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
          <Route
            path="/step3"
            element=<AddOns additions={additions} isMonthly={isMonthly} />
          />
          <Route path="/step4" element=<Summary /> />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
