import { useState } from 'react';
import Layout from './containers/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar';
import Content from './containers/Content/Content';
import { Route, Routes } from 'react-router-dom';
import PersonalInfo from './containers/Content/PersonalInfo/PersonalInfo';
import SelectPlan from './containers/Content/SelectPlan/SelectPlan';
import AddOns from './containers/Content/AddOns/AddOns';
import Summary from './containers/Content/Summary/Summary';

function App() {
  const [steps] = useState([
    { id: 1, title: 'your info', completed: true },
    { id: 2, title: 'select plan', completed: false },
    { id: 3, title: 'add-ons', completed: false },
    { id: 4, title: 'summary', completed: false },
  ]);

  //const [currentStep] = useState(1);

  return (
    <Layout>
      <Sidebar steps={steps} />
      <Content>
        <Routes>
          <Route path="/" element=<PersonalInfo /> />
          <Route path="/step2" element=<SelectPlan /> />
          <Route path="/step3" element=<AddOns /> />
          <Route path="/step4" element=<Summary /> />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
