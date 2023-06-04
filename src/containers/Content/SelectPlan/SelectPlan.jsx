import Header from '../../../components/Header/Header';
import PlanCard from '../../../components/PlanCard/PlanCard';

export default function SelectPlan() {
  return (
    <>
      <Header
        title="Select your plan"
        subtitle="You  have the option of monthly or yearly billing."
      />
      <div>
        <PlanCard />
      </div>
    </>
  );
}
