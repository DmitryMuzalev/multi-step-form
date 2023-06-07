import Switch from 'react-custom-checkbox/switch';

const checkedTrackStyle = {
  opacity: 1,
  transition: 'all 0.25s ease-in-out',
};

const checkedIndicatorStyle = {
  transform: 'translateX(20px)',
};

const wrapperStyle = {
  display: 'inline-block',
  margin: 0,
};
const containerStyle = {
  cursor: 'pointer',
  margin: 0,
};

const indicatorStyle = {
  alignItems: 'center',
  background: '#ffffff',
  borderRadius: 6,
  bottom: 4,
  display: 'flex',
  height: 12,
  justifyContent: 'center',
  left: 4,
  position: 'absolute',
  transition: '0.25s',
  width: 12,
};

const trackStyle = {
  background: '#03295A',
  borderRadius: 15,
  display: 'flex',
  height: 20,
  position: 'relative',
  width: 40,
};

export default function Checkbox({ isMonthly, onChangePlanMode }) {
  return (
    <Switch
      checked={!isMonthly}
      onChange={onChangePlanMode}
      trackStyle={trackStyle}
      indicatorStyle={indicatorStyle}
      checkedTrackStyle={checkedTrackStyle}
      checkedIndicatorStyle={checkedIndicatorStyle}
      wrapperStyle={wrapperStyle}
      containerStyle={containerStyle}
    />
  );
}
