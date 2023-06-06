import Button from '../../../components/Form/Button/Button';
import Checkbox from '../../../components/Form/Checkbox/Checkbox';
import Header from '../../../components/Header/Header';
import PlanCard from '../../../components/PlanCard/PlanCard';

export default function SelectPlan({ plans, onChangePlanMode, isMonthly }) {
  const planList = plans.map((plan, index) => {
    return (
      <li key={index}>
        <PlanCard isMonthly={isMonthly} {...plan} />
      </li>
    );
  });

  return (
    <>
      <Header
        title="Select your plan"
        subtitle="You  have the option of monthly or yearly billing."
      />
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        {planList}
      </ul>
      <Button onClick={onChangePlanMode}>
        {isMonthly ? 'Monthly' : 'Yearly'}
      </Button>
      <Checkbox />
    </>
  );
}
