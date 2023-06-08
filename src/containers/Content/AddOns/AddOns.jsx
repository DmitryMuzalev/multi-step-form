import Addition from '../../../components/Addition/Addition';

export default function AddOns({ additions, isMonthly }) {
  const listAdditions = additions.map((addition, index) => {
    return (
      <li key={index}>
        <Addition isMonthly={isMonthly} {...addition} />
      </li>
    );
  });

  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {listAdditions}
      </ul>
    </>
  );
}
