import { Select } from 'components/select/Select';
import { eachMonthOfInterval, endOfYear, format, startOfYear } from 'date-fns';

interface MonthSelectProps {
  activeMonth: Date;
  onChange?: Function;
}

export const MonthSelect: React.FC<MonthSelectProps> = ({ activeMonth, onChange }) => {
  const startOfYearDate = startOfYear(new Date());
  const endOfYearDate = endOfYear(new Date());

  const toSelectOption = (month: Date) => {
    return {
      label: format(month, 'MMMM'),
      value: month
    };
  };

  const yearInterval = { start: startOfYearDate, end: endOfYearDate };
  const months = eachMonthOfInterval(yearInterval);
  const options = months.map(month => toSelectOption(month));

  return (
    <div className="w-36">
      <Select
        items={options}
        label="Month"
        selectedItem={toSelectOption(activeMonth)}
        onSelectedItemChange={({ selectedItem }) => onChange(selectedItem.value)}
      />
    </div>
  );
};
