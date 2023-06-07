import Checkbox from '../../../components/Form/Checkbox/Checkbox';
import CheckboxLabel from '../../../components/Form/Checkbox/CheckboxLabel/CheckboxLabel';
import PlanCard from '../../../components/PlanCard/PlanCard';

export default function SelectPlan({
  plans,
  onChangePlanMode,
  onChangeCurrentPlan,
  isMonthly,
  currentPlan,
}) {
  const planList = plans.map((plan, index) => {
    return (
      <li key={index}>
        <PlanCard
          onChangeCurrentPlan={onChangeCurrentPlan}
          isMonthly={isMonthly}
          currentPlan={currentPlan}
          {...plan}
        />
      </li>
    );
  });

  return (
    <>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '45px',
        }}
      >
        {planList}
      </ul>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '25px',
        }}
      >
        <CheckboxLabel
          text="Monthly"
          isMonthly={isMonthly}
          onChangePlanMode={onChangePlanMode}
        />
        <Checkbox onChangePlanMode={onChangePlanMode} isMonthly={isMonthly} />
        <CheckboxLabel
          text="Yearly"
          isMonthly={isMonthly}
          onChangePlanMode={onChangePlanMode}
        />
      </div>
    </>
  );
}
