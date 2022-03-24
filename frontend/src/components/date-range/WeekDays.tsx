import { addDays, format, previousMonday } from 'date-fns';

export const WeekDays: React.FC = () => {
  const randomDate = new Date(2022, 6, 6);
  const lastMonday = previousMonday(randomDate);
  const daysPerWeek = Array(7).fill('', 0, 7);

  return (
    <>
      {daysPerWeek.map((_, idx) => (
        <div className="day p-4 text-white font-medium text-center" key={`${_}${idx}`}>
          {format(addDays(lastMonday, idx), 'EEEEEE')}
        </div>
      ))}
    </>
  );
};
