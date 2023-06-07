import Switch from '../../../components/Form/Switch/Switch';
import SwitchLabel from '../../../components/Form/Switch/SwitchLabel/SwitchLabel';
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
        <SwitchLabel
          text="Monthly"
          isMonthly={isMonthly}
          onChangePlanMode={onChangePlanMode}
        />
        <Switch onChangePlanMode={onChangePlanMode} isMonthly={isMonthly} />
        <SwitchLabel
          text="Yearly"
          isMonthly={isMonthly}
          onChangePlanMode={onChangePlanMode}
        />
      </div>
    </>
  );
}
